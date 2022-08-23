import NavbarBottom from "../components/navbarBottom";
import styleEdit from "../styles/Edit.module.css";
import styleAddRecipe from "../styles/AddRecipe.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiBookOpen, FiVideo, FiUploadCloud } from "react-icons/fi";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-fullpage-custom-loader";
import Tes from "../pages/Tes";
import Head from "next/head";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AddRecipe() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  
  const [videoData, setVideoData ] = useState(null);

  console.log("data video", videoData);

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

  const handlePost = () => {};
  const handleImageChange = (e) => {
    setError(false);
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  };
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

      <div className="container text-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handlePost();
          }}
        >
          <div className={`${styleAddRecipe.search} mb-2 mt-3 mb-4`}>
            <input
              type="text"
              className={`${styleAddRecipe.formControl} form-control`}
              placeholder="Title"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <FiBookOpen className={styleAddRecipe.icon} />{" "}
          </div>

          {error && (
            <p className={styleAddRecipe.errorMsg}>File not supported</p>
          )}
          <div
            className={`${styleAddRecipe.imgPreview}`}
            style={{
              background: imgPreview
                ? `url("${imgPreview}") no-repeat center/cover`
                : null,
            }}
          >
            {!imgPreview && (
              <>
                <label htmlFor="fileUpload">
                  <FiUploadCloud className={styleAddRecipe.iconUpload} />
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  required
                  onChange={handleImageChange}
                />
                <span>(jpg, jpeg, or png)</span>
              </>
            )}
          </div>
          {imgPreview && (
            <button
              onClick={() => setImgPreview(null)}
              className={styleAddRecipe.rmImage}
            >
              Remove image
            </button>
          )}

          <div className="mt-4">
            <CKEditor
              editor={ClassicEditor}
              data="<h4>Deskripsi :</h4><p>&nbsp;</p><h4>Bahan :</h4><p>&nbsp;</p><h4>Cara Memasak :</h4><p>&nbsp;</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                // do something when editor's content changed
                const data = editor.getData();
                setIngredients(data);
                // console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>

          <div className="mt-4 mb-4">
            <Tes/>
          </div>

          <div className="text-center">
            <button
              className={`${styleAddRecipe.btnPost} btn btn-warning px-5 mt-5 py-2`}
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddRecipe;
