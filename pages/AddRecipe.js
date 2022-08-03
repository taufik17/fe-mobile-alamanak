import NavbarBottom from "../components/navbarBottom";
import styleEdit from "../styles/Edit.module.css";
import styleAddRecipe from "../styles/AddRecipe.module.css";
import { useEffect } from "react";
import Link from "next/link";
import { FiBookOpen, FiVideo } from "react-icons/fi";

function AddRecipe() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E5E5E5";
    return () => {
      document.body.style.backgroundColor = "unset";
    };
  });
  return (
    <>
      <div className="container">
        <NavbarBottom />
        <div className="row mt-4 align-items-center mb-4">
          <div className="col">
            <h4 className={`${styleAddRecipe.menuTag} text-center`}>
              Add Your Recipe
            </h4>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={`${styleAddRecipe.search} mb-2 mt-3 mb-4`}>
          <input
            type="text"
            className={`${styleAddRecipe.formControl} form-control`}
            placeholder="Title"
          />
          <FiBookOpen className={styleAddRecipe.icon} />{" "}
        </div>

        <div className="form-floating mb-4">
          <textarea
            className={`${styleAddRecipe.desc} form-control`}
            placeholder="-"
            style={{ height: "200px" }}
          ></textarea>
          <label className={styleAddRecipe.descText}>Description</label>
        </div>

        <div className={`${styleAddRecipe.search} mb-2 mt-3 mb-4`}>
          <input
            type="text"
            className={`${styleAddRecipe.formControl} form-control`}
            placeholder="Add Video"
          />
          <FiVideo className={styleAddRecipe.icon} />{" "}
        </div>

        <div className="text-center">

        <button className={`${styleAddRecipe.btnPost} btn btn-warning px-5 mt-5 py-2`} type="button">
          Post
        </button>
        </div>
      </div>

      {/* <div className="container text-center">
        <div className="row justify-content-md-center justify-content-lg-center">
          <div className="col">
            <div className="d-grid gap-2 mb-5">
              <Link href="/Profile">
                <button className={`${styleEdit.btnCancel} btn`} type="button">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default AddRecipe;
