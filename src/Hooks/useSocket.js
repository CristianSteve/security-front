//import { useEffect } from 'react'
/* import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.1.58:4000";
const socket = socketIOClient(ENDPOINT); */

const useSocket = (Socket) => {

/*     useEffect(() => { 
      try{
        console.log("Se cargo componenebte")
        Socket.on('nuevo', (data) => {
          console.log("llego peticion:", data);
        });
      }catch(e){
        console.log("Ocurrio un error: ", e)
      }
    }, [Socket]);  */

    const emitServo = (flag) => {
      Socket.emit('nuevo', {servo : flag});
        console.log("---> Peticion enviada..", flag);
    }

    return [ emitServo ]
}

export default useSocket
