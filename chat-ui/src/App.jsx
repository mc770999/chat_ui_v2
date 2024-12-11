

import React, { useState, useCallback, useEffect } from "react";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import SearchBar from "./components/SearchBar/SearchBar";
import MessageList from "./components/MessageList/MessageList";
import useStore, { ATTRACTION_STAGE } from "./zustand/useStore";
import UsernameHandler from "./HandllerFiles/UsernameHandler"
import tourAttractionHandler from "./HandllerFiles/TourAttractionHandler";
import TripList from "./components/TripTypeList/TripTypeList";
import cityHandler from "./HandllerFiles/CityHandler";
import CityList from "./components/CityList/CityList";
import { styled } from 'styled-components'
import Introduction from "./components/Introdiction/Introdiction";
import delay from "./utils/RightController";
import useSearchBar from "./hooks/useSearchBar";


const App = () => {
  const {
    username, 
    setUsername, 
    tourAttractions , 
    countries, 
    messages, 
    addMessage, 
    setTourAttractions,
    searchBarAtBottom, 
    setSearchBarAtBottom
  } = useStore()



  const handleSendApp = useCallback(async (userMessage) => {
    if (!userMessage.trim()) return;

    if (!searchBarAtBottom) setSearchBarAtBottom(true);
    
    
    if (!username) {
      await delay(2000)
      addMessage({ type: "user", content: userMessage });
      await delay(500)
      const Intro = Introduction({name:userMessage})
      addMessage({ type: "api" }, Intro);    
      setUsername(userMessage)
      return;
    }

    addMessage({ type: "user", content: userMessage });
    
    if (tourAttractions.length == 0) {
      await delay(500)
      const res = await tourAttractionHandler(userMessage) 
      setTourAttractions(res)
      const tripComponent = TripList({trips:res.content, }); 
      addMessage({ type: "api", content: userMessage }, tripComponent);
      return;
    }



    if (countries.length == 0) {
      await delay(500)
      const res = await cityHandler(userMessage) 
      const cityComponent = CityList({cities:res.content}); 
      addMessage({ type: "api", content: userMessage }, cityComponent);
      setTourAttractions(res)
      return;
    }


  
  }, [username, tourAttractions, countries, searchBarAtBottom])


  return (

    <div className="app-container">
        <ImageSlider/>
    
        <MessageList messages={messages} />
        
          <SearchBar onSend={handleSendApp} />
        
      </div>

  );
};



export default App;






















// const Box = styled.div`
//   width: 10rem;
//   height: 10rem;
//   border: 1px solid red;
//   background-color: ${({ enosh }) => enosh.length > 2 ? "red" : "green" }
//   box-shadow: 0 0 2px 4px ${({ error }) => error ? 'red' : 'grey'};

//   &:hover {
//     cursor: pointer;
//     background: rgba(0, 0, 0, 0.2);
//   }

//   img {

//   }
// `

// const Enosh = styled(Box)`
//   border-radius: 50%;
// `
