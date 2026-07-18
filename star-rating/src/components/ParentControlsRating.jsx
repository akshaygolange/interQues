import React, { useState } from "react";

const ParentControlsRating = ({ max = 5, rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const currentRating = hoverRating || rating;

  const stars = Array.from({ length: max }, (_, index) => index + 1);

  return (
    <div>

      {stars.map((star) => (
        <button
          type="button"
          key={star}
          onClick={() => onChange(rating === star ? 0 : star)}
          onMouseEnter={() => setHoverRating(star)}
          onMouseLeave={() => setHoverRating(0)}
          style={{
            cursor: "pointer",
            border: "none",
            background: "transparent",
            fontSize: "100px",
            color: star <= currentRating ? "gold" : "lightGray",
          }}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default ParentControlsRating;
