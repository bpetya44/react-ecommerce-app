import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { BreadCrumb, Colors, Meta, ProductCard } from "../components/index";
import { useState } from "react";
import { TbHeartPlus } from "react-icons/tb";
import { DiGitCompare } from "react-icons/di";
import { BiCopy } from "react-icons/bi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import Container from "../components/Container";
import { getAProduct, getAllProducts } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from "../features/user/userSlice";
import { addRating } from "../features/products/productSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  //console.log(color);
  const [quantity, setQuantity] = useState(1);
  // console.log(quantity);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const location = useLocation();
  const { id: productId } = useParams();
  //console.log(productId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productState = useSelector((state) => state?.product?.singleProduct);
  //console.log(productState);
  const productsState = useSelector((state) => state?.product?.product);
  const userCartState = useSelector((state) => state?.auth?.cartProducts);

  useEffect(() => {
    dispatch(getAProduct(productId));
    dispatch(getAllProducts());
    setTimeout(() => {
      dispatch(getUserCart());
    }, 300);
  }, [dispatch, productId]);

  //if product already added to cart
  useEffect(() => {
    for (let i = 0; i < userCartState?.length; i++) {
      if (userCartState[i]?.productId?._id === productId) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const uploadCart = () => {
    if (!color) {
      toast.error("Please select a color");
      return false;
    } else {
      dispatch(
        addProductToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      setOrderedProduct(true);
      setTimeout(() => {
        navigate("/cart");
      }, 500);
    }
  };

  const [orderedProduct, setOrderedProduct] = useState(false);

  const props = {
    width: 600,
    height: 500,
    zoomWidth: 500,
    img:
      productState?.images[0]?.url ||
      "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60",
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  //popular products
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    let popular = [];
    for (let i = 0; i < productsState?.length; i++) {
      if (productsState[i]?.tags === "popular") {
        popular.push(productsState[i]);
      }
    }
    setPopularProducts(popular);
  }, [productsState]);
  //console.log(popularProducts);

  //rating
  const [star, setStar] = useState(null);
  console.log(star);
  const [comment, setComment] = useState(null);
  const addRatingToProduct = () => {
    if (star === null) {
      //toast.error("Please add star rating");
      return false;
    }
    if (comment === null) {
      toast.error("Please add comment");
      return false;
    } else {
      dispatch(
        addRating({
          productId,
          star,
          comment,
        })
      );
      setTimeout(() => {
        dispatch(getAProduct(productId));
      }, 300);
    }
  };

  return (
    <>
      <Meta title={productState?.title} />
      <BreadCrumb title={productState?.title} />

      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images?.map((image, index) => {
                return (
                  <div key={index}>
                    <img
                      src={
                        image?.url ||
                        "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
                      }
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom">
                <p className="price">Price: ${productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars>
                    count={5}
                    size={28}
                    value={3}
                    edit={false}
                    activeColor={"#ffd700"}
                  </ReactStars>
                  <p className="mb-0 text-muted">(2 reviews)</p>
                </div>
                <a className="text-dark text-muted py-2" href="#review">
                  Write a review
                </a>
              </div>
              <div className="border-bottomS">
                <div className="d-flex align-items-center gap-10 my-1">
                  <h4 className="product-heading">Brand:</h4>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-1">
                  <h4 className="product-heading">Category:</h4>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-1">
                  <h4 className="product-heading">Tags:</h4>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-1">
                  <h4 className="product-heading">Availabuility:</h4>
                  <p className="product-data">
                    {productState?.quantity > 0 ? "In Stock" : "Not available"}
                  </p>
                </div>

                {/* <div className="d-flex flex-column gap-10 mt-2 mb-3">
                  <h4 className="product-heading">Size:</h4>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 text-dark bg-white">
                      S
                    </span>
                    <span className="badge border border-1 text-dark bg-white">
                      M
                    </span>
                    <span className="badge border border-1 text-dark bg-white">
                      L
                    </span>
                    <span className="badge border border-1 text-dark bg-white">
                      XL
                    </span>
                  </div>
                </div> */}

                {alreadyAdded === false && (
                  <>
                    <div className="d-flex flex-column gap-10 mt-2">
                      <h4 className="product-heading">Color:</h4>
                      <Colors
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                    </div>
                  </>
                )}
                <div className="d-flex align-items-center gap-10 mt-0 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h4 className="product-heading">Quantity:</h4>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          style={{ width: "75px" }}
                          className="form-control"
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div className={"d-flex align-itens-center gap-10 mt-0 mb-3"}>
                    <button
                      className="button login border-0 mt-4"
                      type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : uploadCart();
                      }}
                    >
                      {alreadyAdded === false ? "Add to cart" : "Go to cart"}
                    </button>
                    {/* <button className="button mt-4 border-0">Buy Now</button> */}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-30">
                  <div>
                    <a href="/">
                      <DiGitCompare className="fs-5" /> Add to compare
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <TbHeartPlus className="fs-5 mx-1" />
                      Add to favourite
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-10 my-3">
                <h4 className="product-heading">Shipping & Returns</h4>
                <p className="product-data">
                  Free shipping and returns available on all orders! <br /> We
                  ship all orders within <b>2-5 business days.</b>
                </p>
              </div>
              <div className="d-flex align-items-center gap-10 my-3">
                <h4 className="product-heading">Copy Product Link:</h4>
                <button
                  href={void 0}
                  onClick={() => copyToClipboard(window.location.href)}
                  className="fs-6 bg-white border-0 px-3 py-2"
                >
                  <BiCopy className="fs-5 me-1" />
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Description */}
      <Container class1="description-wrapper home-wrapper-2 pb-5">
        <div className="row">
          <div className="col-12">
            <h4 className="text-white mb-2">Description</h4>
            <p
              className="bg-white p-3"
              dangerouslySetInnerHTML={{ __html: productState?.description }}
            ></p>
          </div>
        </div>
      </Container>

      {/* Reviews */}
      <Container class1="reviews-wrapper home-wrapper-2 pb-5">
        <div className="row">
          <div className="col-12">
            <h4 id="review" className=" text-white mb-2">
              Customer Reviews
            </h4>
            <div className="review-inner-wrapper">
              <div
                className="review-head d-flex align-items-end
                justify-content-between  "
              >
                <div>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars>
                      count={5}
                      size={28}
                      value={3}
                      edit={false}
                      activeColor={"#ffd700"}
                    </ReactStars>
                    <p className="py-3 mb-0">Based on 2 reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a
                      className=" text-dark text-decoration-underline py-3"
                      href="/"
                    >
                      Write a review
                    </a>
                  </div>
                )}
              </div>

              {/* Review Form */}
              <div className="review-form py-3">
                <h5 className="text-muted mb-3">Write a Review</h5>

                <div>
                  <div className="py-3 px-2">
                    <p className="mb-2 text-muted">Your Rating</p>
                    <ReactStars>
                      count={5}
                      size={28}
                      value={3}
                      edit={true}
                      activeColor="#ffd700" onChange = {(e) => setStar(e)}
                    </ReactStars>
                  </div>

                  <textarea
                    className="w-100 form-control"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write your review"
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={addRatingToProduct}
                    className="button mt-0 border-0"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* Reviews */}
              <div className="reviews my-5 pb-5">
                {productState &&
                  productState?.ratings?.map((item, index) => {
                    return (
                      <div className="review" key={index}>
                        <div className="d-flex align-items-center gap-10">
                          <h6 className="mb-0">{}</h6>
                          <ReactStars>
                            count={5}
                            size={28}
                            value={item?.star}
                            edit={true}
                            activeColor={"#ffd700"}
                          </ReactStars>
                        </div>
                        <p className="text-muted mt-3">{item?.comment}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/*Popular Products */}
      <Container class1="popular-wrapper pb-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading text-white">Popular Products </h3>
          </div>
          <ProductCard data={popularProducts} />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
