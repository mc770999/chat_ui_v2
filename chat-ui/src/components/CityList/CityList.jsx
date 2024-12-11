import React from 'react';

// Define a functional component to display the list of cities
const CityList = ({ cities }) => () => {
    
  return (
    <div className='container-city-list'>
      {cities.map((city) => (
        <div key={city.id} className='card-city-list'>
          <img src={city.url} alt={city.name} className='card-city-list' />
          <h3 className='card-city-list'>{city.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CityList