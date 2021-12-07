import { useCallback, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth";

export const useUser = () => {
  const [ dataUser, setDataUser ] = useState(null);
  const [ loadingUser, setLoadingUser ] = useState(true);
  const [ errorUser, setErrorUser ] = useState(null);
  const { user } = useAuth();

  const RegisterUser = useCallback(async (...values) => {
    console.log("creando...", ...values)
    await axios
      .post("http://192.168.1.58:4000/api/user",
        ...values,
      )
      .then((data) => {
        setDataUser({
          dataUser: data.data.data.history,
          loadingUser: false,
          errorUser: false,
        });
      })
      .catch((errorUser) => {
        if(errorUser?.response?.status === 409)
          setDataUser({ dataUser: null, loadingUser: false, errorUser : errorUser?.response?.data?.description });
        else
          setDataUser({ dataUser: null, loadingUser: false, errorUser });
      });
  },[]);

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

  const listUsers = useCallback(async (id) => {
    console.log("Ejecutando listUsers", id)
    await axios
      .get(`http://192.168.1.58:4000/api/user/${id}`,{headers:{'tsec': user.token}})
      .then((data) => {
        setDataUser(data.data.data)
        setLoadingUser(false)
      })
      .catch((errorUser) => {
        setErrorUser(errorUser)
        setLoadingUser(false)
      });
  },[user?.token]);

  const updateUser = useCallback(async ({...dUser}) => {
    console.log("Ejecutando updateUser", dUser.id)
    await axios
      .patch(`http://192.168.1.58:4000/api/user/${dUser.id}`,{...dUser},{headers:{'tsec': user.token}})
      .then((data) => {
        setDataUser(data.data.data)
        setLoadingUser(false)
      })
      .catch((errorUser) => {
        setErrorUser(errorUser)
        setLoadingUser(false)
      });
  },[user?.token]);

  return { dataUser, loadingUser, errorUser, RegisterUser, createToken, listUsers, updateUser }
};