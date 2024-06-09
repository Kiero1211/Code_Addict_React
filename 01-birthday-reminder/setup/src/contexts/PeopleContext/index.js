import { createContext } from "react";
import data from "../../constants/data";

const peopleContext = createContext(data);

function PeopleProvider({ children }) {
    return (
        <peopleContext.Provider value={data}>
            {children}
        </peopleContext.Provider>
    )
}

export {PeopleProvider, peopleContext}