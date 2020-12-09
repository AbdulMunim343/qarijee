import React,{Component} from "react";
import {NavLink} from 'react-router-dom';
import '../navbar/Navbar.scss';




const Under = {
    textDecoration:'none',
  }





class Navbar extends Component{
    render(){
        return(
            <>
<header>
   <nav>
      <div className="logo">
         <h1>Qari Jee</h1>
      </div>
      <ul>
         <NavLink exact activeClassName="nav_active" to="/" style={Under}>
            <li>
               <span>Home</span>
            </li>
         </NavLink>
         <NavLink activeClassName="nav_active" to="/courses" style={Under}>
            <li>
               <span>Courses</span>
            </li>
         </NavLink>
         <NavLink activeClassName="nav_active" to="/membership" style={Under}>
            <li>
               <span>Membership</span> 
            </li>
         </NavLink>
         <NavLink activeClassName="nav_active" to="/contact" style={Under}>
            <li>
               <span>Contact</span>   
            </li>
         </NavLink>
         <li>
            <span>Login</span>   
         </li>
      </ul>
   </nav>
   {/* 
   <div class="Login_container">
      <div className="login_warpper">
         <div className="top_log">
            <h3>New to site? 
               <a href="#">Create an Account</a>
            </h3>
            <AiOutlineClose className="cls"/>
         </div>
         <hr/>
         <h1>Login</h1>
         <form>
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Password"/>
            <button type="submit">Login</button>
         </form>
         <a href="#" className="lost">Lost password?</a>
      </div>
   </div>
   */}
</header>
            </>
        )
    }
}


export default Navbar;