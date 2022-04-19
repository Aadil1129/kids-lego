import React from "react";
import ToyBox from "../../../images/toybox.jpeg";
import Batman from "../../../images/batman.jpeg";
import Barbie from "../../../images/barbie.jpeg";

export default function LegoProduct() {
  return (
    <div className="lego">
      <div className="row">
        <div className="col-sm-6" id="col-sm">
          <div className="card" id="card">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div
                style={{
                  background: "#076992",
                  margin: "auto",
                  marginBottom: "-1rem ",
                }}
                className="carousel-indicators"
              >
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner" id="carousel-inner">
                <div className="carousel-item active">
                  <img src={ToyBox} className="d-block w-100" alt="..." />
                  <div className="product-size">
                    <div className="product-height">
                      Height <span id="span">15 Inch</span>,
                    </div>
                    <div className="product-height">
                      Width <span id="span">18 Inch</span>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <img src={Batman} className="d-block w-100" alt="..." />
                  <div className="product-size">
                    <div className="product-height">
                      Height <span id="span">12 Inch</span>,
                    </div>
                    <div className="product-height">
                      Width <span id="span">8 Inch</span>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <img src={Barbie} className="d-block w-100" alt="..." />
                  <div className="product-size">
                    <div className="product-height">
                      Height <span id="span">15 Inch</span>,
                    </div>
                    <div className="product-height">
                      Width <span id="span">15 Inch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button id="send-gift-button" className="btn btn-dark">
              Send Gift
            </button>
            <div className="rating" id="rating">
              {" "}
              <input type="radio" name="rating" value="5" id="5" />
              <label id="rating-star" htmlFor="5">
                ☆
              </label>{" "}
              <input type="radio" name="rating" value="4" id="4" />
              <label id="rating-star" htmlFor="4">
                ☆
              </label>{" "}
              <input type="radio" name="rating" value="3" id="3" />
              <label id="rating-star" htmlFor="3">
                ☆
              </label>{" "}
              <input type="radio" name="rating" value="2" id="2" />
              <label id="rating-star" htmlFor="2">
                ☆
              </label>{" "}
              <input type="radio" name="rating" value="1" id="1" />
              <label id="rating-star" htmlFor="1">
                ☆
              </label>
              <div className="rating-letter">Rate</div>
            </div>
            <a href="#" className="lego-product-heading">
              Lego Store ,Pune
            </a>
            <div className="lego-product-price">
              <div className="lego-product-enable">9000</div>
              <div className="lego-product-able">6999</div>
            </div>
            <button id="sale-button" type="button" className="btn btn-danger">
              Sale
            </button>
          </div>
        </div>
        <div id="product-box2" className="col-sm-6">
          <div className="card" id="card2">
            <div className="card-body">
              <p className="card-heading">Lego Set With Customized Models</p>
              <div className="card-para">
                Lego Is Well Known Toy Company With Kids In US. Lego Is Well
                Known Toy Company With Kids In US.Lego Is Well Knows Toy Company
                With Kids In US. Logo Is Well Knows Toy Company With Kids In US
              </div>
            </div>
            <div className="card2-box">
              <div className="card2">
                <div className="card-container">
                  <div className="review-heading">Reviews (33)</div>
                  <div className="rating">
                    {" "}
                    <input type="radio" name="rating" value="5" id="5" />
                    <label id="rating-star" htmlFor="5">
                      ☆
                    </label>{" "}
                    <input type="radio" name="rating" value="4" id="4" />
                    <label id="rating-star" htmlFor="4">
                      ☆
                    </label>{" "}
                    <input type="radio" name="rating" value="3" id="3" />
                    <label id="rating-star" htmlFor="3">
                      ☆
                    </label>{" "}
                    <input type="radio" name="rating" value="2" id="2" />
                    <label id="rating-star" htmlFor="2">
                      ☆
                    </label>{" "}
                    <input type="radio" name="rating" value="1" id="1" />
                    <label id="rating-star" htmlFor="1">
                      ☆
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <a className="more-product" href="#">
              More About The Product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
