import React ,{useState} from 'react';

export const appContext = React.createContext()

export default function ContextProvider(props){
    let [authStatus,setAuthStatus] = useState(false);

    return(
        <appContext.Provider value={[authStatus,setAuthStatus]}>
            {props.children}
        </appContext.Provider>
    )
}