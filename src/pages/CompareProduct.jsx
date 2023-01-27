import React from "react";
import Container from "../components/Container";
import { BreadCrumb, Meta, Colors } from "../components/index";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />

      <Container class1="compare-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="close"
                className="position-absolute cross"
              />
              <div className="product-card-image">
                <img
                  clasName="img-fluid"
                  src="images/watch.png"
                  alt="Apple Watch"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1GB Ram 7" Wi-Fi 4G Tablet
                </h5>
                <h6 className="price">$100</h6>
              </div>

              <div>
                <div className="product-details">
                  <h5>Brand:</h5>
                  <p>Lenovo</p>
                </div>
                <div className="product-details">
                  <h5>Type:</h5>
                  <p>Tablet</p>
                </div>
                <div className="product-details">
                  <h5>Availability:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-details">
                  <h5>Color:</h5>
                  <Colors />
                </div>
                <div className="product-details">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="close"
                className="position-absolute cross"
              />
              <div className="product-card-image">
                <img
                  clasName="img-fluid"
                  src="images/watch.png"
                  alt="Apple Watch"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1GB Ram 7" Wi-Fi 4G Tablet
                </h5>
                <h6 className="price">$100</h6>
              </div>

              <div>
                <div className="product-details">
                  <h5>Brand:</h5>
                  <p>Lenovo</p>
                </div>
                <div className="product-details">
                  <h5>Type:</h5>
                  <p>Tablet</p>
                </div>
                <div className="product-details">
                  <h5>Availability:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-details">
                  <h5>Color:</h5>
                  <Colors />
                </div>
                <div className="product-details">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
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

export default CompareProduct;
