import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgotMyPassword } from "../features/user/userSlice";

const emailSchema = Yup.object({
  email: Yup.string()
    .nullable()
    .required("Email is required")
    .email("Email is invalid"),
});

const Forgotpassword = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      dispatch(forgotMyPassword(values));
      //navigate("/");
    },
  });

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
              <form
                action=""
                className="d-flex flex-column gap-3"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>

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
