import { useCallback, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useComponent = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const findComponent = useCallback(async (idAcceso) => {
    console.log("consultando acceso en components: ", idAcceso)
    await axios
      .get(`http://192.168.1.58:4000/api/component?acceso=${idAcceso}`,
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

  const updateComponent = async ({idItem, idAcceso}) => {
    console.log("Actualizando estado updateComponent ", idItem)
    await axios
      .patch("http://192.168.1.58:4000/api/component/access/"+ idItem,
      {idAcceso},
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

  return {data, loading, isError, findComponent, createComponent, updateComponent}
};