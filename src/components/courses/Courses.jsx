import React, { Component } from "react";
import "./Courses.scss";

import External from "../../common/external/External";

const Card = (props) => {
  return (
    <>
      <div className="cardholder">
        <div className="card_img2">
          <img src={props.Cardimg} />
        </div>
        <div className="card_details">
          <h4 className="card_had">{props.Cardhead}</h4>

          <p>{props.Cardes}</p>

          <div className="card_footer">
            <div className="thumb_site">
              <img src={props.Cardthumb} />
              <span>{props.Cardname}</span>
            </div>
            <p>{props.Cardtime}</p>
          </div>
        </div>
      </div>
    </>
  );
};

class Courses extends Component {
  render() {
    return (
      <>
        <div className="main_courses">
          <div className="itleConatine">
            <h1>Courses</h1>
          </div>
          {/* courses  Start*/}
          {External.map((Extval) => {
            return (
              <Card
                Cardimg={Extval.Cardimg}
                Cardhead={Extval.Cardhead}
                Cardes={Extval.Cardes}
                Cardthumb={Extval.Cardthumb}
                Cardname={Extval.Cardname}
                Cardtime={Extval.Cardtime}
              />
            );
          })}
          {/* courses  end*/}
        </div>
      </>
    );
  }
}

export default Courses;
