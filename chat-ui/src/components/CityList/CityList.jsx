import React, { useCallback } from 'react'
import useStore from '../../zustand/useStore'
import * as R from 'ramda'
import fetchCityTypeDates from '../../FatchRequest/city_type'
import DateRangeSelector from '../datesSelectionComponent/datesSelection'

// "id": 10,
// "name": "Osaka",
// "country": "Japan",
// "population": 19281000,
// "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Osaka_skyline_from_Umeda_Sky_Building.jpg/1280px-Osaka_skyline_from_Umeda_Sky_Building.jpg",
// "wikipedia_url": "https://en.wikipedia.org/wiki/Osaka"

function CityList() {
  const { user, options, setPreferredCity, addMessage } = useStore()

  const displayOptionDates = useCallback(
    async (id) => {
      const optionalRanges = await fetchCityTypeDates(
        id,
        user.preferredAttraction.id
      )

      const handleDateSelection = ({ startDate, endDate }) => {
        alert(`Selected range: ${startDate} to ${endDate}`)
      }
      setPreferredCity(id)
      addMessage({
        type: 'api',
        content: (
          <DateRangeSelector
            optionalRanges={optionalRanges}
            onSelect={handleDateSelection}
            buttonClick={(start, end) => {}}
          />
        ),
      })
    },
    [options, user]
  )

  return R.isEmpty(user.cities) ? (
    <></>
  ) : (
    <div>
      <h4>
        {user.username}, let's narrow it down! Choose a destination that has
        {user.preferredAttraction.name} attractions to explore!
      </h4>
      <p></p>
      <p>🌍 Ready to embark on your next adventure?</p>
      <p>Pick a destination from the list below by entering its number:</p>
      <p></p>
      <div className="container-city-list">
        {options.cities.map((city) => (
          <div key={city.id} className="card-city-list">
            <img
              src={city.img_url}
              alt={city.name}
              className="card-city-list"
            />
            <h3>
              {city.id}. {city.name}
            </h3>
            <button onClick={() => displayOptionDates(city.id)}>
              click Me
            </button>
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
