import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const payload = { uid: user.uid, email: user.email };
        dispatch(login(payload));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Landing />
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/browse/:movie" component={MovieDetails} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
