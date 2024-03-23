export default function RecommendedJobs() {
  return (
    <section id="recommended-jobs">
      <div className="container-fluid my-2 mb-0">
        <div className="row">
          <div className="col-8">
            <p className="fs-3 fw-semibold">
              Scelti per te{" "}
              <img
                src="/quality-svgrepo-com.svg"
                alt="Icon"
                width="17"
                height="17"
                className="mb-3"
              />
            </p>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center ">
            <p
              className="badge rounded-pill text-dark shadow-sm fw-normal px-3 py-2"
              style={{ backgroundColor: "#D4d4d4" }}
            >
              Guarda tutto
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="overflow-x-scroll d-flex gap-3">
          <div className="my-card p-3 rounded-4 bg-light shadow mb-3 mx-1">
            <div className="row">
              <div className="col-12 ">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="w-100"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                      alt=""
                    />
                  </div>
                  <div id="info-job" className="col-9">
                    <h2 className="fs-5 fw-semibold m-0">Web Developer</h2>
                    <p className="fs-6 font-weight-lighter text-secondary">
                      Google LLC
                    </p>
                    <p className="fw-sm font-weight-lighter text-secondary m-0 text-nowrap">
                      California, United States
                    </p>
                    <p className="fw-sm font-weight-lighter text-secondary text-primary text-nowrap">
                      $10.000 - $25.000 /month
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="d-flex gap-1">
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Full Time
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Remote
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Wallfare
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-card p-3 rounded-4 bg-light shadow mb-3 mx-1">
            <div className="row">
              <div className="col-12 ">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="w-100"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                      alt=""
                    />
                  </div>
                  <div id="info-job" className="col-9">
                    <h2 className="fs-5 fw-semibold m-0">Web Developer</h2>
                    <p className="fs-6 font-weight-lighter text-secondary">
                      Microsoft LLC
                    </p>
                    <p className="fw-sm font-weight-lighter text-secondary m-0 text-nowrap">
                      California, United States
                    </p>
                    <p className="fw-sm font-weight-lighter text-secondary text-primary text-nowrap">
                      $10.000 - $25.000 /month
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="d-flex gap-1">
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Full Time
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Remote
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Wallfare
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-card p-3 rounded-4 bg-light shadow mb-3 mx-1">
            <div className="row">
              <div className="col-12 ">
                <div className="row">
                  <div className="col-3">
                    <img
                      className="w-100"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                      alt=""
                    />
                  </div>
                  <div id="info-job" className="col-9">
                    <h2 className="fs-5 fw-semibold m-0">Web Developer</h2>
                    <p className="fs-6 font-weight-lighter text-secondary">
                      Apple LLC
                    </p>
                    <p className="fw-sm font-weight-lighter text-secondary m-0 text-nowrap">
                      California, United States
                    </p>
                    <p className="fw-sm font-weight-lighter text-secondary text-primary text-nowrap">
                      $10.000 - $25.000 /month
                    </p>
                  </div>
                </div>
                <div className="container">
                  <div className="d-flex gap-1">
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Full Time
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Remote
                    </span>
                    <span className="badge rounded-pill text-bg-primary fw-light px-2 py-2">
                      Wallfare
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
