import NavbarBottom from "../components/navbarBottom";
import styleEdit from "../styles/Edit.module.css";
import styleAddRecipe from "../styles/AddRecipe.module.css";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { FiBookOpen, FiVideo, FiUploadCloud } from "react-icons/fi";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-fullpage-custom-loader";
import VideoLink from "../components/molecules/videoLink";
import { Form } from "react-bootstrap";
import axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic";

function AddRecipe() {
    const Editor = dynamic(() => import("../components/editor"), {
        ssr: false,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    const [title, setTitle] = useState("");
    const [imageRecipe, setImageRecipe] = useState([]);
    const [categorySelect, setCategorySelect] = useState([]);
    const [ingredients, setIngredients] = useState("");
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
    const [category, setCategory] = useState([]);
    const [videoData, setVideoData] = useState(null);

    const VideoContext = createContext();
    const Provider = VideoContext.Provider;

    const handleChangeVideo = useCallback((newValue) => {
        console.log(newValue);
        setVideoData(newValue?.formData?.linkVideo);
    }, []);

    console.log("data video", videoData);
    console.log("Ingredients", ingredients);

    const router = useRouter();
    const { auth } = useSelector((state) => state);
    useEffect(() => {
        if (!auth?.token) {
            router.replace("/");
            setIsLoading(false);
        } else {
            setIsAuth(true);
            getCategory();
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = "#E5E5E5";
        return () => {
            document.body.style.backgroundColor = "unset";
        };
    });

    const getCategory = () => {
        axios
            .post("/api/recipe/categoryRecipe")
            .then((res) => {
                setCategory(res?.data?.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handlePost = () => {
        console.log("hasil", title, imageRecipe, categorySelect);
        console.log("Ingredients", ingredients);
    };
    const handleImageChange = (e) => {
        setError(false);
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpg", "image/jpeg"];
        if (selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            setImageRecipe(selected);
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

            <div className="container box-shadow text-center">
                <NavbarBottom />
                <div className="row pt-4 align-items-center mb-4">
                    <div className="col">
                        <h4 className={`${styleAddRecipe.menuTag} text-center`}>
                            Add Your Recipe
                        </h4>
                    </div>
                </div>

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
                        <p className={styleAddRecipe.errorMsg}>
                            File not supported
                        </p>
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
                                    <FiUploadCloud
                                        className={styleAddRecipe.iconUpload}
                                    />
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
                        <Form.Select
                            aria-label="Default select example"
                            onChange={(e) => setCategorySelect(e.target.value)}
                        >
                            <option>Category</option>
                            {category.map((item) => (
                                <>
                                    <option value={item.id_category}>
                                        {item.name_category}
                                    </option>
                                </>
                            ))}
                        </Form.Select>
                    </div>

                    <div className="mt-4">
                        <Editor 
                        value={"<h4>Deskripsi :</h4><p>&nbsp;</p><h4>Bahan :</h4><p>&nbsp;</p><h4>Cara Memasak :</h4><p>&nbsp;</p>"}
                        onChange={(v) => console.log(v)}
                        />
                    </div>

                    <div className="mt-4 mb-4">
                        <Provider value="tes">
                            <VideoLink videoData={handleChangeVideo} />
                        </Provider>
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
