import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useTypeComponent = () => {
  const { user } = useAuth();
  const [dataType, setDataType] = useState([]);
  const [loadingType, setLoadingType] = useState(true);
  const [isErrorType, setIsErrorType] = useState(false);

  const findTypeComponent = useCallback(async () => {
    await axios
      .get("http://192.168.1.58:4000/api/tipoComponente",
      {headers: 
        {
          'tsec' :  user.token
        }
      },) 
      .then((data) => {
        console.log("Se ha consumido exitosamente findTypeComponent", data)
        setDataType(data.data.data);
        setLoadingType(false);
      })
      .catch((error) => {
        console.log("Se ha generado un error en findTypeComponent", error)
        if(error?.response?.status === 409)
          setIsErrorType(error?.response?.data?.description);
        else
          setIsErrorType(error);
      });
  },[user.token]);

  const createTypeComponent = async (nombre, descripcion, status) => {
    await axios
      .post("http://192.168.1.58:4000/api/tipoComponente",
      { nombre, descripcion, status },
      {headers: 
      {
        'tsec' : user.token
      }
      })
      .then((data) => {
        setDataType(data.data.data);
      })
      .catch((error) => {
        if(error?.response?.status === 409)
          setIsErrorType(error?.response?.data?.description);
        else
          setIsErrorType(error);
      })
  };

  const updateTypeComponent = async (...item) => {
    const [data] = item;
    console.log(data)
    console.log("Actualizando estado updateTypeComponent ", data.id)
    await axios
      .patch("http://192.168.1.58:4000/api/tipoComponente/"+ data.id,
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
          setIsErrorType(error?.response?.data?.description);
        else
          setIsErrorType(error);
      });
  };

  useEffect(() => {
    findTypeComponent();
  }, [findTypeComponent]);

  return {dataType, loadingType, isErrorType, findTypeComponent, createTypeComponent, updateTypeComponent}
};