import React, { useEffect } from 'react'
import useStore from '../../zustand/useStore'
import * as R from 'ramda'

// "id": 10,
// "name": "Osaka",
// "country": "Japan",
// "population": 19281000,
// "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Osaka_skyline_from_Umeda_Sky_Building.jpg/1280px-Osaka_skyline_from_Umeda_Sky_Building.jpg",
// "wikipedia_url": "https://en.wikipedia.org/wiki/Osaka"

function CityList({ handleChoice }) {
  const {
    user: { username, preferredAttraction, preferredCity },
    options: { cities },
  } = useStore()

  /**
 *  {
        "country_id": 10,
        "id": 19,
        "img_url": "https://res-1.cloudinary.com/gorealtravel/image/upload/,f_auto,fl_lossy,q_auto,w_1910,h_1176/v1563889832/production/marketing/city/5d3181c870428e0008e0845c/city_main_image/BANGKOK.webp",
        "name": "Bangkok",
        "wiki_page": "https://en.wikipedia.org/wiki/Bangkok"
    },
 */

  return R.isEmpty(cities) ? (
    <></>
  ) : (
    <div>
      <h4>
        {username}, let's narrow it down! Choose a destination that has
        {preferredAttraction.name} attractions to explore!
      </h4>
      <p></p>
      <p>🌍 Ready to embark on your next adventure?</p>
      <p>Pick a destination from the list below by entering its number:</p>
      <p></p>
      <div className="container-city-list">
        {cities.map((city) => (
          <div key={city.id} className="card-city-list">
            <img
              src={city.img_url}
              alt={city.name}
              className="card-city-list"
            />
            <h3>
              {city.id}. {city.name}
            </h3>
            <button onClick={() => handleChoice(city.id)}>click Me</button>
            <a href={city.wiki_page} target="_blank">
              <button className="">For more info, click me</button>
            </a>
          </div>
        ))}
      </div>
      <p></p>
      <p>🌟 Can't wait to help you start your journey!</p>
    </div>
  )
}

export default CityList
