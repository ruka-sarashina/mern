import React from "react";
import { Button, BlogItem, Gap } from "../../components";
import "./Home.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Home = () => {
  const History = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="create blog" onClick={() => History.push('/create-blog') }/>
      </div>
      <Gap height={40} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20}/>
        <Button title="Next" />
      </div>
      <Gap height={50} />
    </div>
  );
};

export default Home;
