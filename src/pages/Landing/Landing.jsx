import React, { useState } from "react";
import "./Landing.css";
import Login from "../Login/Login";

const Landing = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="landing">
      <div className="landing__background">
        <img
          className="landing__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
        />
        <button onClick={() => setSignIn(true)} className="landing__button">
          Sign In
        </button>
        <div className="landing__gradient"></div>
      </div>
      <div className="landing__body">
        {signIn ? (
          <Login />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="landing__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="landing__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
