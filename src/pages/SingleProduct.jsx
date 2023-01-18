import ReactStars from "react-rating-stars-component";
import { BreadCrumb, Meta, ProductCard } from "../components/index";
import { useState } from "react";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      <div className="main-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="description-wrapper home-wrapper-2 pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="text-white mb-2">Description</h4>
              <p className="bg-white p-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                sit minus libero voluptatum, assumenda illum? Atque veritatis ab
                iure maiores accusamus. Sapiente dolore vitae assumenda autem.
                Ipsum ex tempora nulla.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="reviews-wrapper home-wrapper-2 pb-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className=" text-white mb-2">Customer Reviews</h4>
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
                        activeColor="#ffd700"
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
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                      <div className="py-3 px-2">
                        <p className="mb-2 text-muted">Your Rating</p>
                        <ReactStars>
                          count={5}
                          size={28}
                          value={3}
                          edit={true}
                          activeColor="#ffd700"
                        </ReactStars>
                      </div>

                      <textarea
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Write your review"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="button mt-0 border-0">Submit</button>
                    </div>
                  </form>
                </div>

                {/* Reviews */}
                <div className="reviews my-5 pb-5">
                  <div className="review">
                    <div className="d-flex align-items-center gap-10">
                      <h6 className="mb-0">Person Name</h6>
                      <ReactStars>
                        count={5}
                        size={28}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      </ReactStars>
                    </div>

                    <p className="text-muted mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Accusamus optio doloribus ab quibusdam officiis esse,
                      asperiores doloremque neque voluptas vero necessitatibus.
                      Facere aliquid neque totam illum excepturi iusto rerum
                      reiciendis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Popular Products */}
      <section className="popular-wrapper pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading text-white">Popular Products </h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
