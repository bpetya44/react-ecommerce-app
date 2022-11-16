import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  //console.log(location)

  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wishlist.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              className="img-fluid"
              src="images/smart-watch.jpg"
              alt="product"
            />
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
              {" "}
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="veiw " />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add to cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wishlist.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              className="img-fluid"
              src="images/smart-watch.jpg"
              alt="product"
            />
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
              {" "}
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="veiw " />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add to cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wishlist.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              className="img-fluid"
              src="images/smart-watch.jpg"
              alt="product"
            />
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
              {" "}
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="veiw " />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add to cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
