import styleHome from "../../styles/Home.module.css";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeContent() {
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
          <div className="col-md-auto mb-5">
            <div className={`${styleHome.popular} mb-4`}>
              <h5>Popular for You</h5>
              <div className={`${styleHome.category} row text-center`}>
                <div className="col-3">
                  <Image
                    src="/images/1.svg"
                    alt="Soup"
                    width="500"
                    height="500"
                  />
                  <p>Soup</p>
                </div>
                <div className="col-3">
                  <Image
                    src="/images/2.svg"
                    alt="Chicken"
                    width="500"
                    height="500"
                  />
                  <p>Chicken</p>
                </div>
                <div className="col-3">
                  <Image
                    src="/images/3.svg"
                    alt="Seafood"
                    width="500"
                    height="500"
                  />
                  <p>Seafood</p>
                </div>
                <div className="col-3">
                  <Image
                    src="/images/2.svg"
                    alt="Dessert"
                    width="500"
                    height="500"
                  />
                  <p>Dessert</p>
                </div>
              </div>
            </div>

            <h5>New Recipes</h5>
            <Slider {...settings} className="mb-4">
              <div className={`${styleHome.cardNew} card`}>
                <Image
                  className={styleHome.imgNew}
                  src="/images/1.jpg"
                  alt="Card image"
                  width="230"
                  height="260"
                />
                <div className="row card-img-overlay align-items-end">
                  <div className={styleHome.labelNew}>
                    <h4 className={styleHome.cardTitle}>Sate</h4>
                  </div>
                </div>
              </div>

              <div className={`${styleHome.cardNew} card`}>
                <Image
                  className={styleHome.imgNew}
                  src="/images/2.jpg"
                  alt="Card image"
                  width="230"
                  height="260"
                />
                <div className="row card-img-overlay align-items-end">
                  <div className={styleHome.labelNew}>
                    <h4 className={styleHome.cardTitle}>Bananaa Lemonilo</h4>
                  </div>
                </div>
              </div>

              <div className={`${styleHome.cardNew} card`}>
                <Image
                  className={styleHome.imgNew}
                  src="/images/3.jpg"
                  alt="Card image"
                  width="230"
                  height="260"
                />
                <div className="row card-img-overlay align-items-end">
                  <div className={styleHome.labelNew}>
                    <h4 className={styleHome.cardTitle}>Pizza</h4>
                  </div>
                </div>
              </div>

              <div className={`${styleHome.cardNew} card`}>
                <Image
                  className={styleHome.imgNew}
                  src="/images/4.jpg"
                  alt="Card image"
                  width="230"
                  height="260"
                />
                <div className="row card-img-overlay align-items-end">
                  <div className={styleHome.labelNew}>
                    <h4 className={styleHome.cardTitle}>Odading</h4>
                  </div>
                </div>
              </div>
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
