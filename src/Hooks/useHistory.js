import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useHistory = () => {
  const { user } = useAuth();
  const [response, setResponse] = useState({
    dataH: [],
    loadingH: true,
    errorH: null,
  });

  const findHistory = useCallback(async ({date = "", type = ""}) => {
    console.log({date, type})
    await axios
      .get(`http://192.168.1.58:4000/api/history?date=${date}&type=${type}`,
        {headers: 
          {
            'tsec' : user.token
          }
        })
      .then((data) => {
        console.log("Se ha consumido exitosamente findHistory", data)
        setResponse({
          dataH: data.data.data.history,
          loadingH: false,
          errorH: null,
        });
      })
      .catch((errorH) => {
        console.log("Se ha generado un error en findHistory", errorH)
        if(errorH?.response?.status === 409)
          setResponse({ dataH: null, loadingH: false, errorH : errorH?.response?.data?.description });
        else
          setResponse({ dataH: null, loadingH: false, errorH });
      });
  },[user.token]);

  useEffect(() => {
    console.log("Leyendo historial")
    findHistory({});
  }, [findHistory]);
  
  return {response, findHistory}
};