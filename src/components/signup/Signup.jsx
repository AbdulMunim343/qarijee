import React,{Component} from "react";
import '../signup/Signup.scss';

//============import icons images============//
import Google from '../../assets/img/gmail.png';
import Facbook from '../../assets/img/Facebook-Logo.png'

const SignIn = () =>{
    return(
        <>
<div className="loginCont">
         <h1>Sign in to your acount</h1>
         <p>Buid skills for today, tomorrow, and beyond <br/> Education to future-proof your career</p>
         <div className="channel_btn">
            <a href="">
            <img src={Google} className="sigImg" />
            <span>Sign up with Google</span>
            </a>
            <a href="">
            <img src={Facbook} className="sigImg"/>
            <span>Sign up with Facebook</span>
            </a>
         </div>
         <div className="oR">
            <hr/>
            <span>or</span>
            <hr/>
         </div>
         <div className="inpu_wrapper">
            {/* form Start */}
            <form>
               <input type="text" placeholder="Email Address"/>
               <input type="text" placeholder="Password"/>
               <p>By clicking sign in,you are agree to our <span>Term of Use</span> and uor <span>Privacy Policy</span>.</p>
               <div className="btnWrapper">
                  <button type="submit">SIGN IN</button>
               </div>
               <p className="forgetPass">Forget Your Password</p>
            </form>
            {/* form end */}
            <div className="oR">
               <hr/>
               <span>or</span>
               <hr/>
            </div>

            <p className="forgetPass">Sign in with your orgnization </p>
         </div>
      </div> 
        </>
    )
}

const SignUp = () =>{
    return(
        <>
<div className="loginCont">
    <h1>Create your acount</h1>
    <p>Buid skills for today, tomorrow, and beyond <br/> Education to future-proof your career</p>
    <div className="channel_btn">
       <a href="">
       <img src={Google} className="sigImg" />
       <span>Sign up with Google</span>
       </a>
       <a href="">
       <img src={Facbook} className="sigImg"/>
       <span>Sign up with Facebook</span>
       </a>
    </div>
    <div className="oR">
       <hr/>
       <span>or</span>
       <hr/>
    </div>
    <div className="inpu_wrapper">
    {/* form Start */}
    <form>
       <input type="text" placeholder="First Name"/>
          <input type="text" placeholder="Last Name"/>
          
          <input type="text" placeholder="Email Address"/>
          <input type="text" placeholder="Password"/>
          <p>By clicking sign in,you are agree to our <span>Term of Use</span> and uor <span>Privacy Policy</span>.</p>
          <div className="btnWrapper">
             <button type="submit">SIGN UP</button>
          </div>
        
    </form>
     {/* form End */}
    </div>
 </div>
        </>
    )
}


class Signup extends Component{

   render(){
        return(
            <>
<div className="rdx_container">
   <div className="sgp_container">
      <div className="nav_Btn">
         <span>SIGN UP</span>
         <span>SIGN IN</span>
      </div>
      <SignIn/>
     
   </div>
</div>
            </>
        );
    }
}


export default Signup;
export {SignIn,SignUp};