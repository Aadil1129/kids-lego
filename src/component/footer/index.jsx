import React from "react";
import Facebook from "../../images/facebook.jpeg";
import Youtube from "../../images/youtube.jpeg";
import Insta from "../../images/instagram.jpeg";
import Linked from "../../images/linked.jpeg";
import Angels from "../../images/handcircle.jpeg";
import Angels2 from "../../images/handcircle2.jpeg";

export default function () {
  return (
    <div className="footer-container">
      <div
        id="footer"
        className="footer-container container row  row-cols-1 row-cols-md-3 g-4 "
      >
        <div
          id="footer-box"
          className="card text-center col"
          style={{ width: "15rem" }}
        >
          <div className="card-body">
            <a href="#" className="footer-links">
              About Us
            </a>
            <a href="#" className="footer-links">
              Our Vision
            </a>
            <a href="#" className="footer-links">
              Report
            </a>
            <a href="#" className="footer-links">
              Contact Us
            </a>
            <a href="#" className="footer-links">
              Invest in Lego's
            </a>
          </div>
        </div>

        <div
          id="footer-box"
          className="card text-center col"
          style={{ width: "15rem" }}
        >
          <div className="card-body">
            <a href="#" className="footer-links">
              Careers
            </a>
            <img src={Angels2} alt="" />
          </div>
        </div>

        <div
          id="footer-box"
          className="card text-center col"
          style={{ width: "15rem" }}
        >
          <div className="card-body">
            <a href="#" className="footer-links">
              Shop Map
            </a>
            <a href="#" className="footer-links">
              Privasy & Policy
            </a>
            <a href="#" className="footer-links">
              Terms
            </a>
          </div>
        </div>
        <div
          id="footer-box"
          className="card text-center col"
          style={{ width: "15rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Social Media Links</h5>
            <div className="footer-images">
              <img
                className="footer-logo"
                href="#"
                src={Facebook}
                alt="footer-images"
              />
              <img
                className="footer-logo"
                href="#"
                src={Youtube}
                alt="footer-images"
              />
              <img
                className="footer-logo"
                href="#"
                src={Insta}
                alt="footer-images"
              />
              <img
                className="footer-logo"
                href="#"
                src={Linked}
                alt="footer-images"
              />
            </div>
            <img className="footer-image" src={Angels} alt="footer-gifts" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </div>
  );
}
