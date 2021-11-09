import { useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";


export const useSettings = () => {
  const [dataConf, setDataConf] = useState(null);
  const [loadingConf, setLoadingConf] = useState(true);
  const [errorConf, setErrorConf] = useState(null);
  const { user } = useAuth();

  const listConfig = async (id) => {
    console.log("Ejecutando get de useSettings " + id)
    await axios
      .get("http://192.168.1.58:4000/api/configuracion/" + id,
        {headers: 
          {
            'tsec' : user.token
          }
        }, 
        )
      .then((data) => {
        setDataConf(data.data.data)
        setLoadingConf(false)
        console.log(data.data.data)
      })
      .catch((errorConf) => {
        setErrorConf(errorConf)
        setLoadingConf(false)      
      });
  };

  const modifySettings = async ({...rest}, id ) => {
    console.log("Ejecutando path de useSettings", {...rest})
    await axios
      .patch("http://192.168.1.58:4000/api/configuracion/" + id,
        {headers: 
            {
                'tsec' : user.token
            }
        },
        { ...rest}
        )
      .then((data) => {
        setDataConf(data.data.data)
        setLoadingConf(false)
      })
      .catch((errorUser) => {
        setErrorConf(errorUser)
        setLoadingConf(false)
      });
  };

  return { dataConf, loadingConf, errorConf, listConfig, modifySettings }
};