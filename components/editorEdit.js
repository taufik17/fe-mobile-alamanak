import styleAddRecipe from "../styles/AddRecipe.module.css";
import { FiBookOpen, FiUploadCloud } from "react-icons/fi";
import { FaDelicious } from "react-icons/fa";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useEffect, useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import VideoLink from "../components/molecules/videoLink";
import Loading from "../components/spinner";
import { useRouter } from "next/router";

const Editor = ({ ingredients }) => {
  const [title, setTitle] = useState("");
  const [taste, setTaste] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageRecipe, setImageRecipe] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);
  const [categorySelect, setCategorySelect] = useState([]);
  const [category, setCategory] = useState([]);
  const [ingrdnts, setIngrdnts] = React.useState("");
  const [videoData, setVideoData] = useState(null);

  const { auth } = useSelector((state) => state);
  const router = useRouter();
  const userToken = auth?.token;
  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
      "content-type": "multipart/form-data",
    },
  };

  const handleChangeVideo = useCallback((newValue) => {
    setVideoData(newValue?.formData?.linkVideo);
  }, []);

  useEffect(() => {
    getCategory();
  }, []);

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

  const handlePost = () => {
    setIsLoading(true);
    console.log("hasil", title);
    console.log("Image", imageRecipe);
    console.log("Category", categorySelect);
    console.log("Ingredients", ingrdnts);
    console.log("data video", videoData);

    const data = new FormData();
    data.append("recipeName", title);
    data.append("ingredients", ingrdnts);
    data.append("image", imageRecipe);
    data.append("category", categorySelect);
    data.append("taste", taste);
    data.append("video", JSON.stringify(videoData));

    axios
      .post(`https://alamanak.herokuapp.com/recipe/add`, data, config)
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          icon: "success",
          title: "Sukses",
          text: "Recipe Berhasil ditambah",
        }).then((result) =>
          result.isConfirmed ? router.replace("/Profile/MyRecipe") : null
        );
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: { err },
        });
      });
  };
  return (
    <>
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

        {error && <p className={styleAddRecipe.errorMsg}>File not supported</p>}
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

        <div className="my-4">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setCategorySelect(e.target.value)}
          >
            <option>Category</option>
            {category.map((item) => (
              <>
                <option value={item.id_category}>{item.name_category}</option>
              </>
            ))}
          </Form.Select>
        </div>

        <CKEditor
          editor={ClassicEditor}
          data={ingredients}
          onChange={(event, editor) => {
            const data = editor.getData();
            setIngrdnts(data);
          }}
        />

        <div className={`${styleAddRecipe.search} mb-2 mt-3 mb-4`}>
          <input
            type="text"
            className={`${styleAddRecipe.formControl} form-control`}
            placeholder="Taste: ex: pedas, gurih"
            required
            onChange={(e) => setTaste(e.target.value)}
          />
          <FaDelicious className={styleAddRecipe.icon} />{" "}
        </div>

        <div className="mt-4 mb-4">
          <VideoLink videoData={handleChangeVideo} />
        </div>

        <div className="text-center">
          <button
            className={`${styleAddRecipe.btnPost} btn btn-warning px-5 mt-5 py-2`}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loading /> : "Post"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Editor;
