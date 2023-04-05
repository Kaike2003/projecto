import axios from "axios"
import React, { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
  
    useEffect(() => {
      const loadingStoreData = () => {
        const storageToken = localStorage.getItem("@Auth:token");
  
        if (storageToken) {
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
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const singOut = () => {
      localStorage.clear();
      setUser(null);
      return navigate("/participante/criarContaParticipante")
    };
  
    return (
      <AuthContext.Provider
        value={{
          user,
          signIn,
          singOut,
          signed: !!user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };


// export const AutenticacaoProvider = ({ children }) => {

//     const [utilizador, setUtilizador] = useState(null)



//     const [data, setData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const response = await axios.get('http://localhost:3456/participante/listarParticipante');
//             const newData = response.data;
//             setData(newData);
//         }
//         fetchData();
//     }, []);


//     useEffect(() => {
//         const loadingStoreData = () => {
//             const storageToken = localStorage.getItem("@Autenticaco:token");

//             if (storageToken) {
//                 setUtilizador(storageToken);
//             }
//         };
//         loadingStoreData();
//     }, []);

//     const login = async ({ email, palavraPasse }) => {
//         try {
            
//             const response = await axios.post("http://localhost:3456/participante/loginParticipante",
//                 {
//                     palavraPasse: palavraPasse,
//                     email: email,
//                 })

//             console.log(response.data.token)
//             console.log(response)

//             if (response.data.error) {
//                 alert(response.data.error);
//             } else {
//                 setUtilizador(response.data);
//                 axios.defaults.headers.common[
//                     "Authorization"
//                 ] = `Bearer ${response.data.token}`;
//                 localStorage.setItem("@Autenticaco:token", response.data.token);
//             }

//         } catch (error) {
//             console.log(error);
//         }
//     };



//     return (
//         <AutenticacaoContext.Provider value={{
//             utilizador,
//             logado: !!utilizador,
//             login,
//         }}>
//             {children}
//         </AutenticacaoContext.Provider>
//     )



// } 
