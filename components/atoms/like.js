import stylePopular from "../../styles/Popular.module.css";
import { BiLike } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

function Like(props) {
  const { auth } = useSelector((state) => state);
  const { key, id_recipe, id_user, name } = props;
  const [likeRecipe, setLikeRecipe] = useState([]);

  useEffect(() => {
    getLike();
  }, []);

  const getLike = () => {
    axios
      .post("/api/recipe/isLike", {
        idUser: auth?.profile?.id_user,
        idRecipe: id_recipe,
      })
      .then((res) => {
        setLikeRecipe(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = (props) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      position: "bottom",
    });

    Toast.fire({
      icon: "success",
      title: `Success Like Recipe ${props}`,
    });
  };

  const handleUnLike = (props) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      position: "bottom",
    });

    Toast.fire({
      icon: "success",
      title: `Success Unlike ${props}`,
    });
  };
  return (
    <>
      {likeRecipe.length > 0 ? (
        <>
          <BiLike
            className={`${stylePopular.icon} ${stylePopular.active} mx-1 cursor`}
            onClick={(e) => {
              handleUnLike(name);
            }}
          />
        </>
      ) : (
        <>
          {/* <input type="button" onClick={handleLike(id_recipe)} /> */}
          <BiLike
            className={`${stylePopular.icon} mx-1 cursor`}
            onClick={(e) => {
              handleLike(name);
            }}
          />
        </>
      )}
    </>
  );
}

export default Like;
