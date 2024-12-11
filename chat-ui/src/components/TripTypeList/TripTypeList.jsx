import React from 'react';
import { useStore } from 'zustand';
import useSearchBar from '../../hooks/useSearchBar';

// Define a functional component to display the list of trips
const TripList = ({ trips, name , handleSendApp}) => () => {

  return (
    <div>
      <h4>
      Hey {name}!
        </h4>
        <p></p>
    <p>Ready to embark on a new adventure? 🌎</p>
    <p>To tailor your trip to your interests, please enter a number from the list below:</p>
    <p></p>
    <div className='container-type-list'>
      {trips.map((trip) => (
        <div key={trip.id} className='card-type-list'>
          <img src={trip.url} alt={trip.name} className='card-type-list' />
          <h3>{trip.id}. {trip.name}</h3>
          <button onClick={() => { handleSendApp(`${trip.id}`); }}>click Me</button>
        </div>
      ))}
    </div>
    <p>Can't wait to help you plan your next getaway!</p>
    </div>
  );
};

export default TripList