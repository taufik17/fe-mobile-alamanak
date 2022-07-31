import { FiSearch } from "react-icons/fi";
import searchStyle from "../styles/Search.module.css";

function Search() {
  return (
    <>
      <div
        className="container text-center fixed-top bg-white"
        style={{ boxShadow: "1px 10px 15px -10px rgba(0,0,0,0.51)" }}
      >
        <div className="row justify-content-md-center justify-content-lg-center">
          <div className="col-md-auto">
            <div className="input-group mb-3 mt-3">
              <span className="input-group-text">
                <FiSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search Pasta, Bread, etc"
                style={{ backgroundColor: "#EFEFEF" }}
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Search;
