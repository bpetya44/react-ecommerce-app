import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumb, Meta } from "../components/index";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <div className="login-wrapper home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Login</h3>
                <form action="" className="d-flex flex-column gap-3">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <div className="mb-2">
                      <Link to="/forgot-password" className="forgot mt-3 ms-2">
                        Forgot your password?
                      </Link>
                      <div className="d-flex justify-content-center align-items-center gap-15">
                        <button
                          className="button login border-0 mt-4"
                          type="submit"
                        >
                          Login
                        </button>
                        <Link to="/signup" className="button signup mt-4">
                          Sign Up
                        </Link>
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

export default Login;
