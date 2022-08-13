import { useEffect, useState } from "react";
import NavbarBottom from "../../components/navbarBottom";
import styleHome from "../../styles/Home.module.css";
import stylePopular from "../../styles/Popular.module.css";
import SearchComp from "../../components/search";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import PopularRecipe from "../../components/molecules/popularRecipeAll";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";

function Category() {
  const router = useRouter();
  const { slug } = router.query;
  const arr = slug.split("=");
  const category = arr[0];
  const id_category = arr[1];

  const [recipeByCategory, setRecipeByCategory] = useState([]);
  const [loadResult, setLoadResult] = useState(true);

    useEffect(() => {
      getRecipeCategory();
    }, []);

    const getRecipeCategory = () => {
      axios
        .post("/api/recipe/recipeByCategories", { idCategory:id_category })
        .then((res) => {
          setRecipeByCategory(res?.data?.data);
          setLoadResult(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <>
      <Head>
        <title>Category - {category} </title>
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
                  {category}
                </h4>
              </div>
              <div className="col-2">
                <FiFilter className={stylePopular.back} />
              </div>
            </div>

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
                {recipeByCategory.map((item) => (
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

export default Category;
