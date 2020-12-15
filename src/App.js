import React, {Component} from "react";
import {Switch,Route} from "react-router-dom";
import "./App.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//======import Components=======//
import Home from './components/home/Home';
import Courses from './components/courses/Courses';
import Membership from './components/membership/Membership';
import Contact from './components/contact/Contact';
import Navbar from './common/navbar/Navbar';
import Footer from "./common/footer/Footer";

// ===== import messanger component =====//
import MessengerCustomerChat from "./components/messanger/mesanger"



class App extends Component{
    render(){
        return(
            <>
            <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/courses' component={Courses}/>
                    <Route path='/membership' component={Membership}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            <MessengerCustomerChat/>
            <Footer/>
            </>
        )
    }
}

export default App;