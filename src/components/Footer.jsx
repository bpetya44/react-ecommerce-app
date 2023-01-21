import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import newsletter from "../images/subscription-50.png";

const Footer = () => {
  return (
    <>
      {/* Top Footer */}
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-10 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h4 className="mb-0 text-white">
                  Subscribe for Our Newsletter
                </h4>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text py-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Middle Footer */}
      <footer className="py-3 ps-5">
        <div className="container-2xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4 ps-4">Contact Us</h4>
              <div className="ps-4">
                <address className="text-white">
                  Demo Shop Ltd. <br /> 123 Free Str. <br />
                  Bulgaria
                </address>
                <a href="tel: +359876711314" className="text-white mt-3">
                  &#9742; +359 876 711 314
                </a>
                <a
                  href="mailto:ang.petya@gmail.com"
                  className="text-white d-block mt-3"
                >
                  ✉️ ang.petya@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-3 mt-4">
                  <a
                    className="text-white"
                    alt="linkedin icon"
                    href="https://www.linkedin.com/in/ang-petya/"
                  >
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    alt="github  icon"
                    href="https://github.com/bpetya44"
                  >
                    <BsGithub className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    alt="twitter icon"
                    href="https://twitter.com/ang_petya"
                  >
                    <BsTwitter className="fs-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="text-white py-2 mb-1"
                >
                  Terms and Conditions
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link to="/contact" className="text-white py-2 mb-1">
                  Contact Us
                </Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <footer className="py-3">
        <div className="container-2xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-end text-muted pe-4">
                &copy; {new Date().getFullYear()} Developed by{" "}
                <a
                  className="text-white"
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://bpetya.me/"
                >
                  💕Petya
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
