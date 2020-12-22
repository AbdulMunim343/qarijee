import React, {Component} from 'react';
import './Contact.scss';

//======import icons=======
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';




class Contact extends Component{
    render(){
        return(
            <>
<div className="contact_main">
   <div className="itleConatine">
      <h1>Conatact</h1>
   </div>
   <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="100%" height="300" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
   </div>
   {/* Contact us from  */}
   <div className="Flex_contact">
      <div className="icons_contaniner">
         <div className="address">
            <i className="cont_icons">
               <FaMapMarkerAlt/>
            </i>
            <div className="addtxt">
               <h4>Location</h4>
               <p>A108 Adam Street, New York, NY 535022</p>
            </div>
         </div>
         <div className="address">
            <i className="cont_icons">
               <FaEnvelope/>
            </i>
            <div className="addtxt">
               <h4>Email:</h4>
               <p>contact@qarijee.com</p>
            </div>
         </div>
         <div className="address">
            <i className="cont_icons">
               <FaPhoneAlt/>
            </i>
            <div className="addtxt">
               <h4>Call:</h4>
               <p>+92 301 235 6895</p>
            </div>
         </div>
      </div>
      <div className="form_area">
         <form>
            <div className="input_warppper">
               <lable>
                  Your Name (required)
               </lable>
               <input type="text"/>
            </div>
            <div className="input_warppper">
               <lable>
                  Your Email (required)
               </lable>
               <input type="text"/>
            </div>
            <div className="input_warppper">
               <lable>
                  Subject
               </lable>
               <input type="text"/>
            </div>
            <div className="input_warppper">
               <lable>
                  Subject
               </lable>
               <textarea rows="10"></textarea>
            </div>
            <buttton type="submit" className="submit">Send</buttton>
         </form>
      </div>
   </div>
</div>
            </>
        )
    }
}



export default Contact;


