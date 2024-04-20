import { createContext, useReducer } from "react";
import authReducer from "./auth";

export const AdminContext = createContext();

const initState = {
    auth: {
        authed: false,
        token: null,
        userData: null,
        state: 'WAIT',
    }
}

const mainReducer = (state, action)=>{
    return{
        auth: authReducer(state.auth, action),
    }
}

export const AdminProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initState);
    return <AdminContext.Provider value={{state, dispatch}}>{children}</AdminContext.Provider>
}