import stylePopular from "../../styles/Popular.module.css";
import { BiLike } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/spinner";
import Swal from "sweetalert2";
import Router from 'next/router'
import axios from "axios";

function Like(props) {
  const { auth } = useSelector((state) => state);
  const { key, id_recipe, id_user, name } = props;
  const [likeRecipe, setLikeRecipe] = useState([]);
  const [processLikeUnlike, setprocessLikeUnlike] = useState(false);
  const [liked, setLiked] = useState("");


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
    setprocessLikeUnlike(true);
    const { name, id_recipe } = props;
    axios
      .post("/api/recipe/doLike", {
        idUser: auth?.profile?.id_user,
        idRecipe: id_recipe,
        token: auth?.token,
      })
      .then((res) => {
        setprocessLikeUnlike(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
          position: "bottom",
        });

        Toast.fire({
          icon: "success",
          title: `Success Like Recipe ${name}`,
        });
        setLiked(stylePopular.active)
        // Router.reload(window.location.pathname)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnLike = (props) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
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
      {processLikeUnlike ? (
        <>
          <Loading />
        </>
      ) : (
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
              <BiLike
                className={`${stylePopular.icon} ${liked} mx-1 cursor`}
                onClick={(e) => {
                  handleLike({ name, id_recipe });
                }}
              />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Like;
