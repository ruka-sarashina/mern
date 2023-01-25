import React, { useState, useEffect } from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./CreateBlog.scss";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setForm, setImgPreview } from "../../config/redux/action";
import { postToAPI, updateToAPI } from "../../config/redux/action";
import axios from "axios";

const CreateBlog = (props) => {
  const { form, imgPreview } = useSelector(state => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('params', props);
    const id = props.match.params.id;
    if (id) {
      setIsUpdate(true);
      axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then(res => {
          const data = res.data.data
          console.log('res: ', data);
          dispatch(setForm('title', data.title));
          dispatch(setForm('body', data.body))
          dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
        })
        .catch(err => {
          console.log('err', err);
        })
    }
  }, [props])

  const onSubmit = () => {
    const id = props.match.params.id;
    if(isUpdate){
      console.log('update data');
      updateToAPI(form,id)
      alert('Data berhasil di update', History.push('/'))
    } else {
      console.log('create data');
      alert('Data Berhasil di buat')
      postToAPI(form);
    }
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
      <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Page</p>
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
        <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default withRouter(CreateBlog);
