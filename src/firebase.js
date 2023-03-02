import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrm-vWilhrw9dVO0eWF41Duy_ARzJOGfQ",
  authDomain: "netflix-clone-a40d9.firebaseapp.com",
  projectId: "netflix-clone-a40d9",
  storageBucket: "netflix-clone-a40d9.appspot.com",
  messagingSenderId: "416103854218",
  appId: "1:416103854218:web:5670d27bd633986026bd73",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
