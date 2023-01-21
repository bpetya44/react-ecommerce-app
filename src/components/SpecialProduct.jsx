import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";

const SpecialProduct = () => {
  return (
    <div className="col-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img-fluid" src={watch} alt="Apple watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Apple</h5>
            <h6 className="title">Apple Watch SE 2 (2022), GPS,</h6>

            <ReactStars>
              count={5}
              size={28}
              value={3}
              edit={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
            </ReactStars>

            <p className="price">
              <span className="red-p">$299.99</span> &nbsp;
              <strike>$399.99</strike>
            </p>
            <div className="discoutn-till d-flex align-items-center gap-10">
              <p className="mb-0 ">
                <b>5</b> days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>:
                <span className="badge rounded-circle p-3 bg-danger">1</span>
              </div>
            </div>

            <div className="product-count mt-3">
              <p>Products: 5</p>

              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <Link className="button">Add To Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
