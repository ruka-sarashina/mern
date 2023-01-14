import React from "react";
import { RegisterBg } from "../../../assets";
import './BlogItem.scss';

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author</p>
        <p className="body">lorem ipsu bla bla bla</p>
      </div>
    </div>
  );
};

export default BlogItem;
