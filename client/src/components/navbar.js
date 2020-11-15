import React from 'react';
import './navbar.css'
export default function NavBar(props){
    return(<>
        <nav>
            <section id='logoSection'><h2>QARI JEE</h2></section>
            <section id='NavButtonsSection'>
            <button className='NavButtons'>HOME</button>
            <button className='NavButtons'>COURSES</button>
            <button className='NavButtons'>MEMBERSHIP</button>
            <button className='NavButtons'>CONTACT</button>
            <button className='NavButtons'>LOGIN</button>
            </section>
        </nav>
    </>)
}