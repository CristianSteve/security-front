import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useArea = () => {
    const { user } = useAuth();
    const [dataArea, setDataArea] = useState([]);
    const [loadingArea, setLoadingArea] = useState(true);
    const [errorArea, setErrorArea] = useState(null);

  const findArea = useCallback(async () => {
    await axios
      .get(`http://192.168.1.58:4000/api/area`,
        {headers: 
          {
            'tsec' : user.token
          }
        })
      .then((data) => {
        console.log("Se ha consumido exitosamente findArea", data)
        setDataArea(data.data.data);
        setLoadingArea(false);
      })
      .catch((errorArea) => {
        console.log("Se ha generado un error en findArea", errorArea)
        setLoadingArea(false);
        if(errorArea?.response?.status === 409)
          setErrorArea(errorArea?.response?.data?.description);
        else
          setErrorArea(errorArea);
      });
  },[user.token]);

  useEffect(() => {
    console.log("Leyendo Area")
    findArea();
  }, [findArea]);
  
  return {dataArea, loadingArea, errorArea, findArea}
};