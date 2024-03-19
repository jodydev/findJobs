import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";

function App() {
  return (
    <>
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
                    Bentornato 👋
                  </p>
                  <p className="fs-3 fw-semibold text-dark letter-spacing m-0">
                    Jody Ossino
                  </p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="d-flex justify-content-center align-items-center my-4">
                <IoNotificationsOutline size={30} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10">
              <div className="searchbar">
                <div className="searchbar-wrapper">
                  <div className="searchbar-left">
                    <div className="search-icon-wrapper">
                      <RiSearchLine color="gray" size={25} />
                    </div>
                  </div>

                  <div className="searchbar-center">
                    <div className="searchbar-input-spacer"></div>

                    <input
                      type="text"
                      className="searchbar-input"
                      autoCapitalize="off"
                      autoComplete="off"
                      title="Search"
                      placeholder="Cerca un lavoro, un'azienda, una competenza..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="d-flex justify-content-center align-items-center my-2">
                <LuSettings2 className="text-primary" size={25} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="container my-3">
          <div className="overflow-x-scroll  d-flex flex-nowrap gap-4 ps-0 px-5 ">
            <img
              className="w-100 rounded-4"
              src="/public/1.png"
              alt="Image 1"
            />
            <img
              className="w-100  rounded-4"
              src="/public/2.png"
              alt="Image 2"
            />
            <img
              className="w-100  rounded-4"
              src="/public/3.png"
              alt="Image 3"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <p className="fs-5 fw-semibold">Raccomandati</p>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center ">
              <p className="badge rounded-pill text-bg-primary fw-normal">
                Guarda tutto
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="overflow-x-scroll d-flex gap-4">
            <div className="my-card rounded-4 p-4 my-2 mx-2">
              <div className="row">
                <div className="col-3">
                  <img
                    className="w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="col-7">
                  <p className="fs-5 fw-semibold m-0">Web Developer</p>
                  <p className="fs-6 font-weight-lighter text-secondary">
                    Google LLC
                  </p>
                  <p className="fs-6 font-weight-lighter text-secondary m-0 text-nowrap">
                    California, United States
                  </p>
                  <p className="fs-6 font-weight-lighter text-secondary text-primary text-nowrap">
                    $10.000 - $25.000 /month
                  </p>

                  <div className="d-flex gap-1">
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      Full Time
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      Remote
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      Wallfare
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <HiOutlineBookmark color="gray" size={25} />
                </div>
              </div>
            </div>

            <div className="my-card rounded-4 p-4 my-2 mx-2">
              <div className="row">
                <div className="col-3">
                  <img
                    className="w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="col-7">
                  <p className="fs-5 fw-semibold m-0">Data Analist</p>
                  <p className="fs-6 font-weight-lighter text-secondary">
                    Microsoft
                  </p>
                  <p className="fs-6 font-weight-lighter text-secondary m-0 text-nowrap">
                    San Francisco, United States
                  </p>
                  <p className="fs-6 font-weight-lighter text-secondary text-primary text-nowrap">
                    $4.000 - $9.000 /month
                  </p>

                  <div className="d-flex gap-1">
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      Part Time
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      On site
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      Stocks
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <HiOutlineBookmark color="gray" size={25} />
                </div>
              </div>
            </div>

            <div className="my-card rounded-4 p-4 my-2 mx-2">
              <div className="row">
                <div className="col-3">
                  <img
                    className="w-100"
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt=""
                    srcSet=""
                  />
                </div>
                <div className="col-7">
                  <p className="fs-5 fw-semibold m-0">Swift Developer</p>
                  <p className="fs-6 font-weight-lighter text-secondary">
                    Apple Inc
                  </p>
                  <p className="fs-6 font-weight-lighter text-secondary m-0 text-nowrap">
                    Cupertino, United States
                  </p>
                  <p className="fs-6 font-weight-lighter text-secondary text-primary text-nowrap">
                    $15.000 - $35.000 /month
                  </p>

                  <div className="d-flex gap-1">
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      Full Time
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      Ibrid
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light p-2">
                      Stocks
                    </span>
                  </div>
                </div>
                <div className="col-2">
                  <HiOutlineBookmark color="gray" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
