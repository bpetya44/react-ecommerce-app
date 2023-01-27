import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />

      <Container class1="login-wrapper home-wrapper pb-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-3">
                <CustomInput type="text" name="name" placeholder="Name" />
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput type="tel" name="tel" placeholder="Mobile" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div className="mb-2">
                  <Link to="/forgot-password" className="forgot mt-3 ms-2">
                    Forgot your password?
                  </Link>
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button className="button login border-0 mt-4">
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
