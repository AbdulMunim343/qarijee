import React, { Component } from "react";
import "../home/Home.scss";
import External from "../../common/external/External";
import WQ from "./WQ";
import Qarijee_data from "./Qrijeebox";

//======import images=====//
import Holy from "../../assets/img/top_bg.png";
//====impoprt icons====//
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// ==== import routing ==== 
import {Link} from "react-router-dom"

const Card = (props) => {
  return (
    <>
      <div className="cardholder">
        <div className="card_img">
          <img src={props.Cardimg} />
        </div>
        <div className="card_details2">
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

const WhyQari = (props) => {
  return (
    <>
      <div className="qariBox">
        <img src={props.Imgsrc} />
        <h3>{props.Qaritxt}</h3>
        <p>{props.QariPara}</p>
      </div>
    </>
  );
};

const Teachers = (props) => {
  return (
    <div className="techBox">
      <div className="tecImg">
        <img src={props.data_img} />

        <div className="social">
          <a>
            <i>
              <FaFacebookF />
            </i>
          </a>
          <a>
            <i>
              <FaTwitter />
            </i>
          </a>

          <a>
            <i>
              <FaInstagram />
            </i>
          </a>

          <a>
            <i>
              <FaLinkedin />
            </i>
          </a>
        </div>
      </div>
      <div className="tectxt">
        <h4>{props.data_name}</h4>
        <span>{props.data_tech}</span>
      </div>
    </div>
  );
};

class Home extends Component {
  render() {
    return (
      <>
        {/* Hero MianContainer Start*/}
        <div className="hero">
          {/* Sub container start  */}
          <div className="hero_container">
            {/* Right box strat */}
            <div className="cRight">
              <h1>
                {" "}
                Your journey to <br />
                the glorious Quran
              </h1>
              <h2>
                Learn with the best Tutors you choose for Tajweed, Recitation,
                Hifz and Arabic lessons, in your feasible timings...
              </h2>
              <select>
                <option>Select Course</option>
                <option>Arabic-Language</option>
                <option>Hadith</option>
                <option>Hifz Memorizing</option>
                <option>Recitation</option>
                <option>Tafseer</option>
              </select>
            </div>
            {/* Right box strat */}
            {/* left Box Start      */}
            <div className="cLeft">
              <img src={Holy} />
            </div>
            {/* left Box end*/}
          </div>
          {/* Sub container start  */}
        </div>
        {/* Hero MianContainer end*/}
        <div className="section_bg">
          <div className="sub_section">
            <div className="co_title">
              <h2>Courses</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            {/* courses  Start*/}
            {External.slice(0, 3).map((Extval) => {
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
            <div className="btnWrapper">
              <button>
                <Link style={{color:"white",textDecoration:"none"}} to="/courses">
                Show Mor
              </Link>e</button>
            </div>
          </div>
        </div>
        {/* why qari jee Start*/}
        <div className="section_without">
          <div className="sub_section">
            <div className="co_title">
              <h2>Why Qari Jee?</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="qariBox_cotainer">
              {WQ.map((Qarival) => {
                return (
                  <WhyQari
                    Imgsrc={Qarival.Imgsrc}
                    Qaritxt={Qarival.Qaritxt}
                    QariPara={Qarival.QariPara}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* why qari jee end*/}
        {/* Qarijee Start */}
        <div className="section_bg">
          <div className="sub_section">
            <div className="co_title">
              <h2>Qari Jee</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="tech_conatiner">
              {Qarijee_data.map((Qaridata) => {
                return (
                  <Teachers
                    data_img={Qaridata.data_img}
                    data_name={Qaridata.data_name}
                    data_tech={Qaridata.data_tech}
                    tvi={Qaridata.tvi}
                    fb={Qaridata.fd}
                    inst={Qaridata.inst}
                    lnkd={Qaridata.lnkd}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* Qarijee end */}
        {/*Counter Strat*/}
        <div className="section_without">
          <div className="sub_section">
            <div className="counter_container">
              <div className="counterBox">
                <span>232</span>
                <p>Students</p>
              </div>
              <div className="counterBox">
                <span>521</span>
                <p>Sessions</p>
              </div>
              <div className="counterBox">
                <span>1,463</span>
                <p>Hours</p>
              </div>
            </div>
          </div>
        </div>
        {/*Counter end*/}
        {/* slider area Start */}
        <div className="bg_slider">
          <div className="slider_without"></div>
        </div>
        {/* slider area end */}
      </>
    );
  }
}

export default Home;
