import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
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
              <div className="d-flex flex-wrap justify-content-around align-items-center gap-10 pt-5">
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

      {/* Secondary section Services */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">

                <div className="d-flex align-items-center text-white text-muted gap-1">
                  <img src="images/delivery-50.png" alt="free shipping" />
                  <div>
                    <h6 className="m-0">Free Shipping</h6>
                    <small>On orders over $100</small>
                  </div>
                </div>

                <div className="d-flex align-items-center text-white text-muted gap-1">
                  <img src="images/giveaway-50.png" alt="Daily Offers" />
                  <div>
                    <h6 className="m-0">Daily Offers</h6>
                    <small>Save up to 25% off</small>
                  </div>
                </div>

                <div className="d-flex align-items-center text-white text-muted gap-1">
                  <img src="images/communicate-50.png" alt="Support 24/7" />
                  <div>
                    <h6 className="m-0">Support 24/7</h6>
                    <small>Call our expert</small>
                  </div>
                </div>

                <div className="d-flex align-items-center text-white text-muted gap-1">
                  <img src="images/sale-50.png" alt="Affordable Prices" />
                  <div>
                    <h6 className="m-0">Affordable Prices</h6>
                    <small>Factory direct price</small>
                  </div>
                </div>

                <div className="d-flex align-items-center text-white text-muted gap-1">
                  <img src="images/bank-cards-50.png" alt="Secure Payments" />
                  <div>
                    <h6 className="m-0">Secure Payments</h6>
                    <small>100% Protected</small>
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
