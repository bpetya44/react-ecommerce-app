import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
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
        </div>
      </div>
    </>
  );
};

export default Wishlist;
