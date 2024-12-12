import { useState } from "react";
import useSearchBar from "../../hooks/useSearchBar";
import useStore from "../../zustand/useStore";
import classes from './search.module.css'

const SearchBar = ({ onSend }) => {
    const {placeholderTxt, message, clear, onChange} = useSearchBar()
    const {searchBarAtBottom} = useStore()

    
    const handleSend =() =>{
      clear()
      onSend(message)

    }


    const additional_style = !searchBarAtBottom ? {} : {
      backgroundColor: '#ffffff42',
      bottom: "0%",
      padding: "15px",
      zIndex: '10',
      borderRadius: "30px 30px 0px 0px",
      color: "#ffffff",
      backgroundColor: "#f5f5f5",
      transform: "translateX(-50%)",
      transition: "all 2s ease-in-out"

    }

    
    
    return (
      <div
          className={`search-bar-container`} style={{...additional_style}}
        >
        <div className="search-bar">
          <input 
            type="text"
            value={message}
            onChange={onChange}
            placeholder={placeholderTxt}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    );
  };

export default SearchBar
  