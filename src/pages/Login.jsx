import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Login = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { error } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    onLogin(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login w-100 p-5">
      {error && <p className="error">Errore durante la login, riprova.</p>}

      <form onSubmit={handleLogin}>
        <div className="title">Accedi</div>
        <div className="input-box underline">
          <input type="text" placeholder="Inserisci la tua email" required />
          <div className="underline"></div>
        </div>
        <div className="input-box d-flex align-items-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Inserisci la tua password"
            required
          />
          <button
            className="bg-light"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <img
                src="/eye-on-svgrepo-com.svg"
                alt="Icon"
                width="20"
                height="20"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <img
                src="/eye-off-svgrepo-com.svg"
                alt="Icon"
                width="20"
                height="20"
                onClick={togglePasswordVisibility}
              />
            )}
          </button>
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" name="" value="Continua" />
        </div>
      </form>
      <div className="option">o accedi con i tuoi social</div>
      <div className="google">
        <a href="#" className="">
          <img
            src="/public/button-logo/google-svgrepo-com.svg"
            alt="Icon"
            width="25"
            height="25"
            className="me-2"
          />
          Accedi con Google
        </a>
      </div>
      <div className="apple">
        <a href="#">
          <img
            src="/public/button-logo/apple-svgrepo-com.svg"
            alt="Icon"
            width="28"
            height="28"
            className="me-2 mb-1"
          />
          Accedi con Apple
        </a>
      </div>
      <div className="linkedin">
        <a href="#">
          <img
            src="/public/button-logo/linkedin-svgrepo-com.svg"
            alt="Icon"
            width="27"
            height="27"
            className="me-2 mb-1"
          />
          Accedi con Linkedin
        </a>
      </div>
    </div>
  );
};

export default Login;
