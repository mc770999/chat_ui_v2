import { useEffect, useRef } from 'react'
import useStore from '../../zustand/useStore'

const MessageList = ({ messages }) => {
  const { searchBarAtBottom } = useStore()
  const messageListRef = useRef()

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTo(0, messageListRef.current.scrollHeight)
    }
  }, [messages])

  const additional_style = !searchBarAtBottom
    ? {}
    : {
        backgroundColor: '#ffffff42',
        boxShadow: '0px 0px 20px 20px #ffffff42',
      }

  return (
    <div
      className="message-list"
      style={{ ...additional_style }}
      ref={messageListRef}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-box ${message.type === 'user' ? 'user' : 'api'}`}
        >
          {message.content && message.content}

          {message.component && message.component}
        </div>
      ))}
    </div>
  )
}

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
