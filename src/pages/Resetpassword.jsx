import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset password"} />
      <BreadCrumb title="Reset password" />

      <Container class1="login-wrapper home-wrapper pb-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-3">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                />

                <div className="mb-2">
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button className="button login border-0 mt-4">
                      Submit
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

export default Resetpassword;
