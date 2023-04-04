import { useEffect } from "react";
import { BreadCrumb, Meta } from "../components/index";
import { Link, useLocation } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";

const SingleBlog = () => {
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  console.log(getBlogId);
  const dispatch = useDispatch();

  useEffect(() => {
    const getBlog = () => {
      dispatch(getABlog(getBlogId));
    };
    getBlog();
  }, [dispatch, getBlogId]);

  const blogState = useSelector((state) => state?.blog?.singleBlog);
  console.log(blogState);

  return (
    blogState && (
      <>
        <Meta title={blogState.title} />
        <BreadCrumb title={blogState.title} />

        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs">
                  <BiLeftArrow /> Back to Blogs
                </Link>
                <h3 className="title">{blogState.title}</h3>

                <img
                  className="img-fluid w-100 my-4"
                  src={
                    blogState.images[0]?.url ? blogState.images[0]?.url : blog
                  }
                  alt="single blog"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogState.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </Container>
      </>
    )
  );
};

export default SingleBlog;
