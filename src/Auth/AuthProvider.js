import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();


const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    )
    console.log("--->valor de cookie en AuthProvide");

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))
    }, [user])

    const contextValue = {
        user,
        login({...rest}){
            const date = new Date();
            const fecha = date.setSeconds(3600);
            setUser({...rest, fecha})
        },
        logout(){
            setUser(null)
        },
        isLogged(){
            const dateNow = new Date();
            const dateAuth = new Date(user?.fecha || 0);

            if(dateAuth.getTime() < dateNow.getTime())
                return false

            return !!user
        }
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
};

export default AuthProvider

