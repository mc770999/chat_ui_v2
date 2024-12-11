import useStore  from "../../zustand/useStore";



const MessageList = ({ messages}) => {
  const { searchBarAtBottom } = useStore()  

  const additional_style = !searchBarAtBottom ? {} : {
    backgroundColor: '#ffffff42',
    boxShadow: '0px 0px 20px 20px #ffffff42',
    transition: "all 2s ease-in-out"
  }

    return (
      <div className="message-list" style={{...additional_style}}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-box ${message.type === "user" ? "user" : "api"}`}
          >
            {message.content && message.content}

            {message.component && <message.component/>}
          </div>
        ))}
      </div>
    );
  };

  export default MessageList


  // const MessageList = ({ messages }) => {
  //   return (
  //     <div className="message-list">
  //       {messages.map((message, index) => (
  //         <div
  //           key={index}
  //           className={`message-box ${
  //             message.type === "user" ? "user" : "api"
  //           }`}
  //         >
  //           {message.content}
  //           {message.component && message.component}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  