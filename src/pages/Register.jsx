import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Register() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  // Gestisce la registrazione di un nuovo utente
  const handleRegister = async (event) => {
    event.preventDefault();
    const { username, email, password } = Object.fromEntries(
      new FormData(event.currentTarget)
    );

    try {
      // Effettua la registrazione attraverso la funzione signUp fornita da useAuth()
      const { error } = await signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });

      // Possibili messaggi di errore restituiti dalla registrazione
      const errorEmail = "Unable to validate email address: invalid format";
      const errorPassword = "Signup requires a valid password";
      const errorMessageMail = "Email errata, riprova";
      const errorMessagePassword = "Dati incompleti o errati, riprova";

      // Gestisce i diversi tipi di errori restituiti durante la registrazione
      if (error?.message === errorEmail) {
        setError(errorMessageMail);
      } else if (error?.message === errorPassword) {
        setError(errorMessagePassword);
      } else {
        setError("Errore durante la registrazione, riprova");
      }

      if (error) {
        navigate("/registrati");
      } else {
        navigate("/home");
      }
    } catch (error) {
      // Gestisce eventuali errori durante la registrazione
      setError("Errore durante la registrazione, riprova");
      console.error(error);
    }

  };
  return (
    <div className="register w-100 p-5">
      {error && (
        <div
          className="alert alert-danger d-flex align-items-center"
          role="alert"
        >
          <i className="col-0 fa-solid fa-lg fa-triangle-exclamation mx-2 justify-content-start"></i>
          <div className="col-4 text-nowrap">{error}</div>
          <div className="col-7 d-flex justify-content-end">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}
      <form onSubmit={handleRegister}>
        <h2 className="title mb-5">Registrati</h2>
        <div className="pt-5">
        <div className="input-box">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Inserisci nome e cognome"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Inserisci email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Inserisci password"
            required
          />
        </div>
        {/* <div className="input-box">
          <input type="password" placeholder="Conferma password" required />
        </div> */}
        </div>
        
        <div className="policy my-4">
          <input type="checkbox" />
          <h3 className="mt-2">Accetto tutti i termini e condizioni</h3>
        </div>
        <div className="input-box button">
          <input type="submit" value="Prosegui" />
        </div>
        <div className="text">
          <p>
            Hai già un'account? <a href="/accedi">Accedi ora</a>
          </p>
        </div>
      </form>
    </div>
  );
}
