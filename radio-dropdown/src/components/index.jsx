import React, { useState } from "react";

const Radio = () => {
  const data = {
    Sports: ["Cricket", "Football", "Hockey", "Tennis"],
    Days: ["Weekdays", "Weekend"],
  };

  const [sports, setSports] = useState("");
  const [day, setDay] = useState("");

  return (
    <div>
      <h2>Select sports</h2>

      {Object.keys(data).map((key) => (
        <label key={key}>
          <input
            type="radio"
            name="sports"
            value={key}
            checked={sports === key}
            onChange={(e) => {
              setSports(e.target.value);
              setDay("");
            }}
          />
          {key}
        </label>
      ))}

      {sports && (
        <div>
          <h3>Select options</h3>
          {data[sports].map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="day"
                value={item}
                checked={day === item}
                onChange={(e) => {
                  setDay(e.target.value);
                }}
              />
              {item}
            </label>
          ))}
        </div>
      )}

      <div>
        <h3>Category: {sports}</h3>
        <h3>Selected: {day}</h3>
      </div>
    </div>
  );
};

export default Radio;
