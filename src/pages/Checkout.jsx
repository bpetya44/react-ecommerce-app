import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { base_url } from "../utils/axiosConfig";

const checkoutSchema = Yup.object({
  country: Yup.string().required("Country is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  other: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string().required("Zip Code is required"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  console.log(cartState);

  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum += cartState[i]?.price * cartState[i]?.quantity;
    }
    setTotalAmount(sum);
  }, [cartState]);

  const formik = useFormik({
    initialValues: {
      country: "",
      firstName: "",
      lastName: "",
      other: "",
      city: "",
      state: "",
      pincode: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setShippingInfo(values);
      handlePayment();
      //dispatch(registerUser(values));
    },
  });

  //implement payment through stripe
  const handlePayment = async () => {
    const response = await axios.post(
      `${base_url}payment/create-checkout-session`,
      shippingInfo,

      {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      }
    );
    console.log(response);
  };

  return (
    <>
      <Container class1="checkout-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="ckeckout-left-data">
              <h3 className="website-name text-white">Checkout</h3>
              {/* Breadcrumb */}
              <nav style={{ fontSize: "0.8rem" }} aria-label="breadcrumb">
                <ol className="breadcrumb text-muted">
                  <li className="breadcrumb-item">
                    <Link href="/cart" className="text-muted">
                      Cart
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    Information
                  </li>
                  <li className="breadcrumb-item">Shipping</li>
                  <li className="breadcrumb-item">Payment</li>
                </ol>
              </nav>

              {/* Checkout form */}
              <div className="checkout-inner-wrapper bg-white border rounded py-3 px-3">
                <h4 className="title">Contact Information</h4>
                <p className="user-details">Petya Angelova (email@email.com)</p>
                <h4 className="mt-5 mb-3">Shipping address</h4>
                <form
                  action=""
                  method="post"
                  className="d-flex flex-wrap justify-content-between gap-15"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="w-100">
                    <select
                      id=""
                      className="form-control form-select"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange("country")}
                      onBlur={formik.handleBlur("country")}
                    >
                      <option value="">Select Country</option>
                      <option value="Unated States">Unated States</option>
                      <option value="Unated Kingdom">Unated Kingdom</option>
                      <option value="Bulgaria">Bulgaria</option>
                    </select>
                    <div className="error mt-1">
                      {formik.touched.country && formik.errors.country}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange("firstName")}
                      onBlur={formik.handleBlur("firstName")}
                    />
                    <div className="error mt-1">
                      {formik.touched.firstName && formik.errors.firstName}
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange("lastName")}
                      onBlur={formik.handleBlur("lastName")}
                    />
                    <div className="error mt-1">
                      {formik.touched.lastName && formik.errors.lastName}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address Line 1"
                      name="other"
                      value={formik.values.other}
                      onChange={formik.handleChange("other")}
                      onBlur={formik.handleBlur("other")}
                    />
                    <div className="error mt-1">
                      {formik.touched.other && formik.errors.other}
                    </div>
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Addres Line 2"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      name="city"
                      value={formik.values.city}
                      onChange={formik.handleChange("city")}
                      onBlur={formik.handleBlur("city")}
                    />
                    <div className="error mt-1">
                      {formik.touched.city && formik.errors.city}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <select
                      id=""
                      className="form-control form-select"
                      name="state"
                      value={formik.values.state}
                      onChange={formik.handleChange("state")}
                      onBlur={formik.handleBlur("state")}
                    >
                      <option value="">Select State</option>
                      <option value="Arizona">Arizona</option>
                      <option value="California">California</option>
                    </select>
                    <div className="error mt-1">
                      {formik.touched.state && formik.errors.state}
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip Code"
                      name="pincode"
                      value={formik.values.pincode}
                      onChange={formik.handleChange("pincode")}
                      onBlur={formik.handleBlur("pincode")}
                    />
                    <div className="error mt-1">
                      {formik.touched.pincode && formik.errors.pincode}
                    </div>
                  </div>
                  <div className="w-100 my-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="">
                        <BiArrowBack className="fs-5 me-2" />
                        Return To Cart
                      </Link>
                      <Link to="/cart" className="button mt-0 fs-6">
                        Continue to Shipping
                      </Link>
                      <button
                        type="submit"
                        className="button btn mt-0 fs-6"
                        onSubmit={() => handlePayment()}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right side data */}
          <div className="col-5">
            <div className="checkout-right-data bg-white border rounded py-3 px-3">
              <h4 className="title border-bottom mt-0 pb-2">Order Summary</h4>
              <div className="border-bottom">
                {cartState &&
                  cartState?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="d-flex justify-content-between my-3 "
                      >
                        <div className="w-25 position-relative">
                          <span
                            className="badge bg-warning rounded-circle position-absolute p-2 "
                            style={{ right: "-20px", top: "0" }}
                          >
                            {item?.quantity}
                          </span>
                          <img
                            className="img-fluid border rounded m-2"
                            src={
                              item?.productId?.images[0]?.url
                                ? item?.productId?.images[0]?.url
                                : watch
                            }
                            alt="product"
                          />
                        </div>
                        <div className="ms-3">
                          <h5 className="title"> {item?.productId?.title}</h5>
                          <p className="article">Color: {item?.color.title}</p>
                        </div>
                        <h5 className="mt-0 price">
                          $ {item?.price * item?.quantity}
                        </h5>
                      </div>
                    );
                  })}
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <p>SubTotal:</p>
                <p>$ {totalAmount ? totalAmount : 0}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3 border-bottom">
                <p>Shipping:</p>
                <p>$ 5.00</p>
              </div>

              <div className="d-flex justify-content-between align-items-center my-3">
                <h5>Total:</h5>
                <h5>$ {totalAmount ? totalAmount + 5 : 0}</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
