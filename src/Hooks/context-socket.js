import { createContext, useEffect, useState } from "react";
import client from "socket.io-client";
const Context = createContext({});

export function ContextSocketProvider({ children }) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        console.log("Ejecutando useSocketContext")
        const SOCKET_URI = "http://192.168.1.58:4000";
        const socketIO =  client(SOCKET_URI);

        socketIO.on('nuevo', (data) => {
            console.log("llego peticion:", data);
        });

        setContent({socketIO});
    }, [])

    
    return <Context.Provider value={{ content }}>{children}</Context.Provider>;
}

export default Context;
