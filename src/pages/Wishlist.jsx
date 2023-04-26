import React from "react";
import Container from "../components/Container";
import { BreadCrumb, Meta } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { useEffect } from "react";
import { addToWishlist } from "../features/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const getWishList = () => {
    dispatch(getUserProductWishlist());
  };

  useEffect(() => {
    getWishList();
  }, []);

  const wishlistState = useSelector(
    (state) => state.auth.userWishlist.wishlist
  );
  console.log(wishlistState);

  const removeWishList = (id) => {
    console.log(id);
    dispatch(addToWishlist(id));

    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {!wishlistState && (
            <div className="col-12">
              <div className="wishlist-card position-relative bg-white">
                <div className="wishlist-card-description px-3 py-3">
                  <h5 className="title">No Wishlist Found</h5>
                </div>
              </div>
            </div>
          )}
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative bg-white">
                  <img
                    onClick={() => removeWishList(item._id)}
                    src="images/cross.svg"
                    alt="close"
                    className="position-absolute cross"
                  />
                  <div className="wishlist-card-image">
                    <img
                      className="img-fluid w-100 d-block mx-auto"
                      src={
                        // item?.images[0].url
                        //   ? item?.images[0].url
                        //   : "images/watch.png"
                        "images/watch.png"
                      }
                      alt="Apple Watch"
                    />
                  </div>
                  <div className="wishlist-card-description px-3 py-3">
                    <h5 className="title">{item.title}</h5>
                    <h6 className="price">${item.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
