import React from "react";
import LegoCityImage from "../../../images/ligocity.png";

export default function LegoCity() {
  return (
    <div className="legocity-box">
      <div className="legocity-heading">
        <span className="legocity-capital">B</span>UILD{" "}
        <span className="legocity-capital">Y</span>OUR{" "}
        <span className="legocity-capital">L</span>EGO{" "}
        <span className="legocity-capital">C</span>ITY
      </div>
      <div className="legocity-image-box">
        <img className="legocity-image" src={LegoCityImage} alt="" />
      </div>
      <div className="legocity-condition">Term & condition</div>
    </div>
  );
}
