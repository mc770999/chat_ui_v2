import React from "react";



const MainDetails = ({ startDate, endDate, price, onBuyClick }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center", // Ensures proper vertical alignment
      marginBottom: "20px",
      gap: "10px", // Adds space between elements
    }}
  >
    <h3 style={{ margin: 0 }}>
      {" "}
      {/* Removes extra margin from the heading */}
      Price: {price}
    </h3>
    <button
      style={{
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px", // Ensures text is readable
        fontWeight: "bold", // Makes button text more prominent
        transition: "background-color 0.3s", // Adds a hover effect
      }}
      onClick={onBuyClick}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")} // Darkens button on hover
      onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")} // Resets color on mouse out
    >
      Buy Ticket
    </button>
  </div>
);

const FlightWayDetails = ({
  title,
  departure,
  arrival,
  airline,
  logo,
  duration,
  stops,
}) => (
  <div style={{ marginBottom: "20px" }}>
    <h4>{title}</h4>
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <img
        src={logo}
        alt={`${airline} logo`}
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
      />
      <p>
        <strong>Airline:</strong> {airline}
      </p>
    </div>
    <p>
      <strong>Departure:</strong> {departure.time} - {departure.airport}
    </p>
    <p>
      <strong>Arrival:</strong> {arrival.time} - {arrival.airport}
    </p>
    <p>
      <strong>Duration:</strong> {duration}
    </p>
    <p>
      <strong>Stops:</strong> {stops.join(", ")}
    </p>
  </div>
);

const FlightDetails = ({ flightData }) => {
  const handleBuyClick = () => {
    window.open("https://www.example.com/buy-ticket", "_blank");
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
      <MainDetails
        startDate={flightData.startDate}
        endDate={flightData.endDate}
        price={flightData.price}
        onBuyClick={handleBuyClick}
      />

      <hr style={{ margin: "20px 0" }} />

      <FlightWayDetails
        title="Outbound Flight"
        departure={flightData.outbound.departure}
        arrival={flightData.outbound.arrival}
        airline={flightData.outbound.airline}
        logo={flightData.outbound.logo}
        duration={flightData.outbound.duration}
        stops={flightData.outbound.stops}
      />

      <hr style={{ margin: "20px 0" }} />

      <FlightWayDetails
        title="Inbound Flight"
        departure={flightData.inbound.departure}
        arrival={flightData.inbound.arrival}
        airline={flightData.inbound.airline}
        logo={flightData.inbound.logo}
        duration={flightData.inbound.duration}
        stops={flightData.inbound.stops}
      />
    </div>
  );
};

export default FlightDetails;
