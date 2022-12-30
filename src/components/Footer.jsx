import React from "react";


const Footer = () => {
  return (
    <>
      {/* Top section */}
      <footer className="py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-10 align-items-center">
              <img src="images/subscription-50.png" alt="newsletter" />
              <h4 className="mb-0 text-white">Subscribe for Our Newsletter</h4>
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

      {/* Middle section */}
      <footer className="py-3">
        
      </footer>

      {/* Bottom section */}
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-muted">
                &copy; {new Date().getFullYear()} Developed by{" "}
                <a target={"_blank"} rel="noreferrer" href="https://bpetya.me/">
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
