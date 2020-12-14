import React, { Component } from "react";
import "./Footer.scss";

//=====import icons======//
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillSkype } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// ===== importing routing modules
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="main_footer">
          <div className="section_without">
            <div className="sub_section">
              <div className="FlexFooter">
                {/* First Box */}
                <div className="footerBox">
                  <h3>Qari Jee</h3>
                  <p>
                    Lorem Ipsum is simply dummy
                    <br />
                    of the printing and typesetting.
                    <br />
                    Lorem Ipsum is simply dummy
                    <br />
                    <br />
                    <br />
                    <strong>Phone:</strong> +92 301 235 6895
                    <br />
                    <strong>Email:</strong> contact@qarijee.com
                    <br />
                  </p>
                </div>

                {/* Second Box */}
                <div className="footerBox">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <Link to="/" className="routerLink">Home</Link>
                    </li>
                    <li>
                      <Link to="/courses" className="routerLink">Courses</Link>
                    </li>
                    <li>
                      <Link to="/membership" className="routerLink">Membership</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="routerLink">contact</Link>
                    </li>
                  </ul>
                </div>

                {/* Third Box */}
                <div className="footerBox">
                  <h4>Our Courses</h4>
                  <ul>
                    <li>Arabic-Language</li>
                    <li>Hadith</li>
                    <li>Hifz Memorizing</li>
                    <li>Recitation</li>
                    <li>Tafseer</li>
                  </ul>
                </div>

                {/* forth Box */}
                <div className="footerBox">
                  <h4>Our Social Networks</h4>
                  <p>
                    Cras fermentum odio eu feugiat lide par naso tierra videa
                    magna derita valies
                  </p>
                  <div className="icon_container">
                    <a className="icn">
                      <FaTwitter />
                    </a>
                    <a className="icn" target="_blank" href="https://www.facebook.com/QariJee.co/">
                      <FaFacebookF />
                    </a>
                    <a className="icn" target="_blank" href="https://join.skype.com/invite/iktGdMbAezzT">
                      <AiFillSkype />
                    </a>
                    <a className="icn">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="minifooter">
            <footer>
              <span>
                &#169; Copyright <b> Qari Jee </b> All Rights Reserved
              </span>
              <span>
                {" "}
                Designed by <b> Qari Jee Inc. </b>
              </span>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
