import { useEffect } from "react";
import { BreadCrumb, Meta, ProductCard, Colors } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import Container from "../components/Container";
import { getAllProducts } from "../features/products/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  // alert(grid);

  const productState = useSelector((state) => state.product.product);
  console.log(productState);

  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <h5 className="sub-title">Availability</h5>

              <div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                      value=""
                    />
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id=""
                      value=""
                    />
                    Out of Stock (0)
                  </label>
                </div>
              </div>

              <h5 className="sub-title">Price $</h5>
              {/*  From To */}
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="From"
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="To"
                  />
                  <label htmlFor="floatingInput1">To</label>
                </div>
              </div>

              <h5 className="sub-title">Colors</h5>
              <div>
                <Colors />
              </div>

              <h5 className="sub-title">Size</h5>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="clor-2"
                  />
                  <label className="form-check-label" htmlFor="color-2">
                    S(2)
                  </label>
                </div>
              </div>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="clor-2"
                  />
                  <label className="form-check-label" htmlFor="color-2">
                    M(2)
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphones
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptops
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Phones
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablets
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Speakers
                  </span>
                </div>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Products</h3>
              <div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      className="img-fluid"
                      src="images/smart.png"
                      alt="smart watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Best Watch for sport</h5>

                    <ReactStars
                      count={5}
                      size={28}
                      value={3}
                      edit={false}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                    />
                    <p>$299</p>
                  </div>
                </div>

                <div className="random-products d-flex mt-3">
                  <div className="w-50">
                    <img
                      className="img-fluid"
                      src="images/smart.png"
                      alt="smart watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Best Watch for sport</h5>

                    <ReactStars
                      count={5}
                      size={28}
                      value={3}
                      edit={false}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                    />
                    <p>$299</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="filter-sort-grid mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select className="form-control form-select" name="" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>

                <div className="d-flex align-items-center gap-10">
                  <p className="total-products mb-0">20 Products</p>
                  <div className="d-flex align-items-center gap-10 grid">
                    <img
                      onClick={() => setGrid(3)}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(4)}
                      src="images/gr3.svg"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(6)}
                      src="images/gr2.svg"
                      alt="grid"
                    />
                    <img
                      onClick={() => setGrid(12)}
                      src="images/gr.svg"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-list py-3">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  grid={grid}
                  data={productState ? productState : []}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
