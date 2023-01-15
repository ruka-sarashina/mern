import React from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./CreateBlog.scss";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const History = useHistory();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => History.push("/")} />
      <p className="title">Content Create Blog Page</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default CreateBlog;
