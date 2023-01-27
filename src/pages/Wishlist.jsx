import React from "react";
import Container from "../components/Container";
import { BreadCrumb, Meta } from "../components/index";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative bg-white">
              <img
                src="images/cross.svg"
                alt="close"
                className="position-absolute cross"
              />
              <div className="wishlist-card-image">
                <img
                  clasName="img-fluid w-100"
                  src="images/watch.png"
                  alt="Apple Watch"
                />
              </div>
              <div className="wishlist-card-description px-3 py-3">
                <h5 className="title">Apple Watch</h5>
                <h6 className="price">$299</h6>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="wishlist-card position-relative bg-white">
              <img
                src="images/cross.svg"
                alt="close"
                className="position-absolute cross"
              />
              <div className="wishlist-card-image">
                <img
                  clasName="img-fluid w-100"
                  src="images/watch.png"
                  alt="Apple Watch"
                />
              </div>
              <div className="wishlist-card-description px-3 py-3">
                <h5 className="title">Apple Watch</h5>
                <h6 className="price">$299</h6>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="wishlist-card position-relative bg-white">
              <img
                src="images/cross.svg"
                alt="close"
                className="position-absolute cross"
              />
              <div className="wishlist-card-image">
                <img
                  clasName="img-fluid w-100"
                  src="images/watch.png"
                  alt="Apple Watch"
                />
              </div>
              <div className="wishlist-card-description px-3 py-3">
                <h5 className="title">Apple Watch</h5>
                <h6 className="price">$299</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
