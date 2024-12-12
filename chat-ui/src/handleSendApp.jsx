import React from 'react'; // Needed if you use React components in messages
// import { delay, Introduction, tourAttractionHandler, cityHandler } from './utils'; // Adjust import paths as needed
import TripList from './components/TripTypeList/TripTypeList'; // Adjust path
import CityList from './components/CityList/CityList'; // Adjust path
import FlightList from "./components/FlightList/FlightList"
import delay from './utils/RightController';
import cityHandler from './HandllerFiles/CityHandler';
import Introduction from './components/Introdiction/Introdiction';
import tourAttractionHandler from './HandllerFiles/TourAttractionHandler';

const handleSendApp = async ( userMessage,{
    username,
    setUsername,
    tourAttractions,
    countries,
    flights,
    setTourAttractions,
    setCountries,
    setFlights,
    searchBarAtBottom,
    setSearchBarAtBottom,
    addMessage,
    userType,
  }) => {
  if (!userMessage.trim()) return;

  if (!searchBarAtBottom) setSearchBarAtBottom(true);

  if (!username) {
    await delay(1000);
    addMessage({ type: 'user', content: userMessage });
    await delay(200);
    const intro = Introduction({ name: userMessage });
    addMessage({ type: 'api', content: intro });
    setUsername(userMessage);
    return;
  }

  addMessage({ type: 'user', content: userMessage });

  if (tourAttractions.length === 0) {
    await delay(200);
    const { content } = await tourAttractionHandler(userMessage);
    setTourAttractions(content);
    const tripComponent = <TripList trips={content} username={username} />;
    addMessage({ type: 'api', content: tripComponent });
    return;
  }

  if (countries.length === 0) {
    await delay(200);
    const { content } = await cityHandler(userMessage);
    const cityComponent = <CityList cities={content} username={username} userType={userType} />;
    addMessage({ type: 'api', content: cityComponent });
    setCountries(content);
    return;
  }

  if (flights.length === 0) {
    await delay(200);
    const res = await cityHandler(userMessage);
    const flightComponent = <FlightList trips={content} username={username}  />;
    addMessage({ type: 'api', content: flightComponent });
    setFlights(res.content);
    return;
  }
};

export default handleSendApp;
