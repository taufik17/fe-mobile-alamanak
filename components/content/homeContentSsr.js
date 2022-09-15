import styleHome from "../../styles/Home.module.css";
import Slider from "react-slick";
import Link from "next/link";
import { useEffect } from "react";
import NewRecipe from "../molecules/newRecipes";
import CategoryRecipe from "../molecules/categoryRecipe";
import PopularRecipe from "../molecules/popularRecipe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeContentSsr(props) {

  useEffect(() => {
    document.body.style.backgroundColor = "#f8f9fa";
    return () => {
      document.body.style.backgroundColor = "unset";
    };
  });

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 30,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mb-5">
            <div className={`${styleHome.popular} mb-4`}>
              <h5>Popular for You</h5>
              <div className={`${styleHome.category} row text-center`}>
                {props.category.slice(0, 4).map((item) => (
                  <CategoryRecipe
                    key={item?.id_category}
                    id_category={item?.id_category}
                    name={item?.name_category}
                    foto={item?.image}
                  />
                ))}
              </div>
            </div>

            <h5>New Recipes</h5>
            <Slider {...settings} className="mb-4">
              {props.newRecipe.map((item) => (
                <NewRecipe
                  key={item?.id_recipe}
                  id_recipe={item?.id_recipe}
                  name={item?.recipe_name}
                  foto={item?.recipe_image}
                />
              ))}
            </Slider>

            <div className="row justify-content-between">
              <div className="col-8">
                <h5>Popular Recipes</h5>
              </div>
              <div className="col-4">
                <Link href="/Popular">
                  <p className={styleHome.more}>More Info</p>
                </Link>
              </div>
            </div>

            {props.popular.slice(0, 5).map((item) => (
              <PopularRecipe
                key={item?.id_recipe}
                name={item?.recipe_name}
                foto={item?.recipe_image}
                taste={item?.taste}
                like={item?.jumlah}
                id_recipe={item?.id_recipe}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContentSsr;
