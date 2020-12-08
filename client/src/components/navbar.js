import React, { useState } from 'react';
import './navbar.css';
import Fade from 'react-reveal/Fade';// Package for animation
import firebase from 'firebase';

export default function NavBar() {
    // caching user data fetched from firebase
    let [userData, setUser] = useState({});
    // function to handle firebase login.
    let handleAuth = () => {
        // constructor
        let base_provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(base_provider).then(res => {
            setUser(res.additionalUserInfo)
        })

    }
    let handleSignOut = () => {
        let check=prompt("Are you sure, want to logout")
        if(check=="yes"){firebase.auth().signOut().then(res=>setUser(null))}
    }
    if(firebase.auth().currentUser != null){document.title = userData.profile.name}
    return (
        <>
            <nav>
                <Fade left>
                    <section id='logoSection'><h2>QARI JEE</h2></section>
                </Fade>
                <Fade right>
                    <section id='NavButtonsSection'>
                        <button className='NavButtons'>HOME</button>
                        <button className='NavButtons'>COURSES</button>
                        <button className='NavButtons'>MEMBERSHIP</button>
                        <button className='NavButtons'>CONTACT</button>
                        {
                            firebase.auth().currentUser == null ?
                                <button className='NavButtons' onClick={() => handleAuth()}>LOGIN</button>
                                :
                                <button id='userProfileButton' onClick={() => handleSignOut()}>
                                    <img src={userData!=null?userData.profile.picture:""} />
                                </button>
                                
                        }
                    </section>
                </Fade>
            </nav>
        </>)
}