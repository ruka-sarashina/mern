import React, { useState } from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./CreateBlog.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const onSubmit = () => {
    console.log("title: ", title);
    console.log("body: ", body);
    console.log("image: ", image);

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);

    axios.post("http://localhost:4000/v1/blog/post", data, {
        Headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(result => console.log("post succes", result))
      .catch(err => console.log("err", err));
  };

  const onImageUpload = e => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const History = useHistory();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => History.push("/")} />
      <p className="title">Create Blog Page</p>
      <Input
        label="Post Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Upload onChange={e => onImageUpload(e)} img={imagePreview} />
      <TextArea value={body} onChange={e => setBody(e.target.value)} />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" onClick={onSubmit} />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default CreateBlog;
