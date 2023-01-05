import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-2xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3 d-flex justify-content-center">
                <img
                  src="images/macbook2.jpg"
                  alt="main banner"
                  className="img-fluid rounded-5"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Best Choice for Pros</h4>
                  <p>From $999 or $41.62/mo. for 24 mo.</p>
                  <h5>MacBook Pro 14 </h5>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-center align-items-center gap-10 pt-5">
                {/* small banner1 */}
                <div className="small-banner position-relative">
                  <img
                    src="images/headphones.jpg"
                    alt="small banner"
                    className="img-fluid rounded-5"
                  />
                  <div className="small-banner-content position-absolute p-2 rounded">
                    <h4>New</h4>
                    <p>From $29.99</p>
                    <h5>Headphones</h5>
                  </div>
                </div>

                {/* small banner2 */}
                <div className="small-banner position-relative">
                  <img
                    src="images/ipad.jpg"
                    alt="small banner"
                    className="img-fluid rounded-5"
                  />
                  <div className="small-banner-content position-absolute p-2 rounded">
                    <h4>New</h4>
                    <p>From $299.99</p>
                    <h5>iPad Air</h5>
                  </div>
                </div>

                {/* small banner3 */}
                <div className="small-banner position-relative">
                  <img
                    src="images/smart-watch.jpg"
                    alt="small banner"
                    className="img-fluid rounded-5"
                  />
                  <div className="small-banner-content position-absolute p-2 rounded">
                    <h4>New</h4>
                    <p>From $69.99</p>
                    <h5>Smart Watch</h5>
                  </div>
                </div>

                {/* small banner4 */}
                <div className="small-banner position-relative">
                  <img
                    src="images/laptop.jpg"
                    alt="small banner"
                    className="img-fluid rounded-5"
                  />
                  <div className="small-banner-content position-absolute p-2 rounded">
                    <h4>New</h4>
                    <p>From $699.99</p>
                    <h5>Laptops</h5>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
