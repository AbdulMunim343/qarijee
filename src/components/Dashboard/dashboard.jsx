import React, { useContext } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { appContext } from "../../context";
import "./dashboard.css";
import firebase from "firebase";
import { Button } from "@material-ui/core";

export default function DashboardWrapper(props) {
  const [authStatus,setAuthStatus] = useContext(appContext);
  return (
    <Switch>
      <Route to="/">
        {authStatus ? (
          <Dashboard authStatus={authStatus} setAuthStatus={setAuthStatus} />
        ) : (
          <Redirect to="/auth/" />
        )}
      </Route>
    </Switch>
  );
}

function Dashboard({ authStatus,setAuthStatus }) {
  let handleSignOut = () => {
    firebase.auth().signOut();
    setAuthStatus(false);
  };
  return (
    <div id="DashboardContainer">
      <section id="mainSectionDashboard">
        <h1>Welcome</h1>
        {/* <h2>{authStatus.email}</h2> */}
        <h3>Your dashboard will show here...</h3>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => handleSignOut()}
        >
          Logout
        </Button>
      </section>
    </div>
  );
}
