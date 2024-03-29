import React from "react";
import { BreadCrumb, Meta } from "../components/index";
import Container from "../components/Container";
import { FaHome } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createQuery } from "../features/contact/contactSlice";
import { useEffect } from "react";

const contactSchema = Yup.object({
  name: Yup.string().required("Your Name is required"),
  email: Yup.string()
    .nullable()
    .required("Email is required")
    .email("Email is invalid"),

  mobile: Yup.string().default("").required("Mobile is required"),
  comment: Yup.string().default("").required("Comment is required"),
});

const Contact = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      comment: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(
        createQuery({
          name: values.name,
          email: values.email,
          mobile: values.mobile,
          comment: values.comment,
        })
      );
      setTimeout(() => {
        resetForm();
      }, 1000);
    },
    //resetForm is a function that will reset the form values to the initialValues
    //after the form is submitted successfully.
    // resetForm: true,
  });
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />

      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.3590678522637!2d26.218448651667607!3d43.3485992790305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40af234808b9fe97%3A0x78a44743fe38bd32!2sbul.%20%22Bulgaria%22%20125%2C%207800%20Popovo!5e0!3m2!1sen!2sbg!4v1675596762431!5m2!1sen!2sbg"
              height={450}
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between text-white">
              <div>
                <h3 className="contact-title mb-3">Contact </h3>

                <form
                  action=""
                  className="d-flex flex-column"
                  onSubmit={formik.handleSubmit}
                >
                  <div>
                    <input
                      type="text"
                      name="namr"
                      className="form-control"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange("name")}
                      onBlur={formik.handleBlur("name")}
                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name}
                    </div>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                      name="mobile"
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>

                    <textarea
                      className="w-100 form-control"
                      name="comment"
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Enter your message"
                      value={formik.values.comment}
                      onChange={formik.handleChange("comment")}
                      onBlur={formik.handleBlur("comment")}
                    ></textarea>
                    <div className="error">
                      {formik.touched.comment && formik.errors.comment}
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="button mt-0 border-0">
                      Send
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <h3 className="contact-title mb-3">Get In Touch with Us </h3>
                <div>
                  <ul className="ps-3">
                    <li className="mb-3 d-flex gap-15">
                      <FaHome className="fs-4" />
                      <address className="mb-0">
                        Demo Shop Ltd., 123 Free Str., Bulgaria
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15">
                      <BiPhoneCall className="fs-4" />
                      <a href="tel:+359876711314">tel: +359 876 711 314</a>
                    </li>
                    <li className="mb-3 d-flex gap-15">
                      <HiOutlineMail className="fs-4" />
                      <a href="mailto:ang.petya@gmail.com">
                        ang.petya@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15">
                      <BsFillInfoCircleFill className="fs-4" />
                      <p>Monday - Friday 08:00 - 17:00</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
