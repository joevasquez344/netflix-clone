import React, { useRef } from "react";
import "./Login.css";
import { auth } from "../../firebase";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
console.log('hello')
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser.user);
      })
      .catch((error) => alert(error.message));
  };
  const login = (e) => {
    e.preventDefault();
    console.log("User: ", emailRef);

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log("User: ", authUser);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={login} type="submit">
          Sign In
        </button>
        <h4>
          {" "}
          <span>New to Netflix?</span>{" "}
          <span onClick={register}>Sign Up now</span>
        </h4>
      </form>
    </div>
  );
};

export default Login;
