import React,{Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



//========import icons==========//
import {ImQuotesLeft} from "react-icons/im";
import {ImQuotesRight} from "react-icons/im";


class Revslider extends  Component{
render(){

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      className: 'notes-slider',
      autoplay: true,
      autoplaySpeed: 7000,
      dots:true
   
      };

      
    return(
        <>
<div className="slider_without">
   <div className="mian_slid">
   
   <Slider {...settings}>
  
      
      <div className="Slide">
         <h3>Mohsin Khan</h3>
         <h4>Hdees</h4>
         <p>
            <i className="qout">
               <ImQuotesLeft/>
            </i>
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
            <i className="qout">
               <ImQuotesRight/>
            </i>
         </p>
      </div>

      <div className="Slide">
         <h3>Mohsin Khan</h3>
         <h4>Hdees</h4>
         <p>
            <i className="qout">
               <ImQuotesLeft/>
            </i>
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
            <i className="qout">
               <ImQuotesRight/>
            </i>
         </p>
      </div>

      <div className="Slide">
         <h3>Mohsin Khan</h3>
         <h4>Hdees</h4>
         <p>
            <i className="qout">
               <ImQuotesLeft/>
            </i>
            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
            <i className="qout">
               <ImQuotesRight/>
            </i>
         </p>
      </div>
     
   </Slider>
   </div>
</div>
        </>
    )
}

}

export default Revslider;