import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const currentRating = hover || rating;
  function handleClick(starValue) {
    setRating((prev) => (prev === starValue ? 0 : starValue));
  }
  function handleMouseEnter(starValue) {
    setHover(starValue);
  }
  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FaStar
            key={starValue}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            size={40}
            style={{
              cursor: "pointer",
              color: starValue <= currentRating ? "gold" : "lightgray",
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
