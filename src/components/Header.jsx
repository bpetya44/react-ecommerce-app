import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../images/compare-blue.png";
import favourite from "../images/heart-blue.png";
import customer from "../images/customer-blue.png";
import cart from "../images/shopping-cart.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  //console.log(userCartState);
  const userState = useSelector((state) => state?.auth);
  //console.log(userState);
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < userCartState?.length; i++) {
      sum += userCartState[i]?.price * userCartState[i]?.quantity;
    }
    setTotalAmount(sum);
  }, [userCartState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

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
                  +359 876 711 314
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
                <Link className="text-white" to="/">
                  Shop Corner
                </Link>
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
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center text-white gap-10"
                  >
                    <img src={compare} alt="Compare Products" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center text-white gap-1"
                  >
                    <img src={favourite} alt="Add to favourite" />
                    <p className="mb-0">
                      Add to <br />
                      Favourite
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={userState?.user === null ? "/login" : "/my-profile"}
                    className="d-flex align-items-center text-white gap-1"
                  >
                    <img src={customer} alt="Log in" />
                    {userState?.user === null ? (
                      <p className="mb-0">
                        Log in <br /> My Account
                      </p>
                    ) : (
                      <p className="mb-0">
                        Hi,
                        <br /> {userState?.user?.firstName}
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center text-white gap-1"
                  >
                    <img
                      src={cart}
                      alt="Shopping Cart"
                      style={{ width: 50, height: 50 }}
                    />{" "}
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark fs-6">
                        {userCartState?.length ? userCartState?.length : 0}
                      </span>
                      <p className="mb-0 mt-1">
                        ${totalAmount ? totalAmount.toFixed(2) : "0.00"}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-5">
                <div>
                  {/* Dropdown */}
                  <div className="dropdown">
                    <button
                      className="btn btn-warning dropdown-toggle bg-transparent text-white"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="images/menu.png"
                        style={{ width: 35 }}
                        alt="menu"
                      />
                      <span className="d-inline-block ms-4 me-4">
                        {" "}
                        Categories
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Category1
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Category2
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Category3
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* End Dropdown */}
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/my-orders">My Orders</NavLink>
                    <NavLink to="/blogs">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button
                      onClick={handleLogout}
                      className="border-0 bg-transparent text-white text-uppercase"
                      type="button"
                    >
                      {userState?.user === null ? "" : "Log Out"}
                    </button>
                  </div>
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
