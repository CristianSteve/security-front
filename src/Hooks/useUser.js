import { useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useUser = () => {
  const [dataUser, setDataUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [errorUser, setErrorUser] = useState(null);
  const { user } = useAuth();

  const RegisterUser = async (username, email, name, password) => {
    await axios
      .post("http://192.168.1.58:4000/api/user",
        { username, email, name, password },
        {headers: 
          {
            'tsec' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNjYXJyaWxsb3NvMSIsImlhdCI6MTYzNjMwOTg4OSwiZXhwIjoxNjM2MzA5OTE5fQ.O7hodDxe2u9DTRHn7dEmtXT8DKSG-LxPZlJwc-g046I'
          }
        }, 
        )
      .then((data) => {
        setDataUser({
          dataUser: data.data.data.history,
          loadingUser: false,
          errorUser: false,
        });
      })
      .catch((errorUser) => {
        if(errorUser.response.status === 409)
          setDataUser({ dataUser: null, loadingUser: false, errorUser : errorUser.response.data.description });
        else
          setDataUser({ dataUser: null, loadingUser: false, errorUser });
      });
  };

  const createToken = async (username, password) => {
    console.log("Ejecutando createToken de useUser", {username, password})
    await axios
      .post("http://192.168.1.58:4000/api/auth/v1/createAuth",
            { username, password }
        )
      .then((data) => {
        setDataUser(data.data.data)
        setLoadingUser(false)
      })
      .catch((errorUser) => {
        setErrorUser(errorUser)
        setLoadingUser(false)
      });
  };

  const setCodeUser = async (emailReceptor, emailEmisor = "", status = true) => {
    console.log("Ejecutando email de useUser", {emailReceptor, emailEmisor, status, token : user.token})
    await axios
      .post("http://192.168.1.58:4000/api/user/code",
      { emailReceptor, emailEmisor, status },
      {headers: 
        {
          'tsec' : user.token
        }
      }
      )
      .then((data) => {
        setDataUser(data.data.data)
        setLoadingUser(false)
      })
      .catch((errorUser) => {
        setErrorUser(errorUser)
        setLoadingUser(false)
      });
  };

  return { dataUser, loadingUser, errorUser, RegisterUser, createToken, setCodeUser}
};