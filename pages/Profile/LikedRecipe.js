import React, { useState, useEffect } from "react";
import stylePopular from "../../styles/Popular.module.css";
import styleProfile from "../../styles/Profile.module.css";
import styleHome from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiTrash } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "react-fullpage-custom-loader";
import LikedRecipeComp from "../../components/molecules/likedRecipe";
import axios from "axios";
import Head from "next/head";

function LikedRecipe() {
  const { auth } = useSelector((state) => state);

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  const [likedRecipe, setLikedRecipe] = useState([]);
  const [loadLikedRecipe, setLoadLikedRecipe] = useState(true);

  useEffect(() => {
    if (auth?.token == null) {
      router.replace("/");
      setIsLoadingPage(false);
    } else {
      setIsAuth(true);
      setIsLoadingPage(false);
    }
  });

  useEffect(() => {
    getLikedRecipe();
  }, []);

  const getLikedRecipe = () => {
    const id_user = auth?.profile?.id_user;
    axios
      .post("/api/recipe/likedRecipe", { id_user })
      .then((res) => {
        console.log(res?.data?.data);
        setLikedRecipe(res?.data?.data);
        setLoadLikedRecipe(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Like Recipe | Alamanak</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {isAuth ? (
        <> {isLoadingPage ? <Loader sentences={[]} /> : <> </>} </>
      ) : (
        <Loader sentences={[]} wrapperBackgroundColor="black" />
      )}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col mb-5 mt-4">
            <div className="row align-items-center mb-4">
              <Link href="/Profile">
                <div className={`${stylePopular.link} col-2`}>
                  <FiChevronLeft className={stylePopular.back} />
                </div>
              </Link>
              <div className="col-8">
                <h4 className={`${stylePopular.menuTag} text-center`}>
                  Liked Recipe
                </h4>
              </div>
              <div className="col-2">
                <BiLike className={stylePopular.back} />
              </div>
            </div>

            {loadLikedRecipe ? (
              <>
                <div className="col">
                  <div className="card">
                    <div className={styleHome.animatedBg} />
                  </div>
                </div>
              </>
            ) : (
              <>
                {likedRecipe.length > 0 ? (
                  <>
                    {likedRecipe.map((item) => (
                      <LikedRecipeComp
                        key={item?.id_recipe}
                        name={item?.recipe_name}
                        foto={item?.recipe_image}
                        category={item?.name_category}
                        taste={item?.taste}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <div className="col text-center">
                      <h4>Not Found</h4>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LikedRecipe;
