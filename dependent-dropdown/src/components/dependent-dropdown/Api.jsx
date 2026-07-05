import React, { useEffect, useState } from "react";

const CascadeDropDown = () => {
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  // console.log("country->>", country, "city ->>", city);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiRes = await fetch(
          `https://countriesnow.space/api/v0.1/countries`,
        );
        // console.log(apiRes);

        const res = await apiRes.json();
        // console.log("res data ->>", res.data);
        setCountry(res.data);
        // setCountry(res.data.slice(0, 10)); //start ,end\
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  // const countriesStartingwithI = country.filter(
  //   ({ country, cities, iso2, iso3 }) => {

  //     // console.log("debugging ->>" ,country);

  //     return country.startsWith("I");
  //   },
  // );
  // console.log(countriesStartingwithI, "<-- countriesStartingwithI");

  const filteredCountries = country.filter(({ country }) =>
    country.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const handleCountryChange = (e) => {
    const coumtryName = e.target.value;
    setSelectedCountry(coumtryName);
    const selectedCountryData = country.find(
      (item) => item.country === coumtryName,
    );

    setCity(selectedCountryData?.cities || []);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const selectStyle = {
    padding: "8px 12px",
    marginRight: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  // const handleSearch = (e) => {
  //   console.log("e.target.value ->>", e.target.value);
  //   setSearchTerm(e.target.value);
  // };

  return (
    <div>
      {/* <input
        style={selectStyle}
        type="text"
        placeholder="Search Country"
        value={searchTerm}
        onChange={handleSearch}
      /> */}
      <select
        style={selectStyle}
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Select Country</option>

        {country.map(({ cities, country, iso2 }) => (
          <option key={iso2} value={country}>
            {country}
          </option>
        ))}
      </select>

      <select
        style={selectStyle}
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedCountry}
      >
        <option value="">Select City</option>
        {city.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <div>
        <h3>
          You have selected country:{" "}
          <span style={{ color: "yellow" }}>{selectedCountry}</span>
        </h3>
        <h3>
          You have selected City:{" "}
          <span style={{ color: "yellow" }}>{selectedCity}</span>
        </h3>
      </div>

      {/* <div>
        {filteredCountries.map(({ country, iso2 }) => (
          <h3 key={iso2}>{country}</h3>
        ))}
      </div> */}
    </div>
  );
};

export default CascadeDropDown;
