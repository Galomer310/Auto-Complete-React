// src/AutoComplete.jsx
import React, { useState } from "react";
import { countries } from "./countries";

const AutoComplete = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  // Handle input changes
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.length > 0) {
      // Filter suggestions
      const filteredSuggestions = countries.filter((country) =>
        country.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const onSuggestionClick = (value) => {
    setText(value); // Set input to the selected suggestion
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <input
        type="text"
        value={text}
        onChange={onChangeHandler}
        placeholder="Search countries..."
        style={{
          width: "100%",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      {/* Render suggestions */}
      {suggestions.length > 0 && (
        <ul
          style={{
            margin: 0,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            listStyle: "none",
          }}
        >
          {suggestions.map((country, index) => (
            <li
              key={index}
              onClick={() => onSuggestionClick(country)}
              style={{
                padding: "5px",
                cursor: "pointer",
                borderBottom: "1px solid #ddd",
              }}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
