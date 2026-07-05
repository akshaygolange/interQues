import React, { useEffect, useState } from "react";

const DependentDropDown = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const data = {
    India: ["Mumbai", "Nagpur", "Pune", "Kochi"],
    NewZealand: ["Auckland", "Wellington", "Christchurch"],
  };
  // console.log(data);
  // console.log("City->>", city, "Country ->>", country);

  //  console.log(data["India"]||[]);

  // filter only works on arr not an objects

  

  return (
    <div>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setCity("");
        }}
      >
        <option value="">Select Country</option>
        {Object.keys(data).map((countryName) => (
          <option key={countryName} value={countryName}>
            {countryName}
          </option>
        ))}
      </select>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!country}
      >
        <option value="">Select City</option>
        {country &&
          data[country].map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
      </select>
      <h3>Selected: {country}</h3>
      <h3>Selected: {city}</h3>
    </div>
  );
};

export default DependentDropDown;
