import React, { useState, useCallback } from 'react'
import useStore from '../../zustand/useStore.js'
import EnterStartDate from '../EnterStartDate.jsx'
import fetchFlights from '../../FatchRequest/flight.js'
import FlightList from '../flightListComponent/flightListComponent.jsx'

const DateRangeSelector = ({ optionalRanges, buttonClick }) => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const { setUserStartDate, setUserEndDate, addMessage, user, options } =
    useStore()

  const getFlightsList = useCallback(
    async (startDate, endDate) => {
      setUserStartDate(startDate)
      setUserEndDate(endDate)
      debugger
      const response = await fetchFlights(
        user.preferredCity,
        startDate,
        endDate
      )
      addMessage({
        type: 'api',
        content: <FlightList data={response[0]?.data?.result_list} />,
      })
    },
    [options, user]
  )

  return (
    <div
      style={{
        backgroundColor: 'white',
        zIndex: '11',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '20px auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ margin: '0 0 20px 0' }}>Select a Date Range</h3>

      <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
        {optionalRanges.map((range, index) => (
          <li
            key={index}
            style={{
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <strong> {index + 1}:</strong>{' '}
            <span>{new Date(range['start date']).toDateString()} to </span>
            {new Date(range['end date']).toDateString()}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Start Date:
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            End Date:
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
            }}
          />
        </div>
      </div>

      <button
        style={{
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s',
        }}
        onClick={() => getFlightsList(startDate, endDate)}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
      >
        Submit
      </button>
    </div>
  )
}

export default DateRangeSelector
