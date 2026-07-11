import React, { useMemo, useState } from "react";
import debounce from "../hook/debounce";

const SearchInput = () => {
  const [debouncedQuery, setDebouncedQuery] = useState("");

  /* In this design, debouncedQuery is “the value after debouncing” (what the user has typed, but only after they pause typing for 1 second). */

  const search = (value) => {
    console.log("Searching for:", value);
    setDebouncedQuery(value);

    //call api or filter here
  };

  const debounceSearch = useMemo(() => {
    return debounce(search, 500);
  }, []);

  const handleInputChange = (e) => {
    debounceSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} placeholder="Search..." />

      <p>Debounced Query: {debouncedQuery}</p>
    </div>
  );
};

export default SearchInput;
