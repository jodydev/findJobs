import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  // const { signInWithGithub, signIn } = useAuth();
  const { signIn } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Effettua il login utilizzando le credenziali fornite
      await signIn(email, password);
      navigate("/home");
    } catch (error) {
      // Se si verifica un errore durante il login, imposta un messaggio di errore
      const errorMessage = "I dati inseriti non sono corretti, riprova.";
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      setError(errorMessage);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login w-100 p-5">
      {error && (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <i className="fa-solid fa-lg fa-triangle-exclamation mx-2"></i>
          <div>{error}</div>
        </div>
      )}

      <form onSubmit={handleLogin}>
        <div className="title">Accedi</div>
        <div className="input-box underline">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Inserisci la tua email"
            required
          />
          <div className="underline"></div>
        </div>
        <div className="input-box d-flex align-items-center">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Inserisci la tua password"
            required
          />
          <button
            className="bg-light border-0"
            type="button"
            onClick={togglePasswordVisibility}
          >
            <img
              src={`/eye-${showPassword ? "on" : "off"}-svgrepo-com.svg`}
              alt="Icon"
              width="20"
              height="20"
            />
          </button>
          <div className="underline"></div>
        </div>
        <div className="input-box button">
          <input type="submit" value="Continua" />
        </div>
      </form>

      <p className="option mb-0">
        Non hai ancora un'account? <a href="/registrati">Registrati ora</a>
      </p>
      <p className="option">oppure accedi con i tuoi social</p>

      <div className="google">
        {/* <a onClick={signInWithGithub}> */}
        <a href="">
          <img
            src="/button-logo/github-icon-1-logo-svgrepo-com.svg"
            alt="Icon"
            width="25"
            height="25"
            className="me-2"
          />
          Accedi con GitHub
        </a>
      </div>
      <div className="apple">
        <a>
          <img
            src="/button-logo/apple-svgrepo-com.svg"
            alt="Icon"
            width="28"
            height="28"
            className="me-2 mb-1"
          />
          Accedi con Apple
        </a>
      </div>
      <div className="linkedin">
        <a>
          <img
            src="/button-logo/linkedin-svgrepo-com.svg"
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
