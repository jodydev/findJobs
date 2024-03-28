import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "./supabase/client";
import useAuth from "./hooks/useAuth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import LoggedUserRoutes from "./auth/LoggedUserRoutes";
import AccountSetting from "./pages/AccountSetting";

function App() {
  const { session } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/accedi" element={<Login />} />
        <Route path="/registrati" element={<Register />} />
        <Route
          path="/*"
          element={session ? <LoggedInRoutes /> : <Navigate to="/accedi" replace />}
        />
      </Routes>
    </Router>
  );
}

function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/aggiungi-info" element={<AccountSetting />} />
      <Route path="/home" element={<HomePage />} />
      <Route element={<LoggedUserRoutes />} />
    </Routes>
  );
}

function Root() {
  const { setSession } = useAuth();

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

  return <App />;
}

export default Root;
