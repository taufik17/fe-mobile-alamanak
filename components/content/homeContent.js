import styleHome from "../../styles/Home.module.css";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import NewRecipe from "../molecules/newRecipes";
import CategoryRecipe from "../molecules/categoryRecipe";
import NoDataComp from "../atoms/noDataComp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeContent() {
  const [newRecipe, setNewRecipe] = useState([]);
  const [loadNewRecipe, setLoadNewRecipe] = useState(true);
  const [categoryRecipe, setCategoryRecipe] = useState([]);
  const [loadCategory, setLoadCategory] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = "#f8f9fa";
    return () => {
      document.body.style.backgroundColor = "unset";
    };
  });

  useEffect(() => {
    getNewRecipe();
    getCategory();
  }, []);

  const getNewRecipe = () => {
    axios
      .get("/api/recipe/newRecipe")
      .then((res) => {
        setNewRecipe(res?.data?.data);
        setLoadNewRecipe(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  const getCategory = () => {
    axios
      .get("/api/recipe/categoryRecipe")
      .then((res) => {
        setCategoryRecipe(res?.data?.data.slice(0, 4));
        setLoadCategory(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

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
          <div className="col-md-auto mb-5">
            <div className={`${styleHome.popular} mb-4`}>
              <h5>Popular for You</h5>
              {loadCategory ? (
                <>
                  <div className="col">
                    <div className="card">
                      <div className={styleHome.animatedBg} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`${styleHome.category} row text-center`}>
                    {categoryRecipe.map((item) => (
                      <CategoryRecipe
                        key={item?.id_category}
                        name={item?.name_category}
                        foto={item?.image}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <h5>New Recipes</h5>
            {loadNewRecipe ? (
              <>
                <div className="col">
                  <div className="card">
                    <div className={styleHome.animatedBg} />
                  </div>
                </div>
              </>
            ) : (
              <>
                <Slider {...settings} className="mb-4">
                  {newRecipe.map((item) => (
                    <NewRecipe
                      key={item?.id_recipe}
                      name={item?.recipe_name}
                      foto={item?.recipe_image}
                    />
                  ))}
                </Slider>
              </>
            )}

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

            <Link href="/DetailRecipe">
              <div
                className={`${styleHome.cardPopular} ${styleHome.link} card mb-4`}
              >
                <div className="row align-items-center">
                  <div className="col-4">
                    <div className={styleHome.imgPopular}>
                      <Image
                        src="/images/salmon.jpg"
                        alt="Card image"
                        width="225"
                        height="225"
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="m-2">
                      <h3 className={styleHome.namePopular}>Teriyaki Salmon</h3>
                      <p className={styleHome.taste}>spicy, salted</p>
                      <Image
                        className={styleHome.star}
                        src="/images/star.svg"
                        alt="Star"
                        width="25"
                        height="25"
                      />
                      <span className={styleHome.taste}>{"  "}4.7</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className={`${styleHome.cardPopular} card mb-4`}>
              <div className="row align-items-center">
                <div className="col-4">
                  <div className={styleHome.imgPopular}>
                    <Image
                      src="/images/tuna.jpg"
                      alt="Card image"
                      width="225"
                      height="225"
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="m-2">
                    <h3 className={styleHome.namePopular}>Sushi Tuna</h3>
                    <p className={styleHome.taste}>spicy, salted</p>
                    <Image
                      className={styleHome.star}
                      src="/images/star.svg"
                      alt="Star"
                      width="25"
                      height="25"
                    />
                    <span className={styleHome.taste}>{"  "}4.7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
