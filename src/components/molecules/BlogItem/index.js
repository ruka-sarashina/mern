import React from "react";
import { RegisterBg } from "../../../assets";
import './BlogItem.scss';
import { Button, Gap } from "../../atoms";
import { useHistory } from 'react-router-dom';

const BlogItem = () => {
  const History = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author</p>
        <p className="body">lorem ipsu bla bla bla</p>
        <Gap height={25} />
        <Button title="View Detail" onClick={() => History.push('/detail-blog')}/>
      </div>
    </div>
  );
};

export default BlogItem;
