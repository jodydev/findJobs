import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Routing from "./routes/Routing";
import Register from "./pages/Register";

function App() {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Router>
    <Routes>
      {/* Route per la pagina di login */}
      <Route path="/accedi" element={<Login onLogin={login} />} />
      {/* Route per la pagina di registrazione */}
      <Route path="/registrati" element={<Register />} />

      {/* Route protette che richiedono l'autenticazione */}
      <Route
        path="/*"
        element={isAuthenticated ? (
          <Layout>
            <Routing onLogout={logout} />
          </Layout>
        ) : (
          <Navigate to="/login" replace />
        )}
      />
    </Routes>
  </Router>
  );
}

export default App;
