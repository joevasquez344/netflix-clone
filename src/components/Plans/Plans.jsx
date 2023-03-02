import React, { useState, useEffect } from "react";
import "./Plans.css";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

const Plans = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);
  console.log("User: ", user);
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      console.log("Session Id: ", snap);

      if (error) {
        alert(`An error occured ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51JWu6aGvZG2RTzT3QBgdNyEiBb17owhyc1jg9VXD1HVQKY0WW0boLoU7hiClohmvY5L5Dq2RVHPDLlAt8ejGvNoo00Yq97qpDo"
        );

        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (subscription) => {
          console.log("Subscription: ", subscription.data());

          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        console.log(Object.entries(products));
        setProducts(products);
      });
  }, []);

  console.log(products);
  console.log(
    "Subscription: ",
    subscription?.role?.charAt(0).toUpperCase() + subscription?.role?.slice(1)
  );

  return (
    <div className="plans">
      <div className="plans__list">
        {Object.entries(products).map(([productId, productData]) => {
          return (
            <div key={productId} className="plans__item">
              <div className="plans__info">
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>
              {subscription?.role === productData.role ? (
                <button style={{background: 'gray', cursor: 'default'}}
                // onClick={() => loadCheckout(productData.prices.priceId)}
                >
                  Current Plan
                </button>
              ) : (
                <button
                  onClick={() => loadCheckout(productData.prices.priceId)}
                >
                  Subscribe
                </button>
              )}
            </div>
          );
        })}
        {/* {products.map((product) => (
          <div className="plans__item">Item</div>
        ))} */}
      </div>
    </div>
  );
};

export default Plans;
