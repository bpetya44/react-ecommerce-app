import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, description, image, date } = props;
  return (
    <div className="blog-card">
      <div className="card-image">
        <img className="img-fluid w-100" src={image} alt="Blog" />
      </div>
      <div className="blog-content">
        <span className="date">{date}</span>
        <h5 className="title fs-5">{title}</h5>
        <p
          className="desc text-muted"
          dangerouslySetInnerHTML={{
            __html: description?.substr(0, 70) + "...",
          }}
        ></p>
        <Link className="button" to={"/blog/" + id}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
