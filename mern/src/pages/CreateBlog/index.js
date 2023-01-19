import React, { useState } from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./CreateBlog.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setForm, setImgPreview } from "../../config/redux/action";
import { postToAPI } from "../../config/redux/action/createBlogAction";

const CreateBlog = () => {
  const { form, imgPreview } = useSelector(state => state.createBlogReducer);
  const { title, body } = form;
  const dispatch = useDispatch();

  const onSubmit = () => {
    postToAPI(form);
  };

  const onImageUpload = e => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };

  const History = useHistory();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => History.push("/")} />
      <p className="title">Create Blog Page</p>
      <Input
        label="Post Title"
        value={title}
        onChange={e => dispatch(setForm("title", e.target.value))}
      />
      <Upload onChange={e => onImageUpload(e)} img={imgPreview} />
      <TextArea
        value={body}
        onChange={e => dispatch(setForm("body", e.target.value))}
      />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" onClick={onSubmit} />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default CreateBlog;
