import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                {" "}
                Hotline:{" "}
                <a className="text-white" href="tel:+359876711314">
                  +359 876711314
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Shop Corner</Link>
              </h2>
            </div>
            <div className="col-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product..."
                  aria-label="Search Product..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center text-white gap-10">
                    <img src="images/compare-blue.png" alt="Compare Products" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-1">
                    <img src="images/heart-blue.png" alt="Add to favourite" />
                    <p className="mb-0">
                      Add to <br />
                      Favourite
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-1">
                    <img src="images/customer-blue.png" alt="Log in" />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white gap-1">
                    <img
                      src="images/shopping-cart.png"
                      alt="Shopping Cart"
                      style={{ width: 50, height: 50 }}
                    />{" "}
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$0.00</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      
    </>
  );
};

export default Header;
