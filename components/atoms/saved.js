import stylePopular from "../../styles/Popular.module.css";
import { FiBookmark, FiAward } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Saved(props) {
  const { auth } = useSelector((state) => state);
  const { key, id_recipe, id_user } = props;
  const [savedRecipe, setSavedRecipe] = useState([]);
  const [isMyRecipe, setIsMyRecipe] = useState(false);

  useEffect(() => {
    getSaved();
  }, []);

  useEffect(() => {
    if (auth?.profile?.id_user === id_user) {
      setIsMyRecipe(true);
    }
  });

  const getSaved = () => {
    axios
      .post("/api/recipe/isSaved", {
        idUser: auth?.profile?.id_user,
        idRecipe: id_recipe,
      })
      .then((res) => {
        console.log("saved", res.data);
        setSavedRecipe(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {isMyRecipe ? (
        <>
          <FiAward
            className={`${stylePopular.icon} ${stylePopular.active} mx-1`}
          />
        </>
      ) : (
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
      )}
    </>
  );
}

export default Saved;
