import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="ckeckout-left-data">
                <h3 className="website-name text-white">Checkout</h3>
                <nav style={{ fontSize: "0.8rem" }} aria-label="breadcrumb">
                  <ol className="breadcrumb text-muted">
                    <li className="breadcrumb-item">
                      <Link href="/cart" className="text-muted">
                        Cart
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active text-white"
                      aria-current="page"
                    >
                      Information
                    </li>
                    <li className="breadcrumb-item">Shipping</li>
                    <li className="breadcrumb-item">Payment</li>
                  </ol>
                </nav>
                <div className="checkout-inner-wrapper bg-white border rounded py-3 px-3">
                  <h4 className="title">Contact Information</h4>
                  <p className="user-details">
                    Petya Angelova (bedfordpetya@gmail.com)
                  </p>
                  <h4 className="mt-5 mb-3">Shipping address</h4>
                  <form
                    action=""
                    method="post"
                    className="d-flex flex-wrap justify-content-between gap-15"
                  >
                    <div className="w-100">
                      <select
                        name=""
                        id=""
                        className="form-control form-select"
                      >
                        <option value="" selected disabled>
                          Select Country
                        </option>
                      </select>
                    </div>
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="w-100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address Line 1"
                      />
                    </div>
                    <div className="w-100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Addres Line 2"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <select
                        name=""
                        id=""
                        className="form-control form-select"
                      >
                        <option value="" selected disabled>
                          Select State
                        </option>
                      </select>
                    </div>
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Zip Code"
                      />
                    </div>
                    <div className="w-100 my-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to="/cart" className="">
                          <BiArrowBack className="fs-5 me-2" />
                          Return To Cart
                        </Link>
                        <Link to="/cart" className="button mt-0">
                          Continue to Shipping
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="checkout-right-data bg-white border rounded py-3 px-3">
                <h4 className="title">Order Summary</h4>

                <div className="d-flex justify-content-between align-items-center my-3">
                  <h5>Total:</h5>
                  <h5>$ 0.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
