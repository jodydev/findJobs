import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/client";
import AppContext from "../contexts/AppContext";
// import Avatar from "../components/Avatar";

export default function AccountSetting() {
  const { session } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [first_name, setfirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [telephone, setTelephone] = useState(null);
  const [city, setCity] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  // Esegui l'effetto al cambio di sessione, ottenendo e aggiornando i dati del profilo
  // useEffect(() => {
  //   let ignore = false;

  //   // Funzione per ottenere il profilo dell'utente attuale
  //   async function getProfile() {
  //     setLoading(true);
  //     const { user } = session;

  //     // Ottieni i dati del profilo dall'API di Supabase
  //     const { data, error } = await supabase
  //       .from("profiles")
  //       .select(`*`)
  //       .eq("id", user.id)
  //       .single();

  //     if (!ignore) {
  //       if (error) {
  //         console.warn(error);
  //       } else if (data) {
  //         // Aggiorna lo stato con i dati del profilo ottenuti
  //         setUsername(data.username);
  //         setfirstName(data.first_name);
  //         setLastName(data.last_name);
  //         setAvatarUrl(data.avatar_url);
  //         setTelephone(data.telephone);
  //         setCity(data.city);
  //         setAddress(data.address);
  //       }
  //     }
  //     setLoading(false);
  //   }

  //   getProfile();

  //   // Ritorna una funzione per indicare l'ignorare il set di stato dopo la disconnessione dell'effetto
  //   return () => {
  //     ignore = true;
  //   };
  // }, [session]);

  // Funzione per aggiornare il profilo dell'utente
  // async function updateProfile(event, avatarUrl) {
  //   event.preventDefault();

  //   setLoading(true);
  //   const { user } = session;

  //   // Creazione dell'oggetto di aggiornamento con i dati del profilo
  //   const updates = {
  //     id: user.id,
  //     username,
  //     first_name,
  //     last_name,
  //     avatar_url,
  //     telephone,
  //     city,
  //     address,
  //     updated_at: new Date(),
  //   };

  //   if (avatarUrl) {
  //     updates.avatar_url = avatarUrl; // Aggiorna l'avatar_url solo se è stato fornito un nuovo URL
  //   }

  //   // Aggiornamento del profilo nell'API di Supabase
  //   const { error } = await supabase.from("profiles").upsert(updates);

  //   if (error) {
  //     alert(error.message);
  //   } else {
  //     setLoading(false);
  //     if (avatarUrl) {
  //       setAvatarUrl(avatarUrl); // Aggiorna lo stato dell'avatar_url se è stato fornito un nuovo URL
  //     }
  //     navigate("/account", { state: { updatedProfile: updates } });
  //   }
  // }

  // Funzione per scaricare un'immagine dallo storage
  // async function downloadImage(path) {
  //   try {
  //     const { data, error } = await supabase.storage
  //       .from("avatars")
  //       .download(path);
  //     if (error) {
  //       throw error;
  //     }
  //     const url = URL.createObjectURL(data);
  //     setAvatarUrl(url);
  //   } catch (error) {
  //     console.log("Error downloading image: ", error.message);
  //   }
  // }

  // Funzione per caricare un'immagine nello storage
  // async function uploadAvatar(event) {
  //   try {
  //     setUploading(true);

  //     if (!event.target.files || event.target.files.length === 0) {
  //       throw new Error("You must select an image to upload.");
  //     }

  //     const file = event.target.files[0];
  //     const fileExt = file.name.split(".").pop();
  //     const fileName = `${Math.random()}.${fileExt}`;
  //     const filePath = `${fileName}`;

  //     const { data, error } = await supabase.storage
  //       .from("avatars")
  //       .upload(filePath, file); // Carica il file su Supabase

  //     if (error) {
  //       throw error;
  //     }

  //     const url = URL.createObjectURL(file);
  //     setAvatarUrl(url);
  //   } catch (error) {
  //     alert(error.message);
  //   } finally {
  //     setUploading(false);
  //   }
  // }

  const [currentStep, setCurrentStep] = useState(1);

 // Funzione per passare allo step successivo
const goToNextStep = () => {
  setCurrentStep((prevStep) => prevStep + 1);
};

// Funzione per gestire il clic sul pulsante "Next Step"
const handleNextStepClick = (event) => {
  event.preventDefault();
  goToNextStep();
};

// Funzione per gestire il clic sui pulsanti di conferma nei passaggi successivi
const handleConfirmationButtonClick = (event) => {
  event.preventDefault();
  // Inviare il modulo quando si è nello step 3
  document.querySelector("form").submit();
};

useEffect(() => {
  const formSubmitBtn = document.querySelector(".formbold-btn");

  // Aggiungi un event listener per gestire il clic sul pulsante "Next Step"
  formSubmitBtn.addEventListener("click", handleNextStepClick);

  // Pulisci gli eventi quando il componente viene smontato
  return () => {
    formSubmitBtn.removeEventListener("click", handleNextStepClick);
  };
}, [currentStep]); // Assicurati di passare currentStep come dipendenza

// Effetto per aggiungere l'event listener per i pulsanti di conferma nei passaggi successivi
useEffect(() => {
  const confirmButtons = document.querySelectorAll(".formbold-confirm-btn");
  confirmButtons.forEach((button) => {
    button.addEventListener("click", handleConfirmationButtonClick);
  });

  // Pulisci gli eventi quando il componente viene smontato
  return () => {
    confirmButtons.forEach((button) => {
      button.removeEventListener("click", handleConfirmationButtonClick);
    });
  };
}, []); // Assicurati di passare un array vuoto come dipendenza

console.log(currentStep);


  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper p-4">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="formbold-steps">
            <ul>
              <li
                className={`formbold-step-menu1 ${
                  currentStep === 1 ? "active" : ""
                }`}
              >
                <span>1</span>
                Dati personali
              </li>
              <li
                className={`formbold-step-menu2 ${
                  currentStep === 2 ? "active" : ""
                }`}
              >
                <span>2</span>
                Preferenze lavorative
              </li>
              <li
                className={`formbold-step-menu3 ${
                  currentStep === 3 ? "active" : ""
                }`}
              >
                <span>3</span>
                Conferma dati
              </li>
            </ul>
          </div>

          {/* //? STEP 1 */}
          <div
            className={`formbold-form-step-1 ${
              currentStep === 1 ? "active" : ""
            }`}
          >
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label">
                  {" "}
                  Nome{" "}
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="formbold-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastname" className="formbold-form-label">
                  {" "}
                  Cognome{" "}
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="formbold-form-input"
                  required
                />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="dob" className="formbold-form-label">
                  {" "}
                  Data di nascita{" "}
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="formbold-form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="city" className="formbold-form-label">
                  {" "}
                  Città{" "}
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="formbold-form-input"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="formbold-form-label">
                {" "}
                Indirizzo{" "}
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="formbold-form-input"
                required
              />
            </div>
          </div>

          {/* //? STEP 2 */}
          <div
            className={`formbold-form-step-2 ${
              currentStep === 2 ? "active" : ""
            }`}
          >
            <div>
              <label htmlFor="message" className="formbold-form-label">
                {" "}
                Message{" "}
              </label>
              <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Type your message"
                className="formbold-form-input"
              ></textarea>
            </div>
          </div>

          {/* //? STEP 3 */}
          <div
            className={`formbold-form-step-3 ${
              currentStep === 3 ? "active" : ""
            }`}
          >
            <div className="formbold-form-confirm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>

             
            </div>
          </div>

          <div className="formbold-form-btn-wrapper">
            {/* {currentStep !== 1 && (
              <button
                onClick={handleBackButtonClick}
                className="formbold-back-btn"
              >
                Back
              </button>
            )} */}

            <button onClick={handleNextStepClick} className="formbold-btn">
              {currentStep === 2 ? "Conferma" : currentStep === 3 ? "Submit" : "Avanti"}
            </button>
          </div>
        </form>
      </div>
    </div>

    // <div className="container-fluid p-0 p-lg-3">
    //   <div className="row">
    //     <div className="col-12 d-flex justify-content-center align-items-center">
    //       <div className="form-container shadow-sm px-3">
    //         <form className="form" onSubmit={updateProfile}>
    //           <div className="row d-flex justify-content-center align-items-center">
    //             <div className="col-12 col-lg-6">
    //               <div>
    //                 <h1 className="text-dark fw-bold">Ancora un attimo..</h1>
    //                 <h5 className="text-dark fw-bold h6">
    //                   Aggiorna prima i tuoi dati!
    //                 </h5>
    //               </div>
    //             </div>

    //             <div className="col-4 col-lg-2  flex-column">
    //               <p className="text-dark fw-bold h5">Aggiungi il tuo avatar</p>
    //               <input
    //                 type="file"
    //                 id="single"
    //                 accept="image/*"
    //                 onChange={uploadAvatar}
    //                 disabled={uploading}
    //                 style={{ margin: "0 auto" }}
    //               />
    //             </div>

    //             <div className="col-8 col-lg-3">
    //               {avatar_url ? (
    //                 <div className="circle d-flex justify-content-center align-items-center">
    //                   <Avatar
    //                     url={avatar_url}
    //                     size={150}
    //                     onUpload={(event, url) => {
    //                       updateProfile(event, url);
    //                     }}
    //                   />
    //                 </div>
    //               ) : (
    //                 <div className="add-photo circle"></div>
    //               )}
    //             </div>
    //           </div>

    //           {error && (
    //             <div
    //               className="alert alert-danger d-flex align-items-center"
    //               role="alert"
    //             >
    //               <i className="fa-solid fa-lg fa-triangle-exclamation mx-2"></i>
    //               <div>{error}</div>
    //             </div>
    //           )}

    //           <div className="container px-3">
    //             <div className="row">
    //               <div className="col-12 col-lg-6">
    //                 <div className="form-group my-1 my-lg-2">
    //                   <label htmlFor="first_name">
    //                     <i className="fa-solid fa-circle-user"></i> Nome
    //                     <input
    //                       type="text"
    //                       id="first_name"
    //                       name="first_name"
    //                       placeholder="Jody"
    //                       value={first_name || ""}
    //                       onChange={(e) => setfirstName(e.target.value)}
    //                       required
    //                     />
    //                   </label>
    //                 </div>

    //                 <div className="form-group my-3">
    //                   <label htmlFor="username">
    //                     <i className="fa-solid fa-signature"></i> Username
    //                     <input
    //                       type="text"
    //                       id="username"
    //                       name="username"
    //                       placeholder="Username"
    //                       value={username || ""}
    //                       onChange={(e) => setUsername(e.target.value)}
    //                     />
    //                   </label>
    //                 </div>

    //                 <div className="form-group my-1">
    //                   <label htmlFor="city">
    //                     <i className="fa-solid fa-house"></i> Città
    //                     <input
    //                       id="city"
    //                       type="text"
    //                       value={city || ""}
    //                       onChange={(e) => setCity(e.target.value)}
    //                       placeholder="Bologna"
    //                       required
    //                     />
    //                   </label>
    //                 </div>
    //               </div>
    //               <div className="col-12 col-lg-6">
    //                 <div className="form-group my-3 my-lg-2">
    //                   <label htmlFor="last_name">
    //                     <i className="fa-regular fa-circle-user"></i> Cognome
    //                     <input
    //                       type="text"
    //                       id="last_name"
    //                       name="last_name"
    //                       placeholder="Ossino"
    //                       value={last_name || ""}
    //                       onChange={(e) => setLastName(e.target.value)}
    //                       required
    //                     />
    //                   </label>
    //                 </div>

    //                 <div className="form-group my-3">
    //                   <label htmlFor="telephone">
    //                     <i className="fa-solid fa-phone"></i> Telefono
    //                     <input
    //                       id="telephone"
    //                       type="text"
    //                       value={telephone || ""}
    //                       onChange={(e) => setTelephone(e.target.value)}
    //                       placeholder="333617.."
    //                       required
    //                     />
    //                   </label>
    //                 </div>

    //                 <div className="form-group my-3">
    //                   <label htmlFor="address">
    //                     <i className="fa-solid fa-location-dot"></i> Indirizzo
    //                     <input
    //                       id="address"
    //                       type="text"
    //                       value={address || ""}
    //                       onChange={(e) => setAddress(e.target.value)}
    //                       placeholder="Via del Successo"
    //                       required
    //                     />
    //                   </label>
    //                 </div>
    //               </div>
    //             </div>

    //             <button type="submit" className="form-submit-btn my-3">
    //               Aggiorna
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
