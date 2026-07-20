import React, { useRef, useState } from "react";

const ControlledVsUncontrolled = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const inputRef = useRef(null);
  const handleClick = () => {
    alert(inputRef.current?.value);
  };
  return (
    <>
      <div>
        <h2>Controlled Input</h2>

        <h2>{text}</h2>
        <input type="text" value={text} onChange={handleChange} />
      </div>

      <div>
        <h2>UnControlled Input</h2>
        <input type="text" ref={inputRef} />

        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
};

export default ControlledVsUncontrolled;
