import React from "react";
import Container from "../components/Container";
import { BreadCrumb, Meta } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { useEffect } from "react";

const Wishlist = () => {
  const dispatch = useDispatch();
  const getWishList = () => {
    dispatch(getUserProductWishlist());
  };

  useEffect(() => {
    getWishList();
  }, []);

  const wishlistState = useSelector((state) => state.auth.wishlist.wishlist);
  console.log(wishlistState);

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative bg-white">
                  <img
                    src="images/cross.svg"
                    alt="close"
                    className="position-absolute cross"
                  />
                  <div className="wishlist-card-image">
                    <img
                      className="img-fluid w-100"
                      src="images/watch.png"
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
