import React, { useEffect, useState } from "react";
import { Button, BlogItem, Gap } from "../../components";
import "./Home.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDatablog } from "../../config/redux/action";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import axios from "axios";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { datablog, page } = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  // console.log("page: ", dispatch);

  useEffect(
    () => {
      dispatch(setDatablog(counter));
    },
    [counter, dispatch]
  );
  const History = useHistory();
  const previos = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    // console.log(counter);
  };

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
    // console.log(counter);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Apakah anda yakin akan menghapus post ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            // console.log(id);
            axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
            .then(res => {
              console.log('succes  delete: ', res);
              dispatch(setDatablog(counter));
            })
            .catch(err => {
              console.log("error delete: ", err);
            })
          }
        },
        {
          label: 'No',
          onClick: () => console.log('user tidak setuju')
        }
      ]
    });
  }

  return (
    <div className="home-page-wrapper">
      <h1 className="wrap-text">Blog Mern</h1>
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => History.push("/create-blog")}
        />
      </div>
      <Gap height={40} />
      <div className="content-wrapper">
        {datablog.map(blog => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              _id={blog._id}
              onDelete={confirmDelete}
            />
          );
        })}
      </div>
      <Gap height={40} />
      <div className="pagination">
        <Button title="Previous" onClick={previos} />
        <Gap width={20} />
        <p className="text-page">
          {" "}{page.currentPage} / {page.totalPage}{" "}
        </p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default Home;
