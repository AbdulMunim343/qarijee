import React, {Component} from 'react';
import './Subcourses.scss';

import Arabic from '../../../assets/img/arabic.jpg';
import Inct from '../../../assets/img/instructor.png'

import External from '../../../common/external/External';

const CoureVal = (props) =>{
return(
   <>
<h1>{props.Cardhead}</h1>
   <div className="imgthumb">
      <img src={props.Cardimg}/>
   </div>
   <div className="entry-content">
      {props.LmsPara}
   </div>
   </>
)
}





class Subcourses extends  Component{
    render(){
        return(
            <>

<div className="sc_container">
   
{External.map((Csval)=>{
         return(
            <CoureVal 
               Cardhead = {Csval.Cardhead}
               Cardimg = {Csval.Cardimg}
               LmsPara = {Csval.LmsPara}
            />
         )
    })}  
   
   <div className="Enroll">
      <h4 className="lms_title">Start Free</h4>
      <span className="lms_price">Free</span>
      <div className="lms_btn">
         <button type="submit">Enroll</button>
      </div>
   </div>
   <h3 class="meta-title">Course Instructor</h3>
   <div className="instrc_container">
      <img src={Inct} className="inct_img"/>
      <span className="author_name">Admin</span>
      <span className="author_lable">Author</span>         
   </div>
   <div className="lms_list_con">
      <h3>Getting Started</h3>
      <div className="llms-lesson-link">
         <h5>Why Lifter LMS</h5>
         <p>1 to 5</p>
      </div>
   </div>
</div>
            </>
        )
    }
}


export default Subcourses;