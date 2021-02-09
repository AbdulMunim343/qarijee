import React, {Component} from 'react';
import './Membership.scss'
import Members from './Member_card';


const Card = (props) =>{
    return(
        <>
<div className="cardholder_member">
   <div className="card_img3">
      <img src={props.Cardimg}/>
   </div>
   <div className="card_details">
      <h4 className="card_had">{props.Cardhead}</h4>
      <p>{props. Cardes}</p>
      <div className="card_footer">
         <div className="thumb_site">
            <img src={props.Cardthumb}/>
            <span>{props.Cardname}</span>
         </div>
      </div>
   </div>
</div>
        </>
    )
};




class Membership extends Component{
    render(){
        return(
            <>
<div className="main_courses">
   <div className="itleConatine">
      <h1>Membership</h1>
   </div>
   {/* courses  Start*/}
   <div className="Flex_con">
   {Members.map((Extval)=>{
   return(
   <Card
      Cardimg={Extval.Cardimg}
      Cardhead = {Extval.Cardhead}
      Cardes = {Extval.Cardes}
      Cardthumb = {Extval.Cardthumb}
      Cardname = {Extval.Cardname}
      />
   )  
   })}
   </div>
   {/* courses  end*/}
</div>
            </>
        )
    }
}



export default Membership;


