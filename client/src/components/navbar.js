import React from 'react';
import './navbar.css';
import Fade from 'react-reveal/Fade'
export default function NavBar(props){
    return(<>
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
                <button className='NavButtons'>LOGIN</button>
                </section>
            </Fade>
        </nav>
    </>)
}