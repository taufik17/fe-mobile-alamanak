import { useEffect, useState } from "react";
import styleHome from "../styles/Home.module.css";
import stylePopular from "../styles/Popular.module.css";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { MdOutlineAutoAwesome } from "react-icons/md";
import PopularRecipe from "../components/molecules/popularRecipeAll";
import axios from "axios";

function Popular() {
  const [popularRecipe, setPopularRecipe] = useState([]);
  const [loadPopular, setLoadPopular] = useState(true);

  useEffect(() => {
    getPopular();
  }, []);

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

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-auto mb-5 mt-4">
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
                <MdOutlineAutoAwesome className={stylePopular.back} />
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
