import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

//======import Components=======//
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Membership from './components/membership/Membership';
import Contact from './components/contact/Contact';
import Navbar from './common/navbar/Navbar';
import Footer from "./common/footer/Footer";
import Auth from './components/authentication/auth';
import DashboardWrapper from './components/Dashboard/dashboard';

// ===== import messanger component =====//
import MessengerCustomerChat from "./components/messanger/mesanger"

// firebase config
import { firebaseConfig } from './firebaseConfig'

// context API
import { appContext } from './context';

// fireabse config initialization
firebase.initializeApp(firebaseConfig);

export default function App() {
    let [authStatus, setAuthStatus] = useContext(appContext);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(res => {
            if (res != null) {
                setAuthStatus(true)
            }
        })
    })

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/courses' component={Courses} />
                <Route path='/membership' component={Membership} />
                <Route path='/contact' component={Contact} />
                <Route path='/auth/' component={Auth} />
                <Route path='/user/dashboard/' component={DashboardWrapper} />
            </Switch>
            <MessengerCustomerChat />
            <Footer />
        </>
    )
}