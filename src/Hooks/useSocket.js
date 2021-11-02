//import { useEffect } from 'react'

const useSocket = (Socket = {}) => {

/*      useEffect(() => { 
      try{
        Socket.on('nuevo', (data) => {
          console.log("llego peticion:", data);
        });
        console.log(Socket.connected);
      }catch(e){
        console.log("Ocurrio un error: ", e)
      }
    }, [Socket]);   */

    const emitServo = (flag) => {
      Socket.emit('nuevo', {servo : flag});
        console.log("---> Peticion enviada..", flag);
    }

    return [ emitServo ]
}

export default useSocket
