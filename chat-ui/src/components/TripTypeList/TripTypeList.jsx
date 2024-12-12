import React from 'react'
import useStore from '../../zustand/useStore'
import * as R from 'ramda'

// Define a functional component to display the list of trips
function TripList({ handleChoice }) {
  const { options, user } = useStore()

  const { tourAttractions } = options
  const { username } = user

  return R.isEmpty(tourAttractions) ? (
    <></>
  ) : (
    <div>
      <h4>Hey {username}!</h4>
      <p></p>
      <p>Ready to embark on a new adventure? 🌎</p>
      <p>
        To tailor your trip to your interests, please enter a number from the
        list below:
      </p>
      <p></p>
      <div className="container-type-list">
        {tourAttractions.map((trip) => (
          <div key={trip.id} className="card-type-list">
            <img src={trip.img_url} alt={trip.name} className="card-type-list" />
            <h3>
              {trip.id}. {trip.name}
            </h3>
            <button onClick={() =>{
              handleChoice(trip)
            }}>click Me</button>
          </div>
        ))}
      </div>
      <p></p>
      <p>Can't wait to help you plan your next getaway!</p>
    </div>
  )
}

export default TripList
