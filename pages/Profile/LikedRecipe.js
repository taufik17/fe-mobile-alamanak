import React, { useState, useEffect } from "react";
import stylePopular from "../../styles/Popular.module.css";
import styleProfile from "../../styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiTrash } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Loader from "react-fullpage-custom-loader";
import Head from "next/head";

function LikedRecipe() {
  const { auth } = useSelector((state) => state);

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

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

            <div className={`${styleProfile.cardPopular} card mb-4`}>
              <div className="row align-items-center">
                <div className={`${styleProfile.rmPadRight} col-3`}>
                  <Image
                    className={styleProfile.imgPopular}
                    src="/images/vegan.jpg"
                    alt="Card image"
                    width="100%"
                    height="100%"
                    layout="responsive"
                  />
                </div>
                <div className={`${stylePopular.rmPadRight} col-6`}>
                  <div className="m-2">
                    <h6 className={stylePopular.namePopular}>Veg Loaded</h6>
                    <p className={styleProfile.variant}>In Veg Pizza</p>
                    <span className={styleProfile.taste}>Spicy</span>
                  </div>
                </div>

                <div className="col-3">
                  <div className="m-0">
                    <span>
                      <FiTrash
                        className={`${styleProfile.icon} ${styleProfile.delete} mx-1`}
                      />
                    </span>
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

export default LikedRecipe;
