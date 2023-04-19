import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useLocation } from "react-router-dom";
import { resetMyPassword } from "../features/user/userSlice";

const resetSchema = Yup.object({
  password: Yup.string().required("Password is required"),
});

const Resetpassword = () => {
  const location = useLocation();
  const token = location.pathname.split("/")[2];
  //console.log(token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
      //alert(JSON.stringify(values, null, 2));
      dispatch(resetMyPassword({ token, password: values.password }));
      navigate("/login");
    },
  });

  return (
    <>
      <Meta title={"Reset password"} />
      <BreadCrumb title="Reset password" />

      <Container class1="login-wrapper home-wrapper pb-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form
                action=""
                className="d-flex flex-column gap-2"
                onSubmit={formik.handleSubmit}
              >
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
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button
                      className="button login border-0 mt-4"
                      type="submit"
                    >
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
