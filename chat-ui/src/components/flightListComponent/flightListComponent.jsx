import React from 'react'
import FlightDetails from './flightDetails'

const FlightList = ({ data }) => {
  return (
    <div style={{ zIndex: '11' }}>
      {data.map((element, index) => (
        <FlightDetails key={index} flightData={element} />
      ))}
    </div>
  )
}

export default FlightList
