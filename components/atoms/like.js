import stylePopular from "../../styles/Popular.module.css";
import { BiLike } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Like(props) {
  const { key, id_recipe, id_user } = props;
  const [likeRecipe, setLikeRecipe] = useState([]);

  useEffect(() => {
    getLike();
  }, []);

  const getLike = () => {
    axios
      .post("/api/recipe/isLike", { idUser: id_user, idRecipe: id_recipe })
      .then((res) => {
        setLikeRecipe(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {likeRecipe.length > 0 ? (
        <>
          <BiLike className={`${stylePopular.icon} ${stylePopular.active} mx-1`} />
        </>
      ) : (
        <>
          <BiLike className={`${stylePopular.icon} mx-1`} />
        </>
      )}
    </>
  );
}

export default Like;
