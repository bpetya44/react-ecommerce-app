import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import { RiDeleteBin5Line } from "react-icons/ri";
import watch from "../images/smart-watch.jpg";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Shopping Cart"} />
      <BreadCrumb title="Shopping Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h4 className="text-white mb-3 ms-3"> Shopping Cart</h4>
            <div className="cart-inner-wrapper pt-4">
              <div className="cart-header d-flex justify-content-between align-items-center ">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div className="w-25">
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div className="w-75">
                    <p>Kaahfsjj</p>
                    <p>Size:</p>
                    <p>Color</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <RiDeleteBin5Line className="fs-4 text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>
              <div className="cart-data d-flex justify-content-between align-items-center py-3 mb-2">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div className="w-25">
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div className="w-75">
                    <p>Kaahfsjj</p>
                    <p>Size:</p>
                    <p>Color</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <RiDeleteBin5Line className="fs-4 text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$100</h5>
                </div>
              </div>

              <div className="cart-data-bottom col-12 my-3 pe-5">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/" className="button mt-3">
                    Continue Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4 className="subtotal">Subtotal: $100.00</h4>
                    <p>Taxes and Shipping calculated at checkout</p>
                    <Link to="/checkout" className="button mt-0">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
