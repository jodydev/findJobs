import { RiSearchLine } from "react-icons/ri";

export default function SearchBar() {
  return (
    <section id="search-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <div className="searchbar">
              <div className="searchbar-wrapper">
                <div className="searchbar-left">
                  <div className="search-icon-wrapper">
                    <RiSearchLine fontSize={14} color="gray" size={25} />
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
                    placeholder="Cerca un lavoro o un'azienda..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="d-flex justify-content-center align-items-center my-2">
              <img
                src="/setting-2-svgrepo-com.svg"
                alt="Icon"
                width="25"
                height="25"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
