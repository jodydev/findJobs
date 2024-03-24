import Avatar from "@mui/material/Avatar";
import useAuth from "../hooks/useAuth";

export default function Header() {

  const { signOut } = useAuth();

  return (
    <header>
      <div className="container-fluid py-2 px-3">
        <div className="row">
          <div className="col-10 d-flex align-items-center">
            <Avatar
              alt="Remy Sharp"
              src="https://media.licdn.com/dms/image/D4D03AQEW-QJFr1bEgg/profile-displayphoto-shrink_200_200/0/1710086040371?e=1716422400&v=beta&t=4I5Pucsybxq3MYYk9cnq1K0mrGk7E7FGpC-Qu6_GQcc"
              sx={{ width: 60, height: 60 }}
            />
            <div className="container d-flex aling-items-center px-3 ">
              <div className="row">
                <p className="fs-6 text-secondary  letter-spacing m-0 font-weight-lighter">
                  Bentornato{" "}
                  <img
                    src="/waving-hand-light-skin-tone-svgrepo-com.svg"
                    alt="Icon"
                    width="23"
                    height="23"
                  />
                </p>
                <p className="fs-2 fw-semibold text-dark letter-spacing m-0">
                  Jody Ossino
                </p>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex justify-content-end align-items-center my-4 gap-2">
              <button onClick={signOut} type="button" className="btn btn-dark">
                Esci
              </button>
              <img
                src="/notification-bell-svgrepo-com.svg"
                alt="Icon"
                width="25"
                height="25"
              />
              <img
                src="/hamburger-menu-svgrepo-com.svg"
                alt="Icon"
                width="30"
                height="30"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
