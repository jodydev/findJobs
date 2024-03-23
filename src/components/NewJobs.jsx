import { HiOutlineBookmark } from "react-icons/hi";

export default function NewJobs() {
  return (
    <section id="new-jobs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <p className="fs-3 fw-semibold">
              Nuovi lavori{" "}
              <img
                src="/badge-new-svgrepo-com.svg"
                alt="Icon"
                width="17"
                height="17"
                className="mb-4"
              />
            </p>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center ">
            <p
              className="badge rounded-pill shadow-sm text-dark fw-normal px-3 py-2"
              style={{ backgroundColor: "#D4d4d4" }}
            >
              Guarda tutto
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-scroll d-flex gap-4">
        <div className="d-flex gap-2 px-2">
          <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2 ">
            Technology
          </span>

          <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2 ">
            Marketing
          </span>

          <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2 ">
            Ingegneria
          </span>
          <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2 ">
            Design
          </span>
          <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2 ">
            Legale
          </span>

          <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2 ">
            Ristorazione
          </span>
          <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2 ">
            Sanità
          </span>
        </div>
      </div>

      <div className="d-flex flex-column gap-3 px-1 my-4 ">
        <div className="rounded-4 p-2 mx-2 bg-light shadow p-3">
          <div className="row">
            <div className="col-2">
              <img
                className="w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                alt=""
                srcSet=""
              />
            </div>
            <div className="col-8">
              <p className="fs-5 fw-semibold m-0">Web Developer</p>
              <p className="fs-6 font-weight-lighter text-secondary">
                Google LLC
              </p>
              <p className="fw-sm font-weight-lighter text-secondary m-0 text-nowrap">
                California, United States
              </p>
              <p className="fw-sm font-weight-lighter text-secondary text-primary text-nowrap">
                $10.000 - $25.000 /month
              </p>
              <p className="fs-6 font-weight-lighter text-primary text-decoration-underline  m-0 text-nowrap">
                Guarda i dettagli
              </p>
            </div>
            <div className="col-2">
              <HiOutlineBookmark color="gray" size={25} />
            </div>
          </div>
        </div>

        <div className="rounded-4 p-2 mx-2 bg-light shadow p-3">
          <div className="row">
            <div className="col-2">
              <img
                className="w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                alt=""
                srcSet=""
              />
            </div>
            <div className="col-8">
              <p className="fs-5 fw-semibold m-0">Data Analist</p>
              <p className="fs-6 font-weight-lighter text-secondary">
                Microsoft
              </p>
              <p className="fw-sm font-weight-lighter text-secondary m-0 text-nowrap">
                California, United States
              </p>
              <p className="fw-sm font-weight-lighter text-secondary text-primary text-nowrap">
                $10.000 - $25.000 /month
              </p>
              <p className="fs-6 font-weight-lighter text-primary text-decoration-underline  m-0 text-nowrap">
                Guarda i dettagli
              </p>
            </div>
            <div className="col-2">
              <HiOutlineBookmark color="gray" size={25} />
            </div>
          </div>
        </div>

        <div className="rounded-4 p-2 mx-2 bg-light shadow p-3">
          <div className="row">
            <div className="col-2">
              <img
                className="w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt=""
                srcSet=""
              />
            </div>
            <div className="col-8">
              <p className="fs-5 fw-semibold m-0">Swift Developer</p>
              <p className="fs-6 font-weight-lighter text-secondary">
                Apple Inc
              </p>
              <p className="fw-sm font-weight-lighter text-secondary m-0 text-nowrap">
                California, United States
              </p>
              <p className="fw-sm font-weight-lighter text-secondary text-primary text-nowrap">
                $10.000 - $25.000 /month
              </p>
              <p className="fs-6 font-weight-lighter text-primary text-decoration-underline  m-0 text-nowrap">
                Guarda i dettagli
              </p>
            </div>
            <div className="col-2">
              <HiOutlineBookmark color="gray" size={25} />
            </div>
          </div>
        </div>

        <div className="rounded-4 p-2 mx-2 bg-light shadow p-3">
          <div className="row">
            <div className="col-2">
              <img
                className="w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1587px-Tesla_Motors.svg.png"
                alt=""
                srcSet=""
              />
            </div>
            <div className="col-8">
              <p className="fs-5 fw-semibold m-0">R&D Engineer</p>
              <p className="fs-6 font-weight-lighter text-secondary">
                Tesla Motor
              </p>
              <p className="fw-sm font-weight-lighter text-secondary m-0 text-nowrap">
                California, United States
              </p>
              <p className="fw-sm font-weight-lighter text-secondary text-primary text-nowrap">
                $10.000 - $25.000 /month
              </p>
              <p className="fs-6 font-weight-lighter text-primary text-decoration-underline  m-0 text-nowrap">
                Guarda i dettagli
              </p>
            </div>
            <div className="col-2">
              <HiOutlineBookmark color="gray" size={25} />
            </div>
          </div>
        </div>

        <div className="rounded-4 p-2 mx-2 bg-light shadow p-3">
          <div className="row">
            <div className="col-2">
              <img
                className="w-100"
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/nvidia_logo_icon_169902.png"
                alt=""
                srcSet=""
              />
            </div>
            <div className="col-8">
              <p className="fs-5 fw-semibold m-0">Prompt Engineer</p>
              <p className="fs-6 font-weight-lighter text-secondary">
                Nvdia Corporation
              </p>
              <p className="fw-sm font-weight-lighter text-secondary m-0 text-nowrap">
                California, United States
              </p>
              <p className="fw-sm font-weight-lighter text-secondary text-primary text-nowrap">
                $10.000 - $25.000 /month
              </p>
              <p className="fs-6 font-weight-lighter text-primary text-decoration-underline  m-0 text-nowrap">
                Guarda i dettagli
              </p>
            </div>
            <div className="col-2">
              <HiOutlineBookmark color="gray" size={25} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
