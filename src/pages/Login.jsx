import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { BreadCrumb, Meta } from "../components/index";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../features/user/userSlice";

const loginSchema = Yup.object({
  email: Yup.string()
    .nullable()
    .required("Email is required")
    .email("Email is invalid"),

  password: Yup.string().required("Password is required"),
});
const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      dispatch(loginUser(values));
    },
  });
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper home-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form
                action=""
                className="d-flex flex-column gap-1"
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

                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>

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
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
