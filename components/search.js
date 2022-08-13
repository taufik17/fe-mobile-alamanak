import { FiSearch } from "react-icons/fi";
import styleLogin from "../styles/Login.module.css";
import searchStyle from "../styles/Search.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    router.push(`/search/${keyword}`);
  };

  return (
    <>
      <div className="container text-center fixed-top bg-white">
        <div className="row justify-content-lg-center">
          <div className="col">
            <div className={`${styleLogin.search} mb-2 mt-3`}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
              >
                <input
                  type="text"
                  className={`${styleLogin.formControl} form-control`}
                  placeholder="Search Pasta, Bread, etc"
                  required
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <FiSearch className={styleLogin.icon} />{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
