import React from "react";
import './BlogItem.scss';
import { Button, Gap } from "../../atoms";
import { useHistory } from 'react-router-dom';

const BlogItem = (props) => {
  const History = useHistory();
  const {image, title, name, date, body, _id} = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">{name} {date}</p>
        <p className="body">{body}</p>
        <Gap height={25} />
        <Button title="View Detail" onClick={() => History.push(`/detail-blog/${_id}`)}/>
      </div>
    </div>
  );
};

export default BlogItem;
