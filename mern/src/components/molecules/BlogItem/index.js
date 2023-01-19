import React from "react";
import './BlogItem.scss';
import { Button, Gap } from "../../atoms";
import { useHistory } from 'react-router-dom';

const BlogItem = (props) => {
  const History = useHistory();
  const { image, title, name, date, body, _id, onDelete } = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <div className="title-wrapper">
          <p className="title">{title}</p>
          <div className="edit-wrapper">
            <p className="edit" onClick={() => History.push(`/create-blog/${_id}`)}>Edit</p> | <p className="delete" onClick={() => onDelete(_id)}>Delete</p>
          </div>
        </div>
        <p className="author">{name} {date}</p>
        <p className="body">{body}</p>
        <Gap height={25} />
        <Button title="View Detail" onClick={() => History.push(`/detail-blog/${_id}`)} />
      </div>
    </div>
  );
};

export default BlogItem;
