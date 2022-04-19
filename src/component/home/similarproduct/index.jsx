import React from "react";
import Data from "./index.js";

export default function SimilarGifts() {
  return (
    <div className="similargift-page">
      <div className="similargift-heading">Similar Gifts</div>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {Data.map((value, index) => {
          return (
            <div id="cl" className="col" key={index}>
              <div className="card h-100">
                <div className="dropdown">
                  <div type="button" data-bs-toggle="dropdown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Add To card
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Order
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <img
                  src={value.images}
                  className="card-img-top"
                  alt="card-images"
                />
                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <div className="rating" id="rating2">
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
                  <a href="#" className="legosimilar-product-heading">
                    Lego Store ,Pune
                  </a>
                  <div className="lego-product-price">
                    <div className="lego-product-enable">9000</div>
                    <div className="lego-product-able">6999</div>
                  </div>
                  <button
                    id="sale-button"
                    type="button"
                    className="btn btn-danger"
                  >
                    Sale
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
