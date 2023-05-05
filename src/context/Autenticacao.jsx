import axios from "axios"
import React, { createContext, useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import Swal from "sweetalert2"

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


  const signInParticipante = async ({ email, palavraPasse }) => {
    try {
      const response = await axios.post("http://localhost:3456/participante/loginParticipante",
        {
          palavraPasse: palavraPasse,
          email: email,
        })


      Swal.fire({
        icon: 'success',
        title: 'Login confirmado',
        html: "Seja bem vindo a Venda online de bilhetes.",
        showConfirmButton: false,
        timer: 3500
      })


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

      Swal.fire({
        icon: 'warning',
        title: 'Senha errada',
        html: "Verifique sua senha ou certifica-se que sua conta está autenticada.",
        showConfirmButton: false,
        timer: 3500
      })

    }
  };


  const signInOrganizador = async ({ email, palavraPasse }) => {
    try {
      const response = await axios.post("http://localhost:3456/organizador/loginOrganizador",
        {
          palavraPasse: palavraPasse,
          email: email,
        })


      Swal.fire({
        icon: 'success',
        title: 'Login confirmado',
        html: "Seja bem vindo a Venda online de bilhetes.",
        showConfirmButton: false,
        timer: 3500
      })



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
      Swal.fire({
        icon: 'warning',
        title: 'Senha errada',
        html: "Verifique sua senha ou certifica-se que sua conta está autenticada.",
        showConfirmButton: false,
        timer: 3500
      })

    }
  };

  const signInAdmin = async ({ email, palavraPasse }) => {
    try {
      const response = await axios.post("http://localhost:3456/admin/loginAdmin",
        {
          palavraPasse: palavraPasse,
          email: email,
        })


      Swal.fire({
        icon: 'success',
        title: 'Login confirmado',
        html: "Seja bem vindo a Venda online de bilhetes.",
        showConfirmButton: false,
        timer: 3500
      })


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

      Swal.fire({
        icon: 'warning',
        title: 'Senha errada',
        html: "Verifique sua senha ou certifica-se que sua conta está autenticada.",
        showConfirmButton: false,
        timer: 4500
      })

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

    Swal.fire({
      icon: 'warning',
      title: 'Sessão terminada',
      html: "Muito obrigado por usar a aplicação. Volte sempre.",
      showConfirmButton: false,
      timer: 4500
    })
    // navigate("/reservaOnline/admin/login")
  };

  const singOutParticpante = () => {
    localStorage.clear();
    setUser(null);

    Swal.fire({
      icon: 'warning',
      title: 'Sessão terminada',
      html: "Muito obrigado por usar a aplicação. Volte sempre.",
      showConfirmButton: false,
      timer: 4500
    })
    // navigate("/reservaOnline/admin/login")
  };

  const singOutOrganizador = () => {
    localStorage.clear();
    setUser(null);
    Swal.fire({
      icon: 'success',
      title: 'Sessão terminada',
      html: "Muito obrigado por usar a aplicação. Volte sempre..",
      showConfirmButton: false,
      timer: 3500
    })
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        signInParticipante,
        signInOrganizador,
        signInAdmin,
        singOutOrganizador,
        singOutParticpante,

        singOut,
        singOutAdmin,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


