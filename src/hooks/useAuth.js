// import { useState, useEffect } from "react";
// import callApi from "./callApi";

// const useAuth = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const login = async (email, password) => {
//     try {
//       const formData = new FormData();
//       formData.append("email", email);
//       formData.append("password", password);

//       const response = await callApi(`utente/accedi`, "POST", formData);

//       if (!response.ok) {
//         setError(true); // TODO fix this
//         throw new Error("Errore durante il login: " + response.status);
//       }

//       const data = await response.json();
//       const token = data.body.token;

//       localStorage.setItem("token", token);
//       setIsLoggedIn(true);
//       window.location.href = "/";
//     } catch (error) {
//       setError(true); // Imposta l'errore in caso di eccezione
//       console.error("Errore durante il login:", error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/login";
//   };

//   return { isLoggedIn, login, logout, error };
// };

// export default useAuth;


import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Funzione per effettuare il login dell'utente
  const login = (username, password) => {
    // Simuliamo una chiamata asincrona al backend per verificare le credenziali
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        setUser({ username });
        setError(null);
      } else {
        setError('Username o password non validi');
      }
    }, 1000);
  };

  // Funzione per effettuare il logout dell'utente
  const logout = () => {
    setUser(null);
  };

  // Funzione per verificare se l'utente è autenticato
  const isAuthenticated = () => {
    return user !== null;
  };

  return { user, error, login, logout, isAuthenticated };
};

export default useAuth;
