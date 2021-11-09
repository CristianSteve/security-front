import { useCallback, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";


export const useSettings = () => {
  const [dataConf, setDataConf] = useState(null);
  const [loadingConf, setLoadingConf] = useState(true);
  const [errorConf, setErrorConf] = useState(null);
  const { user } = useAuth();

  const listConfig = useCallback( async (id) => {
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
      })
      .catch((errorConf) => {
        setErrorConf(errorConf)
        setLoadingConf(false)      
      });
  },[user.token])

  const modifySettings = useCallback( async ({...rest}) => {
    await axios
      .patch("http://192.168.1.58:4000/api/configuracion/" + rest.id,
        { ...rest},
        {headers: 
            {
                'tsec' : user.token
            }
        },
        )
      .then((data) => {
        setDataConf(data.data.data)
        setLoadingConf(false)
      })
      .catch((errorUser) => {
        setErrorConf(errorUser)
        setLoadingConf(false)
      });
  },[user.token])

  return { dataConf, loadingConf, errorConf, listConfig, modifySettings }
};