import React from "react";
import ReactStars from "react-rating-stars-component";

const firstExample = {
  size: 60,
  isHalf: true,
  value: 4.5,
  edit: false
};

const FixedStar = () => {
  return (
    <div className="App">
      <ReactStars {...firstExample} />
    </div>
  )
}

export default FixedStar;
