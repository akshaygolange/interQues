import React from "react";
import DependentDropDown from "./components/dependent-dropdown";
import CascadeDropDown from "./components/dependent-dropdown/Api";

const App = () => {
  return (
    <div>
      App compo
      {/* <DependentDropDown/> */}
      <CascadeDropDown />
    </div>
  );
};

export default App;
