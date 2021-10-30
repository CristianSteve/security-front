import { createContext, useEffect, useState } from "react";
import client from 'socket.io-client'
const Context = createContext({});

export function ContextSocketProvider({children}){
    const [Socket, setSocket] = useState(null);

    useEffect(() => {
        const SOCKET_URI = "http://192.168.1.58:4000";
        const socketIO = client(SOCKET_URI);
        setSocket(socketIO);
    }, []);

    return <Context.Provider value={{Socket}}>{children}</Context.Provider>
}

export default Context;