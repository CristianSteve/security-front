import { useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useCode = () => {
    const { user } = useAuth();
    const [dataCodigo, setDataCodigo] = useState(null);
    const [loadingCodigo, setLoadingCodigo] = useState(true);
    const [errorCodigo, setErrorCodigo] = useState(null);

  const findCodigo = async (code) => {
    resetValues();
    await axios
      .get(`http://192.168.1.58:4000/api/code/${code}`)
      .then((data) => {
        console.log("Se ha consumido exitosamente findCodigo", data)
        setDataCodigo(data.data.data);
        setLoadingCodigo(false);
      })
      .catch((errorCodigo) => { 
        console.log("Se ha generado un error en findCodigo", errorCodigo.response)
        setLoadingCodigo(false);
        if(errorCodigo?.response?.status === 409)
          setErrorCodigo(errorCodigo?.response?.data?.data?.description);
        else
          setErrorCodigo(errorCodigo);
      });
  };

  const setCodeUser = async ({emailReceptor, emailEmisor = "", status = true, area = ""}) => {
    await axios
      .post("http://192.168.1.58:4000/api/code",
      { emailReceptor, emailEmisor, status, area, idUserFrom : user.id},
      {headers: 
        {
          'tsec' : user.token
        }
      }
      )
      .then((data) => {
        setDataCodigo(data.data.data)
        setLoadingCodigo(false)
      })
      .catch((errorUser) => {
        setErrorCodigo(errorUser)
        setLoadingCodigo(false)
      });
  };
  
  const resetValues = () => {
    setDataCodigo(null);
    setLoadingCodigo(true);
    setErrorCodigo(null);
  }

  return {dataCodigo, loadingCodigo, errorCodigo, findCodigo, setCodeUser, resetValues}
};