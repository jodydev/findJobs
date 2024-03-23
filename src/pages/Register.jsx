export default function Register() {
  return (
    <div className="register w-100 p-5">
      <form action="#">
        <div className="title mb-5">Registrati</div>
        <div class="input-box">
          <input type="text" placeholder="Inserisci nome e cognome" required />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Inserisci email" required />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Inserisci password" required />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Conferma password" required />
        </div>
        <div class="policy my-4">
          <input type="checkbox" />
          <h3 className="mt-2">Accetto tutti i termini e condizioni</h3>
        </div>
        <div class="input-box button">
          <input type="submit" value="Prosegui" />
        </div>
        <div class="text">
          <h3>
            Hai già un'account? <a href="#">Accedi ora</a>
          </h3>
        </div>
      </form>
    </div>
  );
}
