import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot password"} />
      <BreadCrumb title="Forgot password" />

      <Container class1="login-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Forgot Your Password</h3>
              <p className="text-center mb-4">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-3">
                <CustomInput type="email" name="email" placeholder="Email" />

                <div>
                  <div className="mb-2">
                    <div className="d-flex flex-column justify-content-center align-items-center gap-15">
                      <button
                        className="button login border-0 mt-2"
                        type="Submit"
                      >
                        Submit
                      </button>
                      <Link to="/login">Cancel</Link>
                    </div>
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

export default Forgotpassword;
