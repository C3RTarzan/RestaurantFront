import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext()

const UserProvider = ({children}) => {

    const {authenticated, register, logout, login, googleAuth} = useAuth()

    localStorage.setItem('Auth', authenticated);
    
    return(
        <Context.Provider value={{ login }}>
            {children}
        </Context.Provider>
    )

}
export{Context, UserProvider}