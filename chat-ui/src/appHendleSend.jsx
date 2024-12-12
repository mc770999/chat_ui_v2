// import React, { useState, useCallback, useEffect } from "react";
// import ImageSlider from "./components/ImageSlider/ImageSlider";
// import SearchBar from "./components/SearchBar/SearchBar";
// import MessageList from "./components/MessageList/MessageList";
// import useStore, { ATTRACTION_STAGE } from "./zustand/useStore";
// import UsernameHandler from "./HandllerFiles/UsernameHandler"
// import tourAttractionHandler from "./HandllerFiles/TourAttractionHandler";
// import TripList from "./components/TripTypeList/TripTypeList";
// import cityHandler from "./HandllerFiles/CityHandler";
// import CityList from "./components/CityList/CityList";
// import { styled } from 'styled-components'
// import Introduction from "./components/Introdiction/Introdiction";
// import delay from "./utils/RightController";
// import useSearchBar from "./hooks/useSearchBar";
// import handleSendApp from "./appHendleSend";

// function handleSendAppComponnent () {

//  const handleSendApp = useCallback(async (userMessage) => {
//   const {
//     username,
//     setUsername,
//     setUserCity,
//     setUserType,
//     userCity,
//     userType,
//     tourAttractions ,
//     countries,
//     messages,
//     flighets,
//     addMessage,
//     setTourAttractions,
//     searchBarAtBottom,
//     setSearchBarAtBottom,
//     setCountries,
//     setflighets
//   } = useStore()

//     if (!userMessage.trim()) return;

//     if (!searchBarAtBottom) setSearchBarAtBottom(true);

//     if (!username) {
//       await delay(1000)
//       addMessage({ type: "user", content: userMessage });
//       await delay(200)
//       const Intro = Introduction({name:userMessage})
//       addMessage({ type: "api" }, Intro);
//       setUsername(userMessage)
//       return;
//     }

//     addMessage({ type: "user", content: userMessage });

//     if (tourAttractions.length == 0) {
//       await delay(200)
//       const {content} = await tourAttractionHandler(userMessage)
//       setTourAttractions(content)
//       const tripComponent = (<TripList trips={content} username={username}/>) // trip list is a componnent
//       addMessage({ type: "api"}, tripComponent); // add to ListMessage [] and ther i use <tripComponent/> that also  state
//       return;
//     }

//     if (countries.length == 0) {
//       await delay(200)
//       const {content} = await cityHandler(userMessage)
//       const cityComponent = CityList({cities:content, username, userType});
//       addMessage({ type: "api", content: userMessage }, cityComponent);
//       setCountries(content)
//       return;
//     }

//     if (flighets.length == 0) {
//       await delay(200)
//       const res = await cityHandler(userMessage)
//       const cityComponent = CityList({cities:res.content});
//       addMessage({ type: "api", content: userMessage }, cityComponent);
//       setflighets(res)
//       return;
//     }

//   }, [username, tourAttractions, countries, searchBarAtBottom, setSearchBarAtBottom, addMessage, setUsername, setTourAttractions])

//   return ( <div className="app-container">
//   <ImageSlider/>

//        <MessageList messages={messages} />

//   <SearchBar onSend={handleSendApp} />

// </div>)
// }
//   export default handleSendAppComponnent

/******************************* */

// const HandleSendAppComponent = () => {
//   const {
//     username,
//     setUsername,
//     setUserCity,
//     setUserType,
//     userCity,
//     userType,
//     tourAttractions,
//     countries,
//     messages,
//     flights,
//     addMessage,
//     setTourAttractions,
//     searchBarAtBottom,
//     setSearchBarAtBottom,
//     setCountries,
//     setFlights,
//   } = useStore();

//   const handleSendApp = useCallback(async (userMessage) => {
//     if (!userMessage.trim()) return;

//     if (!searchBarAtBottom) setSearchBarAtBottom(true);

//     if (!username) {
//       await delay(1000);
//       addMessage({ type: 'user', content: userMessage });
//       await delay(200);
//       const intro = Introduction({ name: userMessage });
//       addMessage({ type: 'api', content: intro });
//       setUsername(userMessage);
//       return;
//     }

//     addMessage({ type: 'user', content: userMessage });

//     if (tourAttractions.length === 0) {
//       await delay(200);
//       const { content } = await tourAttractionHandler(userMessage);
//       setTourAttractions(content);
//       const tripComponent = <TripList trips={content} username={username} />;
//       addMessage({ type: 'api', content: tripComponent });
//       return;
//     }

//     if (countries.length === 0) {
//       await delay(200);
//       const { content } = await cityHandler(userMessage);
//       const cityComponent = <CityList cities={content} username={username} userType={userType} />;
//       addMessage({ type: 'api', content: cityComponent });
//       setCountries(content);
//       return;
//     }

//     if (flights.length === 0) {
//       await delay(200);
//       const res = await cityHandler(userMessage);
//       const cityComponent = <CityList cities={res.content} />;
//       addMessage({ type: 'api', content: cityComponent });
//       setFlights(res.content);
//       return;
//     }
//   }, [username, tourAttractions, countries, searchBarAtBottom, addMessage, setUsername, setTourAttractions]);

//   return (
//     <div className="app-container">
//       <ImageSlider />
//       <MessageList messages={messages} />
//       <SearchBar onSend={handleSendApp} />
//     </div>
//   );
// };

import React from 'react'

import MessageList from './components/MessageList/MessageList' // Adjust path
import SearchBar from './components/SearchBar/SearchBar' // Adjust path
import ImageSlider from './components/ImageSlider/ImageSlider' // Adjust path
import useFlow from './hooks/useFlow.jsx'
import useStore from './zustand/useStore.js'

const HandleSendAppComponent = () => {
  const { handleMessage } = useFlow()
  const { messages } = useStore()

  return (
    <div className="app-container">
      <ImageSlider />
      <MessageList messages={messages} />
      <SearchBar onSend={handleMessage} />
    </div>
  )
}

export default HandleSendAppComponent
