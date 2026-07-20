import React, { useState } from "react";

const ImparativeVsDeclarative = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={handleClick}>Increment count</button>
    </div>
  );
};

export default ImparativeVsDeclarative;
