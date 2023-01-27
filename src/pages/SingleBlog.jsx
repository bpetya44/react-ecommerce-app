import { BreadCrumb, Meta } from "../components/index";
import { Link } from "react-router-dom";
import { BiLeftArrow } from "react-icons/bi";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs">
                <BiLeftArrow /> Back to Blog
              </Link>
              <h3 className="title">How to be the new Smart Star</h3>

              <img
                className="img-fluid w-100 my-4"
                src={blog}
                alt="single blog"
              />
              <p>
                Anti-Scratch, Battery Powered, Bluetooth, Impact Resistant,
                Integrated Stand, Shockproof, USB Powered, With Pencil Holder,
                Built-in Pen Slot, With Touchpad / Trackpad, Wireless Bluetooth
                Keyboard, Bluetooth Wireless Mouse For Your Select, Folding
                Folio Flip Shell Book, PU Leather stand Protective protector,
                Ultra Slim Thin, All-in-one keyboard, Integrated bluetooth
                keyboard case with touchpad, ABS scissor keyboard, The bottom
                shell is a PC hard shell
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
