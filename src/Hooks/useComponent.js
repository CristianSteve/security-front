import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useComponent = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const findComponent = useCallback(async () => {
    await axios
      .get("http://192.168.1.58:4000/api/component",
      {headers: 
        {
          'tsec' :  user.token
        }
      },) 
      .then((data) => {
        console.log("Se ha consumido exitosamente findComponent", data)
        setData(data.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Se ha generado un error en findComponent", error)
        if(error?.response?.status === 409)
          setIsError(error?.response?.data?.description);
        else
          setIsError(error);
      });
  },[user.token]);

  const createComponent = useCallback(async (...rest) => {
    console.log("Creando componente useComponent" , ...rest)
    await axios
      .post("http://192.168.1.58:4000/api/component",
      ...rest,
      {headers: 
      {
        'tsec' : user.token
      }
      })
      .then((data) => {
        setData(data.data.data);
      })
      .catch((error) => {
        if(error?.response?.status === 409)
          setIsError(error?.response?.data?.description);
        else
          setIsError(error);
      })
  },[user.token]);

  const updateComponent = async (...item) => {
    const [data] = item;
    console.log(data)
    console.log("Actualizando estado updateComponent ", data.id)
    await axios
      .patch("http://192.168.1.58:4000/api/component/"+ data.id,
      {...data},
      {headers: 
        {
          'tsec' : user.token
        }
      })
      .then((data) => {
        console.log("Actualizacion correcta", data)
      })
      .catch((error) => {
        if(error?.response?.status === 409)
          setIsError(error?.response?.data?.description);
        else
          setIsError(error);
      });
  };

  useEffect(() => {
    findComponent();
  }, [findComponent]);

  return {data, loading, isError, findComponent, createComponent, updateComponent}
};