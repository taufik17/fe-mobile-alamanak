import React, { useState, useEffect } from "react";
import stylePopular from "../../styles/Popular.module.css";
import styleHome from "../../styles/Home.module.css";
import Link from "next/link";
import { FiChevronLeft, FiAward } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "react-fullpage-custom-loader";
import MyRecipeComp from "../../components/molecules/myRecipe";
import Head from "next/head";

function MyRecipe() {
  const { auth } = useSelector((state) => state);

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  const param = router?.query?.delete;

  const [myRecipe, setMyRecipe] = useState([]);
  const [loadMyRecipe, setLoadMyRecipe] = useState(true);

  useEffect(() => {
    setMyRecipe([]);
    setLoadMyRecipe(true);
    getMyRecipe();
  }, [param]);

  const getMyRecipe = () => {
    const id_user = auth?.profile?.id_user;
    axios
      .post("/api/recipe/myRecipe", { id_user })
      .then((res) => {
        setMyRecipe(res?.data?.data);
        setLoadMyRecipe(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    if (auth?.token == null) {
      router.replace("/");
      setIsLoadingPage(false);
    } else {
      setIsAuth(true);
      setIsLoadingPage(false);
    }
  });

  return (
    <>
      <Head>
        <title>My Recipe | Alamanak</title>
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
                  My Recipe
                </h4>
              </div>
              <div className="col-2">
                <FiAward className={stylePopular.back} />
              </div>
            </div>

            {loadMyRecipe ? (
              <>
                <div className="col">
                  <div className="card">
                    <div className={styleHome.animatedBg} />
                  </div>
                </div>
              </>
            ) : (
              <>
                {myRecipe.length > 0 ? (
                  <>
                    {myRecipe.map((item) => (
                      <MyRecipeComp
                        key={item?.id_recipe}
                        id_recipe={item?.id_recipe}
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

export default MyRecipe;
