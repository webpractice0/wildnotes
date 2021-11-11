import React from "react";
import Carousel from "./HomeComponents/Carousel";
import PopularNotes from "./HomeComponents/PopularNotes";

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-9">
          <Carousel />
        </div>
        <div className="col-md-3">
        <PopularNotes />
        </div>
      </div>
    </div>
  );
};

export default Home;
