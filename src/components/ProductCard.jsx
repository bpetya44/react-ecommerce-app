import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import wishlist from "../images/wishlist.svg";
import watch from "../images/smart-watch.jpg";
import prodcompare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";

const ProductCard = (props) => {
  const { grid, data } = props;
  //console.log(data);
  let location = useLocation();
  //console.log(location)

  const dispatch = useDispatch();
  const addToWish = (id) => {
    // console.log(id);
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <div
              key={item._id}
              className={`${
                location.pathname === "/store" ? `gr-${grid}` : "col-3"
              }`}
            >
              <Link
                // to={`${
                //   location.pathname === "/"
                //     ? "product/:id"
                //     : location.pathname === "/product/:id"
                //     ? "product/:id"
                //     : ":id"
                // }`}
                className="product-card position-relative"
              >
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={(e) => addToWish(item._id)}
                  >
                    <img src={wishlist} alt="wishlist" />
                  </button>
                </div>
                <div className="product-image">
                  <img
                    className="img-fluid w-100"
                    src={item.images.map((img) => img.url)}
                    alt="product"
                  />
                </div>
                <div className="product-details p-3">
                  <h6 className="brand mt-1">{item?.brand}</h6>
                  <h5 className="product-title fs-5">{item.title}</h5>

                  <ReactStars>
                    count={5}
                    size={28}
                    value={3}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                  </ReactStars>

                  <div
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>

                  <span className="price">{`$ ${item.price.toFixed(2)}`}</span>
                </div>

                {/* Action Bar */}
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-30">
                    <button className="border-0 bg-transparent">
                      <img src={prodcompare} alt="compare" />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img src={view} alt="veiw " />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img src={addcart} alt="add to cart" />
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
