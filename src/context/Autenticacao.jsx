import axios from "axios"
import React, { createContext, useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import swal from 'sweetalert';


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const loadingStoreData = () => {
      const storageToken = localStorage.getItem("@Auth:token");
      const storageEmail = localStorage.getItem("@Auth:email");


      if (storageToken && storageEmail) {
        setUser(storageToken);
      }
    };
    loadingStoreData();
  }, []);

  const signIn = async ({ email, palavraPasse }) => {
    try {
      const response = await axios.post("http://localhost:3456/participante/loginParticipante",
        {
          palavraPasse: palavraPasse,
          email: email,
        })

      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        console.log(response.data.token)
        localStorage.setItem("@Auth:token", response.data.token);
        localStorage.setItem("@Auth:email", JSON.stringify(response.data.usuario.email));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInOrganizador = async ({ email, palavraPasse }) => {
    try {
      const response = await axios.post("http://localhost:3456/organizador/loginOrganizador",
        {
          palavraPasse: palavraPasse,
          email: email,
        })

      swal("Login confirmado", "Seja bem vindo a reserva online de bilhete", "success");


      console.log(response)
      console.log(response.data.usuario.email)



      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        console.log(response.data.token)
        localStorage.setItem("@Auth:token", response.data.token);
        localStorage.setItem("@Auth:email", response.data.usuario.email);

      }
    } catch (error) {
      console.log(error);
      swal("Senha errada", "Verifique sua senha ou certifica-se que sua conta está autenticada.", "warning");
    }
  };

  const signInAdmin = async ({ email, palavraPasse }) => {
    try {
      const response = await axios.post("http://localhost:3456/admin/loginAdmin",
        {
          palavraPasse: palavraPasse,
          email: email,
        })

      swal("Login confirmado", "Seja bem vindo a reserva online de bilhete", "success");

      console.log(response)
      console.log(response.data.usuario.email)



      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        console.log(response.data.token)
        localStorage.setItem("@Auth:token", response.data.token);
        localStorage.setItem("@Auth:email", response.data.usuario.email);

      }
    } catch (error) {
      console.log(error)
      swal("Senha errada", "Verifique sua senha ou certifica-se que sua conta está autenticada.", "warning");
      // alert("Senha incorreta")
    }
  };

  const singOut = () => {
    localStorage.clear();
    setUser(null);
    return navigate("/reservaOnline/admin/login")
  };

  const singOutAdmin = () => {
    localStorage.clear();
    setUser(null);
    return setTimeout(() => {
      swal("Sessão terminada", "Muito obrigado por usar a aplicação. Volte sempre.", "success");
    }, 1);
    // navigate("/reservaOnline/admin/login")
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signInOrganizador,
        signInAdmin,
        singOut,
        singOutAdmin,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


