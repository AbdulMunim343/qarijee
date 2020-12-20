import React, { useContext } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { appContext } from "../../context";
import './dashboard.css'


export default function DashboardWrapper(props) {
  const [authStatus, setAuthStatus] = useContext(appContext);
  return (
    <Switch>
      <Route to="/">
        {authStatus.login ? (
          <Dashboard authStatus={authStatus}/>
        ) : (
          <Redirect to="/auth/" />
        )}
      </Route>
    </Switch>
  );
}

function Dashboard({authStatus}) {
  return (
    <div id="DashboardContainer">
    <section id="mainSectionDashboard">
        <h1>Welcome</h1>
        <h2>{authStatus.email}</h2>
        <h3>Your dashboard will show here...</h3>
    </section>
    </div>
  );
}
