import stylePopular from "../../styles/Popular.module.css";
import { FiBookmark, FiAward } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../../components/spinner";
import Swal from "sweetalert2";

function Saved(props) {
  const { auth } = useSelector((state) => state);
  const { key, id_recipe, id_user, name } = props;
  const [savedRecipe, setSavedRecipe] = useState([]);
  const [isMyRecipe, setIsMyRecipe] = useState(false);

  const [processSaveUsave, setprocessSaveUsave] = useState(false);
  const [saveState, setSaveState] = useState(true);
  const [unSaveState, setUnsaveState] = useState(false);

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

  const handleSave = (props) => {
    setprocessSaveUsave(true);
    const { name, id_recipe } = props;
    axios
      .post("/api/recipe/doSave", {
        idUser: auth?.profile?.id_user,
        idRecipe: id_recipe,
        token: auth?.token,
      })
      .then((res) => {
        setprocessSaveUsave(false);
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
          title: `Success Save Recipe ${name}`,
        });
        setUnsaveState(true);
        setSaveState(true);
        // Router.reload(window.location.pathname)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnSave = (props) => {
    setprocessSaveUsave(true);
    const { name, id_recipe } = props;
    axios
      .post("/api/recipe/doUnsave", {
        idUser: auth?.profile?.id_user,
        idRecipe: id_recipe,
        token: auth?.token,
      })
      .then((res) => {
        setprocessSaveUsave(false);
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
          title: `Success Unsave ${name}`,
        });
        setUnsaveState(false);
        setSaveState(false);
        // Router.reload(window.location.pathname)
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
          {processSaveUsave ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              {savedRecipe.length > 0 ? (
                <>
                  {saveState ? (
                    <>
                      <FiBookmark
                        className={`${stylePopular.icon} ${stylePopular.active} mx-1 cursor`}
                        onClick={(e) => {
                          handleUnSave({ name, id_recipe });
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <FiBookmark
                        className={`${stylePopular.icon} mx-1 cursor`}
                        onClick={(e) => {
                          handleSave({ name, id_recipe });
                        }}
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  {unSaveState ? (
                    <>
                      <FiBookmark
                        className={`${stylePopular.icon} ${stylePopular.active} mx-1 cursor`}
                        onClick={(e) => {
                          handleUnSave({ name, id_recipe });
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <FiBookmark
                        className={`${stylePopular.icon} mx-1 cursor`}
                        onClick={(e) => {
                          handleSave({ name, id_recipe });
                        }}
                      />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Saved;
