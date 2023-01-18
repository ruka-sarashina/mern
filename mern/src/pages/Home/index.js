import React, { useEffect, useState } from "react";
import { Button, BlogItem, Gap } from "../../components";
import "./Home.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // const [datablog, setDataBlog] = useState([]);
  const { datablogs, name } = useSelector(state => state);
  const dispatch = useDispatch();

  // console.log('state global: ', stateGlobal);
  console.log("data blog global:", datablogs);
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "UPDATE_NAME" });
    }, 3000);

    axios
      .get("http://localhost:4000/v1/blog/posts?page=2&perPage=2")
      .then(result => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        // setDataBlog(responseAPI.data);
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      })
      .catch(err => {
        console.log("error:", err);
      });
  }, []);
  const History = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => History.push("/create-blog")}
        />
      </div>
      <p>
        {name}
      </p>
      <Gap height={40} />
      <div className="content-wrapper">
        {datablogs.map(blog => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default Home;
