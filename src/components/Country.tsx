import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import { client } from "../App";
import { Language } from "../types";
import { GET_COUNTRY } from "../schema";

const Country = () => {
  const [code, setCode] = useState("IN");
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    client,
    variables: {
      code: code
    }
  });

  const updateCountry = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  }

  return (
    <div className="container">
      {loading && <div className="loading">Loading...</div>}
      <input
        type="text"
        className="input-control"
        placeholder="Enter Country Code"
        onInput={updateCountry}
        value={code}
      />
      {data && data.country && (
        <div className="details">
          <div>Name: {data.country.name}</div>
          <div>Code: {data.country.code}</div>
          <div>Currency: {data.country.currency}</div>
          <div>Flag: {data.country.emoji}</div>
          <div>Languages: {data.country.languages.map((language: Language) => (
            <span className="languages" key={language.code}>{language.name}</span>
          ))}
          </div>
        </div>
      )}
      {error && <div className="error">No Result found</div>}
    </div>
  );
}

export default Country;