import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <div className="col-md-4 d-flex align-items-center">
          {/* <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a> */}
          <span className="mb-3 mb-md-0 text-muted fs-6">
            © 2024{" "}
            <span className=" text-decoration-underline fs-6">Jody Ossino</span>
          </span>
        </div>

        <ul className="col-md-4 justify-content-end d-flex list-inline mb-3">
          <li className="me-3 list-inline-item">
            <a href="/" className="text-dark text-decoration-none">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="me-3 list-inline-item">
            <a href="/" className="text-dark text-decoration-none">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="/" className="text-dark text-decoration-none">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
