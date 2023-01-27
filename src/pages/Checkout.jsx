import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="ckeckout-left-data">
              <h3 className="website-name text-white">Checkout</h3>
              {/* Breadcrumb */}
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

              {/* Checkout form */}
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
                    <select name="" id="" className="form-control form-select">
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
                    <select name="" id="" className="form-control form-select">
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

          {/* Right side data */}
          <div className="col-5">
            <div className="checkout-right-data bg-white border rounded py-3 px-3">
              <h4 className="title border-bottom mt-0 pb-2">Order Summary</h4>
              <div className="border-bottom">
                <div className="d-flex justify-content-between my-3 ">
                  <div className="w-25 position-relative">
                    <span
                      className="badge bg-warning rounded-circle position-absolute p-2 "
                      style={{ right: "-20px", top: "0" }}
                    >
                      1
                    </span>
                    <img
                      className="img-fluid border rounded m-2"
                      src={watch}
                      alt="product"
                    />
                  </div>
                  <div className="ms-3">
                    <h5 className="title">Best for sport</h5>
                    <p className="article">Art #:</p>
                  </div>
                  <h5 className="mt-0 price">$ 100.00</h5>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <p>SubTotal:</p>
                <p>$ 100.00</p>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3 border-bottom">
                <p>Shipping:</p>
                <p>$ 0.00</p>
              </div>

              <div className="d-flex justify-content-between align-items-center my-3">
                <h5>Total:</h5>
                <h5>$ 100.00</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
