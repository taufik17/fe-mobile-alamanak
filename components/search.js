import { FiSearch } from "react-icons/fi";
import styleLogin from "../styles/Login.module.css";
import searchStyle from "../styles/Search.module.css";

function Search() {
  return (
    <>
      <div className="container text-center fixed-top bg-white">
        <div className="row justify-content-lg-center">
          <div className="col">
            <div className={`${styleLogin.search} mb-2 mt-3`}>
              <input
                type="text"
                className={`${styleLogin.formControl} form-control`}
                placeholder="Search Pasta, Bread, etc"
              />
              <FiSearch className={styleLogin.icon} />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
