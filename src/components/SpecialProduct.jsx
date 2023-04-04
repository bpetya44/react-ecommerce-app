import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";

const SpecialProduct = (props) => {
  const { id, title, brand, totalrating, price, sold, quantity } = props;
  return (
    <div className="col-4 mb-4">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img-fluid" src={watch} alt="Apple watch" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>

            <ReactStars>
              count={5}
              size={28}
              value={totalrating}
              edit={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
            </ReactStars>

            <p className="price">
              <span className="red-p">${price.toFixed(2)}</span> &nbsp;
              {/* <strike>${price.toFixed(2)}</strike> */}
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
              <p>Products: {quantity}</p>

              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: (quantity / (sold + quantity)) * 100 + "%" }}
                  aria-valuenow={(quantity / (sold + quantity)) * 100}
                  aria-valuemin={quantity}
                  aria-valuemax={sold + quantity}
                ></div>
              </div>
            </div>

            <Link className="button fs-6" to={"/product/" + id}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
