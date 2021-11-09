import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useHistory = () => {
  const { user } = useAuth();
  const [response, setResponse] = useState({
    dataH: [],
    loadingH: true,
    errorH: null,
  });

  useEffect(() => {
    const token = user.token
    findHistory(token);
  }, [user.token]);


  const findHistory = async (token) => {
    await axios
      .get("http://192.168.1.58:4000/api/history",
        {headers: 
          {
            'tsec' : token
          }
        })
      .then((data) => {
        setResponse({
          dataH: data.data.data.history,
          loadingH: false,
          errorH: null,
        });
      })
      .catch((errorH) => {
        if(errorH.response.status === 409)
          setResponse({ dataH: null, loadingH: false, errorH : errorH.response.data.description });
        else
          setResponse({ dataH: null, loadingH: false, errorH });
      });
  };

  return {response, findHistory}
};