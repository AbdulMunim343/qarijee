import React, { useState, useContext } from "react";
import "./auth.css";
import firebase from "firebase";
import { Switch, Route, Link, Redirect ,useHistory} from "react-router-dom";

//context
import { appContext } from "../../context";

export default function Auth() {
  const [authStatus, setAuthStatus] = useContext(appContext);
  let history = useHistory()
  return (
    <div id="container">
      <section id="authSection">
        <article id="authHeader">
          <button>
            <Link to="/auth/">SignIn?</Link>
          </button>
          <button>
            <Link to="/auth/signup">SignUp?</Link>
          </button>
        </article>
        <Switch>
          <Route exact path="/auth/">
            {authStatus ? (
              // <Redirect to={"/user/dashboard/"} />
              history.push('/user/dashboard/')
            ) : (
              <SignIn setAuthStatus={setAuthStatus} />
            )}
          </Route>
          <Route path="/auth/signup">
            {authStatus? (
              // <Redirect to={"/user/dashboard/"} />
              history.push('/user/dashboard/')

            ) : (
              <SignUp setAuthStatus={setAuthStatus} />
            )}
          </Route>
        </Switch>
      </section>
    </div>
  );
}

function SignIn({ setAuthStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setAuthStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <article className="authInputSection">
        <input
          placeholder="Enter Email"
          className="formInput"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Enter Password"
          className="formInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Link to="/auth/signup">Dont have account?</Link>
      </article>
      <article className="authButtonSection">
        <button className="authButton" onClick={() => handleSignIn()}>
          SignIn
        </button>
      </article>
    </>
  );
}

function SignUp({ setAuthStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let handleSignUp = () => {
    if (password != confirmPassword) {
      return -1;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, confirmPassword)
      .then((res) => {
        setAuthStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <article className="authInputSection">
        <input
          placeholder="Enter Email"
          className="formInput"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Enter Password"
          className="formInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          placeholder="Enter Confirm Password"
          className="formInput"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </article>
      <article className="authButtonSection">
        <button className="authButton" onClick={() => handleSignUp()}>
          SignUp
        </button>
      </article>
    </>
  );
}
