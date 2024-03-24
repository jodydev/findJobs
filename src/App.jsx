import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import supabase from "./supabase/client";
import useAuth from "./hooks/useAuth";
import AppContext from "./contexts/AppContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Routing from "./routes/Routing";
import Register from "./pages/Register";

export function App() {
  const { session, signIn, signUp, signOut } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/accedi" element={<Login onLogin={signIn} />} />
        <Route path="/registrati" element={<Register />} />

        <Route
          path="/*"
          element={
            session ? ( //? da passare a true
              <Layout>
                <Routing />
              </Layout>
            ) : (
              <Navigate to="/accedi" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

// Componente root dell'applicazione
function Root() {
  const userData = useAuth(); // Utilizzo del custom hook per l'autenticazione

  const [session, setSession] = useState(null);

  // Effetto per ottenere e impostare la sessione corrente
  useEffect(() => {
    // Ottiene la sessione corrente
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Ascolta i cambiamenti di autenticazione
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Restituisce la struttura dell'applicazione
  return (
    <AppContext.Provider value={{ session, setSession, userData }}>
      <App />
    </AppContext.Provider>
  );
}

export default Root;
