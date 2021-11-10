import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useComponent = () => {
  const { user } = useAuth();
  const [response, setResponse] = useState({
    data: [],
    loading: true,
    isError: false,
  });

  useEffect(() => {
    const token = user.token
    findComponent(token);
  }, [user.token]);


  const findComponent = async (token) => {
    await axios
      .get("http://192.168.1.58:4000/api/component",
      {headers: 
        {
          'tsec' :  token
        }
      },) 
      .then((data) => {
        console.log("Se ha consumido exitosamente findComponent", data)
        setResponse({
          data : data.data.data,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        console.log("Se ha generado un error en findComponent", error)
        if(error?.response?.status === 409)
          setResponse({ dataH: null, loading: false, error : error?.response?.data?.description });
        else
          setResponse({ dataH: null, loading: false, error });
      });
  };

  const createComponent = async (nombre, descripcion, status) => {
    await axios
      .post("http://192.168.1.58:4000/api/component",
      {headers: 
      {
        'tsec' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNjYXJyaWxsb3NvMSIsImlhdCI6MTYzNjMwOTg4OSwiZXhwIjoxNjM2MzA5OTE5fQ.O7hodDxe2u9DTRHn7dEmtXT8DKSG-LxPZlJwc-g046I'
      }
    }, 
    {body: 
        {
          nombre,
          descripcion,
          status
        }
    })
      .then((data) => {
        setResponse({
          data : data.data.data,
          loading: false,
          error: null,
        });
      })
      .catch((error) => {
        if(error.response.status === 409)
          setResponse({ dataH: null, loading: false, error : error?.response?.data?.description });
        else
          setResponse({ dataH: null, loading: false, error });
      });
  };

  return {response, findComponent, createComponent}
};