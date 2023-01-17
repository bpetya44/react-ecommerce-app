import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import { Link } from "react-router-dom";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset password"} />
      <BreadCrumb title="Reset password" />

      <div className="login-wrapper home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-3">
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confpassword"
                      className="form-control"
                      placeholder=" Confirm Password"
                    />
                    <div className="mb-2">
                      <div className="d-flex justify-content-center align-items-center gap-15">
                        <button className="button login border-0 mt-4">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
