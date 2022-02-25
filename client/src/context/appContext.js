import React, {   useReducer, useContext} from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
import reducer from "./reducers";

export const initialState={
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType:""
}

const AppContext = React.createContext();



export function AppProvider({children}){

    const [state, dispatch] = useReducer(reducer, initialState)
   
    const displayAlert=()=>{
        dispatch({type: DISPLAY_ALERT})
        clearAlert();
    };

    const clearAlert=()=>{
        setTimeout(()=>{
            dispatch({type: CLEAR_ALERT})

        },3000);
        
    }
    
return(
    <AppContext.Provider value={{...state, displayAlert}}>

        {children}
    </AppContext.Provider>
)
};

export function useAppContext(){
    return useContext(AppContext);
};
