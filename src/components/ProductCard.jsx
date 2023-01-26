import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import wishlist from "../images/wishlist.svg";
import watch from "../images/smart-watch.jpg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  //console.log(location)

  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wishlist} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="product" />
          </div>
          <div className="product-details p-3">
            <h6 className="brand mt-1">Have</h6>
            <h5 className="product-title fs-5">Best for sport</h5>

            <ReactStars>
              count={5}
              size={28}
              value={3}
              edit={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
            </ReactStars>

            <div
              className={`description ${grid === 12 ? "d-block" : "d-none"}`}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate in saepe corporis, id accusamus doloribus pariatur quo
                laborum eaque animi.
              </p>
            </div>

            <span className="price">$99.99</span>
          </div>

          {/* Action Bar */}
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-30">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="veiw " />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="add to cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
