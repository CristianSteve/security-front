import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useAcceso = () => {
    const { user } = useAuth();
    const [dataAcceso, setDataAcceso] = useState([]);
    const [loadingAcceso, setLoadingAcceso] = useState(true);
    const [errorAcceso, setErrorAcceso] = useState(null);

  const findAcceso = useCallback(async () => {
    await axios
      .get(`http://192.168.1.58:4000/api/acceso`,
        {headers: 
          {
            'tsec' : user.token
          }
        })
      .then((data) => {
        console.log("Se ha consumido exitosamente findAcceso", data)
        setDataAcceso(data.data.data);
        setLoadingAcceso(false);
      })
      .catch((errorAcceso) => {
        console.log("Se ha generado un error en findAcceso", errorAcceso)
        setLoadingAcceso(false);
        if(errorAcceso?.response?.status === 409)
          setErrorAcceso(errorAcceso?.response?.data?.description);
        else
          setErrorAcceso(errorAcceso);
      });
  },[user.token]);

  const updateAcceso = async (...item) => {
    const [data] = item;
    console.log("Actualizando estado updateAcceso ", data)
    await axios
      .patch("http://192.168.1.58:4000/api/acceso/"+ data.id,
      {...data},
      {headers: 
        {
          'tsec' : user.token
        }
      })
      .then((data) => {
        console.log("Se ha consumido exitosamente updateAcceso", data)
        console.log("Actualizacion correcta", data)
      })
      .catch((errorAcceso) => {
        console.log("Se ha generado un error en updateAcceso", errorAcceso)
        setLoadingAcceso(false);
        if(errorAcceso?.response?.status === 409)
          setErrorAcceso(errorAcceso?.response?.data?.description);
        else
          setErrorAcceso(errorAcceso);
      });
  };

  useEffect(() => {
    console.log("Leyendo Acceso")
    findAcceso();
  }, [findAcceso]);
  
  return {dataAcceso, loadingAcceso, errorAcceso, findAcceso, updateAcceso}
};