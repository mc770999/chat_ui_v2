import React, { useState } from "react";
import { useStore } from "../../zustand/useStore.js";


const DateRangeSelector = ({ optionalRanges, onSelect, buttonClick }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
 
  const validateDate = () => {
    const isValid = optionalRanges.some(({ start, end }) => {
      const startValid = new Date(startDate) >= new Date(start);
      const endValid = new Date(endDate) <= new Date(end);
      return startValid && endValid && new Date(startDate) <= new Date(endDate);
    });

    if (!isValid) {
      setError("Selected dates must be within one of the optional ranges.");
    } else {
      setError("");
      onSelect({ startDate, endDate });
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        zIndex: "11",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 20px 0" }}>Select a Date Range</h3>

      <ul style={{ listStyleType: "none", padding: 0, marginBottom: "20px" }}>
        {optionalRanges.map(({ start, end }, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <strong>Range {index + 1}:</strong> {start} to {end}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Start Date:
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>
            End Date:
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>

      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

      <button
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s",
        }}
        onClick={({ startDate, endDate }) => {validateDate(); buttonClick({ startDate, endDate });}}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Submit
      </button>
    </div>
  );
};

export default DateRangeSelector;
