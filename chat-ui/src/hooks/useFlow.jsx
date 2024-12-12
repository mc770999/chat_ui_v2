import { useCallback, useEffect, useState } from 'react'
import useStore from '../zustand/useStore'
import * as R from 'ramda'
import { trips } from '../HandllerFiles/TourAttractionHandler'
import { cities } from '../HandllerFiles/CityHandler'
import Introduction from '../components/Introdiction/Introdiction'
import TripList from '../components/TripTypeList/TripTypeList'
import CityList from '../components/CityList/CityList'
import EnterStartDate, { EnterEndDate } from '../components/EnterStartDate'
import DateRangeSelector from '../components/datesSelectionComponent/datesSelection'
import fetchAllTypes from '../FatchRequest/type'
import fetchCitiesByType from '../FatchRequest/city'
import fetchCityTypeDates from '../FatchRequest/city_type'

const useFlow = () => {
  const {
    user,
    options,
    addMessage,
    searchBarAtBottom,
    setSearchBarAtBottom,
    setUsername,
    setUserStartDate,
    setUserEndDate,
    setPreferredAttraction,
    setPreferredCity,
    setOptionsTourAttraction,
    setOptionsCities,
  } = useStore()

  const handleMessage = useCallback(
    async (userMessage) => {
      // const [cityId, setCityId] = useState("")
      // const [typeId, setTypeId] = useState("")

      if (!searchBarAtBottom) {
        setSearchBarAtBottom(true)
      }

      if (R.isEmpty(userMessage)) {
        return
      }

      addMessage({ type: 'user', content: userMessage })

      const { username, preferredCity, preferredAttraction } = user
      const { tourAttractions, cities } = options

      if (!username) {
        handleUsername(userMessage)
        return
      }
      // TODO:// preferred
      if (R.isEmpty(tourAttractions)) {
        await handleTourAttraction()
        return
      }

      if (R.isEmpty(cities)) {
        await handleCities()
        return
      }
      if (user.startDate == undefined) {
        saveStartDate(userMessage)
        return
      }
      if (user.endDate == undefined) {
        saveEndDate(userMessage)
        return
      }
    },
    [user, options]
  )

  const handleUsername = useCallback(
    (userMessage) => {
      setUsername(userMessage)
      addMessage({
        type: 'api',
        content: Introduction({ name: userMessage }),
      })
    },
    [user]
  )

  const handleTourAttraction = useCallback(async () => {
    const trips = await fetchAllTypes()
    setOptionsTourAttraction(trips)
    addMessage({
      type: 'api',
      content: <TripList />,
    })
  }, [options, user])

  const handleCities = useCallback(
    async (trip) => {
      debugger
      setPreferredAttraction(trip)
      const cities = await fetchCitiesByType(trip.id)
      setOptionsCities(cities)
      addMessage({
        type: 'api',
        content: <CityList />,
      })
    },
    [options, user]
  )

  const getFlightsList = useCallback(
    async ({ startDate, endDate }) => {
      setUserStartDate(startDate)
      setUserEndDate(endDate)
      addMessage({
        type: 'api',
        content: <EnterStartDate />,
      })
    },
    [options, user]
  )

  const saveStartDate = useCallback(
    async (userMessage) => {
      setUserStartDate(userMessage)
      addMessage({
        type: 'api',
        content: <EnterEndDate />,
      })
    },
    [options, user]
  )

  const saveEndDate = useCallback(
    async (userMessage) => {
      // setOptions({ ...options, cities: cities })
      setUserEndDate(userMessage)
      addMessage({
        type: 'api',
      })
    },
    [options, user]
  )

  return {
    handleMessage,
  }
}

export default useFlow
