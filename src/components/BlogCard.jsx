import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          className="img-fluid w-100"
          src="images/blog-1.jpg"
          alt="Blog news"
        />
      </div>
      <div className="blog-content">
        <span className="date">10 Jan 2023</span>
        <h5 className="title fs-5">How to be the new Smart Star</h5>
        <p className="desc text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link className="button" to="blog/:id">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
