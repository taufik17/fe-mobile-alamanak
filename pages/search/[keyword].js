import { useEffect, useState } from "react";
import NavbarBottom from "../../components/navbarBottom";
import styleHome from "../../styles/Home.module.css";
import SearchComp from "../../components/search";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import PopularRecipe from "../../components/molecules/popularRecipeAll";
import NoDataComp from "../../components/atoms/noDataComp";

function Search() {
  const router = useRouter();
  const { keyword } = router.query;

  const [resultSearch, setResultSearch] = useState([]);
  const [countData, setCountData] = useState([]);
  const [loadResult, setLoadResult] = useState(true);

  useEffect(() => {
    handleSearch();
  });

  const handleSearch = () => {
    axios
      .post("/api/recipe/search", { keyword })
      .then((res) => {
        setCountData(res?.data.jumlahData)
        setResultSearch(res?.data?.data);
        setLoadResult(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Search: {keyword} </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <SearchComp />

      <div className="container">
        <div className="row">
          <div className="col mb-5 mt-5">
            <div className="mt-5">
              {loadResult ? (
                <>
                  <div className="col">
                    <div className="card">
                      <div className={styleHome.animatedBg} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                <p className={styleHome.result}>Keyword: {keyword}, {countData} Result. </p>
                  {resultSearch?.length > 0 ? (
                    <>
                      {resultSearch?.map((item) => (
                        <PopularRecipe
                          key={item?.id_recipe}
                          id_recipe={item?.id_recipe}
                          name={item?.recipe_name}
                          foto={item?.recipe_image}
                          taste={item?.taste}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      <NoDataComp />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <NavbarBottom />
    </>
  );
}

export default Search;
