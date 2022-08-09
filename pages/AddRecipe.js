import NavbarBottom from "../components/navbarBottom";
import styleEdit from "../styles/Edit.module.css";
import styleAddRecipe from "../styles/AddRecipe.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiBookOpen, FiVideo } from "react-icons/fi";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-fullpage-custom-loader";
import Head from "next/head";

function AddRecipe() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const router = useRouter();
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    if (!auth?.token) {
      router.replace("/");
      setIsLoading(false);
    } else {
      setIsAuth(true);
      setIsLoading(false);
    }
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#E5E5E5";
    return () => {
      document.body.style.backgroundColor = "unset";
    };
  });
  return (
    <>
      <Head>
        <title>Add Recipe | Alamanak</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {isAuth ? (
        <> {isLoading ? <Loader sentences={[]} /> : <> </>} </>
      ) : (
        <Loader sentences={[]} wrapperBackgroundColor="black" />
      )}
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
          <button
            className={`${styleAddRecipe.btnPost} btn btn-warning px-5 mt-5 py-2`}
            type="button"
          >
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
