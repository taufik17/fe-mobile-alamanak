import { useEffect, useState } from "react";
import styleHome from "../styles/Home.module.css";
import stylePopular from "../styles/Popular.module.css";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { ImSortAmountDesc, ImSortAmountAsc } from "react-icons/im";
import PopularRecipe from "../components/molecules/popularRecipeAll";
import axios from "axios";
import Head from "next/head";

function Popular() {
  const [popularRecipe, setPopularRecipe] = useState([]);
  const [loadPopular, setLoadPopular] = useState(true);
  const [sort, setSort] = useState(false);
  const [asc, setAsc] = useState(false);
  const [desc, setDesc] = useState(false);
  console.log("sort", sort);

  useEffect(() => {
    if (sort == false) {
      setLoadPopular(true);
      setPopularRecipe([]);
      getPopular();
    }
    else if (sort == "asc") {
      setLoadPopular(true);
      setPopularRecipe([]);
      getPopularasc();
    }
    else if (sort == "desc") {
      setLoadPopular(true);
      setPopularRecipe([]);
      getPopulardesc();
    }
  }, [sort]);

  const getPopular = () => {
    axios
      .get("/api/recipe/popular")
      .then((res) => {
        setPopularRecipe(res?.data?.data);
        setLoadPopular(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadPopular(false);
      });
  };
  const getPopularasc = () => {
    axios
      .get("/api/recipe/popularasc")
      .then((res) => {
        setPopularRecipe(res?.data?.data);
        setLoadPopular(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadPopular(false);
      });
  };
  
  const getPopulardesc = () => {
    axios
      .get("/api/recipe/populardesc")
      .then((res) => {
        setPopularRecipe(res?.data?.data);
        setLoadPopular(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadPopular(false);
      });
  };

  const activeasc = () => {
    setSort("asc");
    setAsc(true);
  };

  const activedesc = () => {
    setSort("desc");
    setAsc(false);
    setDesc(true);
  };

  const offsort = () => {
    setSort(false);
    setAsc(false);
    setDesc(false);
  };

  return (
    <>
      <Head>
        <title>Popular Recipe</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="container">
        <div className="row">
          <div className="col mb-5 mt-4">
            <div className="row align-items-center mb-4">
              <Link href="/">
                <div className={`${stylePopular.link} col-2`}>
                  <FiChevronLeft className={stylePopular.back} />
                </div>
              </Link>
              <div className="col-8">
                <h4 className={`${stylePopular.menuTag} text-center`}>
                  Popular Menu
                </h4>
              </div>
              <div className="col-2">
                {asc ? (
                  <>
                    <ImSortAmountAsc
                      className={`${stylePopular.back} ${stylePopular.sortActive} cursor`}
                      onClick={activedesc}
                    />
                  </>
                ) : (
                  <>
                    {desc ? (
                      <>
                        <>
                          <ImSortAmountDesc
                            className={`${stylePopular.back} ${stylePopular.sortActive} cursor`}
                            onClick={offsort}
                          />
                        </>
                      </>
                    ) : (
                      <>
                        <ImSortAmountAsc
                          className={`${stylePopular.back} cursor`}
                          onClick={activeasc}
                        />
                      </>
                    )}
                  </>
                )}
              </div>
            </div>

            {loadPopular ? (
              <>
                <div className="col">
                  <div className="card">
                    <div className={styleHome.animatedBg} />
                  </div>
                </div>
              </>
            ) : (
              <>
                {popularRecipe.map((item) => (
                  <PopularRecipe
                    key={item?.id_recipe}
                    id_recipe={item?.id_recipe}
                    name={item?.recipe_name}
                    foto={item?.recipe_image}
                    taste={item?.taste}
                    like={item?.jumlah}
                    category={item?.name_category}
                    id_user={item?.id_user}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Popular;
