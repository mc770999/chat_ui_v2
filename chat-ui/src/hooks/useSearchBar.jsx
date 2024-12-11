import { useState } from "react"



const useSearchBar = () => {
    const [message, setMessage] = useState("")
    const [placeholderTxt, setPlaceholderTxt] = useState("Enter your name...")

    const clear = () => {
        setMessage("")
        setPlaceholderTxt("chose on of the follwing option")
    }

    const onChange = ({ target: { value} }) => {
        setMessage(value)
    }

    return {
        message,
        onChange,
        clear, 
        placeholderTxt
    }
}

export default useSearchBar