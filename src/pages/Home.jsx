import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { BlogCard, ProductCard, SpecialProduct } from "../components/index";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <Container class1="home-wrapper-1 py-5">
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
                  className="img-fluid rounded-3"
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
                  className="img-fluid rounded-3"
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
                  className="img-fluid rounded-3"
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
                  className="img-fluid rounded-3"
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
      </Container>

      {/* Secondary section Services */}
      <Container class1="home-wrapper-1">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div
                    key={j}
                    className="d-flex align-items-center text-muted gap-1"
                  >
                    <img src={i.icon} alt={i.title} />
                    <div>
                      <h6 className="m-0">{i.title}</h6>
                      <small>{i.tagline}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Categories */}
      <Container class1="home-wrapper-3 py-4">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between aligh-items-center flex-wrap">
              <div className="d-flex align-items-center gap-1">
                <div>
                  <h6>Computers & Laptop</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/laptop.png" alt="computers" />
              </div>

              <div className="d-flex align-items-center gap-1">
                <div>
                  <h6>Smart TV</h6>
                  <p>12 Items</p>
                </div>
                <img src="images/smart-tv.png" alt="smart tv" />
              </div>

              <div className="d-flex gap-1 align-items-center">
                <div>
                  <h6>Mobile & Tablets</h6>
                  <p>5 Items</p>
                </div>
                <img src="images/mobile.png" alt="mobile" />
              </div>

              <div className="d-flex gap-1 align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>13 Items</p>
                </div>
                <img src="images/smart-watch.png" alt="smart watch" />
              </div>

              <div className="d-flex gap-1 align-items-center">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.png" alt="camera" />
              </div>

              <div className="d-flex gap-1 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>4 Items</p>
                </div>
                <img src="images/game-control.png" alt="games" />
              </div>

              <div className="d-flex gap-1 align-items-center">
                <div>
                  <h6>Accesories</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/headphones.png" alt="Accessories" />
              </div>

              <div className="d-flex gap-1 align-items-center">
                <div>
                  <h6>Home Appliences</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/toaster.png" alt="Home Appliances" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/*Featured Collection */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white">Featured Collection </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* Famous Product Cards */}

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                className="img-fluid"
                src="images/watches.png"
                alt="smart watches"
              />
              <div className="famous-content position-absolute">
                <h6>Smart Watches</h6>
                <h5>Smart Watch Series</h5>
                <p>From $399</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                className="img-fluid"
                src="images/lenovo.png"
                alt="tablet lenovo"
              />
              <div className="famous-content position-absolute">
                <h6 className="text-dark">Tablets</h6>
                <h5 className="text-dark">Lenovo Tab M8 HD </h5>
                <p className="text-dark">From $199</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                className="img-fluid"
                src="images/iphone-13.png"
                alt="iPhone 13 Pro pink"
              />
              <div className="famous-content position-absolute">
                <h6 className="text-dark">Smart phones</h6>
                <h5 className="text-dark">Apple iPhone 13, 128GB</h5>
                <p className="text-dark">From $799</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card position-relative ">
              <img
                className="img-fluid"
                src="images/akai.png"
                alt="Akai speaker"
              />
              <div className="famous-content position-absolute">
                <h6 className="text-dark">Home Speakers</h6>
                <h5 className="text-dark">AKAI DJ-880, 100W</h5>
                <p className="text-dark">From $99</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Special Products */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white text-center">
              Special Products
            </h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      {/*Popular Products */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white text-center">
              Popular Products{" "}
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      {/* Marquee Section */}
      <section className="marquee-wrapper">
        <div className="container-2xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-2 w-50">
                    <img
                      className="w-50 h-50"
                      src="images/brand-01.png"
                      alt="apple"
                    />
                  </div>
                  <div className="mx-2 w-50">
                    <img
                      className="w-50 h-50"
                      src="images/brand-02.png"
                      alt="bose"
                    />
                  </div>
                  <div className="mx-2 w-50">
                    <img
                      className="w-50 h-50"
                      src="images/brand-03.png"
                      alt="canon"
                    />
                  </div>
                  <div className="mx-2 w-50">
                    <img
                      className="w-50 h-50"
                      src="images/brand-04.png"
                      alt="dell"
                    />
                  </div>
                  <div className="mx-2 w-50">
                    <img
                      className="w-50 h-50"
                      src="images/brand-05.png"
                      alt="intel"
                    />
                  </div>
                  <div className="mx-2 w-50">
                    <img
                      className="w-50 h-50"
                      src="images/brand-06.png"
                      alt="lg"
                    />
                  </div>
                  <div className="mx-2 w-50">
                    <img
                      className="w-50 h-50"
                      src="images/brand-07.png"
                      alt="samsung"
                    />
                  </div>
                  <div className="mx-2 w-50">
                    <img
                      className="w-50 h-50"
                      src="images/brand-08.png"
                      alt="sandisk"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white">Our Latest News </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
