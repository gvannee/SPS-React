import { createContext, useContext, useEffect, useState } from "react";

export const DataLength = createContext();

export const DataLengthProvider = ({children}) => {
    const [countClick, setCountClick] = useState(0)

    const handleClick = () => {
        setCountClick(countClick + 1)
    }

   

    return (<DataLength.Provider value={(countClick, handleClick)}>
        {children}
    </DataLength.Provider>)
}