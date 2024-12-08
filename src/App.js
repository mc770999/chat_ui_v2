

import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "..\\public\\MC_P0716.jpg",  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="image-slider">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="fade-in-out"
        />
    </div>
  );
}
// 

// import { useSpring, animated } from 'react-spring';

// function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1647977404.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
//           "https://us.123rf.com/450wm/olehphotographer/olehphotographer1808/olehphotographer180800013/108459899-coucher-de-soleil-sur-la-mer-d-%C3%A9t%C3%A9-pique-nique-romantique-sur-la-plage-bouteille-de-vin-verres.jpg",
//           "https://www.shutterstock.com/image-photo/beautiful-beach-white-sand-turquoise-600nw-1555331360.jpg",
//           "https://media.istockphoto.com/id/175515475/photo/mountains.jpg?s=612x612&w=0&k=20&c=e0TxdqpmQxgSYoHiB6F6x-SLsLbIeW7yM3weSBNyZ5U=",
//   ];

//   const props = useSpring({
//     opacity: 1,
//     from: { opacity: 0 },
//     config: { duration: 1000 },
//   });

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((currentIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, [images]);

//   return (
//     <div className="image-slider">
//       <animated.img
//         style={props}
//         src={images[currentIndex]}
//         alt={`Image ${currentIndex + 1}`}
//       />
//     </div>
//   );
// }





const SearchBar = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-box ${message.type === "user" ? "user" : "api"}`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = useState([]);
  const [searchBarAtBottom, setSearchBarAtBottom] = useState(false);

  const handleSend = async (userMessage) => {
    if (!userMessage.trim()) return;

    if (!searchBarAtBottom) setSearchBarAtBottom(true);

    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);

    try {
      const response = await fetch("https://api.example.com/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { type: "api", content: data.response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "api", content: "Error fetching response" },
      ]);
    }
  };

  return (

    <div className="app-container">
        <ImageSlider/>
    
        <MessageList messages={messages} />
        <div
          className={`search-bar-container ${
            searchBarAtBottom ? "at-bottom" : ""
          }`}
        >
          <SearchBar onSend={handleSend} />
        </div>
      </div>

  );
};

export default App;



/*****************
 * 
 * 
 * const SearchBar = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-box ${message.type === "user" ? "user" : "api"}`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = useState([]);
  const [searchBarAtBottom, setSearchBarAtBottom] = useState(false);

  // Background images array
  const images = [
      "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1647977404.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
      "https://us.123rf.com/450wm/olehphotographer/olehphotographer1808/olehphotographer180800013/108459899-coucher-de-soleil-sur-la-mer-d-%C3%A9t%C3%A9-pique-nique-romantique-sur-la-plage-bouteille-de-vin-verres.jpg",
      "https://www.shutterstock.com/image-photo/beautiful-beach-white-sand-turquoise-600nw-1555331360.jpg",
      "https://media.istockphoto.com/id/175515475/photo/mountains.jpg?s=612x612&w=0&k=20&c=e0TxdqpmQxgSYoHiB6F6x-SLsLbIeW7yM3weSBNyZ5U=",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState((currentImageIndex + 1) % images.length);

  // Change image every 8 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(nextImageIndex);
      setNextImageIndex((nextImageIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [nextImageIndex]);

  const handleSend = async (userMessage) => {
    if (!userMessage.trim()) return;

    if (!searchBarAtBottom) setSearchBarAtBottom(true);

    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);

    try {
      const response = await fetch("https://api.example.com/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { type: "api", content: data.response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "api", content: "Error fetching response" },
      ]);
    }
  };

  return (
    <div className="app-container">
      <div className="background-images">
        <div
          className={`background-image active`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
        <div
          className={`background-image next`}
          style={{ backgroundImage: `url(${images[nextImageIndex]})` }}
        ></div>
      </div>

      <MessageList messages={messages} />
      <div
        className={`search-bar-container ${searchBarAtBottom ? "at-bottom" : ""}`}
      >
        <SearchBar onSend={handleSend} />
      </div>
    </div>
  );
};

export default App;
 */










