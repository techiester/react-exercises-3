import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { client } from "../App";
import { Country } from "../types";
import { GET_CONTINENT } from "../schema";


const Continent = () => {
  const [code, setCode] = useState("AS");
  const { data, loading, error } = useQuery(GET_CONTINENT, {
    client,
    variables: {
      code: code
    }
  });

  const updateCountry = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  }

  const getFlag = (code: string): string => {
    return `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${String(code).toLowerCase()}.svg`;
  }

  return (
      <div className="container">
      {loading && <div className="loading">Loading...</div>}
      <input
        type="text"
        className="input-control"
        placeholder="Enter Continent Code"
        onInput={updateCountry}
        value={code}
      />
      {data && data.continent && (
        <div className="details">
          <div className="continent">Continent Name: {data.continent.name}</div>
          {data.continent.countries && data.continent.countries.map((country: Country) => (
            <div className="countries" key={country.code}>
              <img className="country-flag" src={getFlag(country.code)} alt={country.code} />
              <span className="country-name">{country.name}</span>
            </div>
          ))}
        </div>
      )}

      {error && <div className="error">No Result found</div>}
    </div>
  );
}

export default Continent;
