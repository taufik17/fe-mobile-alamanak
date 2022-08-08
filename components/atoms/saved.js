import stylePopular from "../../styles/Popular.module.css";
import { FiBookmark, FiAward } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Saved(props) {
  const { key, id_recipe, id_user } = props;
  const [savedRecipe, setSavedRecipe] = useState([]);

  useEffect(() => {
    getSaved();
  }, []);

  const getSaved = () => {
    axios
      .post("/api/recipe/isSaved", { idUser: id_user, idRecipe: id_recipe })
      .then((res) => {
        console.log("saved", res.data)
        setSavedRecipe(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {savedRecipe.length > 0 ? (
        <>
          <FiBookmark
            className={`${stylePopular.icon} ${stylePopular.active} mx-1`}
          />
        </>
      ) : (
        <>
          <FiBookmark className={`${stylePopular.icon} mx-1`} />
        </>
      )}
    </>
  );
}

export default Saved;
