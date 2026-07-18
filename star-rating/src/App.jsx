import { useState } from "react";
import StarRating from "./components/StarRating";
import ParentControlsRating from "./components/ParentControlsRating";

function App() {
  const [rating, setRating] = useState(0);
  return (
    <>
      <h3>Star rating..</h3>
      <StarRating noOfStars={5} />
      <ParentControlsRating max={10} rating={rating} onChange={setRating} />
    </>
  );
}

export default App;
