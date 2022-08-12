import React from "react";
import styleDetailRecipe from "../styles/DetailRecipe.module.css";
import stylePopular from "../styles/Popular.module.css";
import styleHome from "../styles/Home.module.css";
import Image from "next/image";
import { Tab, Tabs } from "react-bootstrap";
import { FiBookmark, FiArrowLeft } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import Link from "next/link";
import Ingredients from "../components/content/ingredients";
import VideoStep from "../components/content/videoStep";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

function DetailRecipe() {
  const router = useRouter();
  const data = router.query;

  const [dataDetail, setDataDetail] = useState([]);
  const [loadDetail, setLoadDetail] = useState(true);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = () => {
    axios
      .post("/api/recipe/getDetail", { idRecipe: data?.id_recipe })
      .then((res) => {
        console.log(res?.data?.data);
        setDataDetail(res?.data?.data);
        setLoadDetail(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadDetail(false);
      });
  };

  return (
    <>
      <Head>
        <title>Detail - {data.name}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="container">
        <div className="row">
          {loadDetail ? (
            <>
              <div className="col">
                <div className="card">
                  <div className={styleHome.animatedBg} />
                </div>
              </div>
            </>
          ) : (
            <>
              {dataDetail.map((item) => (
                <>
                  <div className="container px-0">
                    <Image
                      className={styleDetailRecipe.imgProfile}
                      src={item?.recipe_image}
                      alt={item?.recipe_name}
                      width="100%"
                      height="80px"
                      layout="responsive"
                    />
                    <Link href="/" passHref>
                      <a>
                        <p className="px-2">
                          <FiArrowLeft className={styleDetailRecipe.back} />
                        </p>
                      </a>
                    </Link>

                    <div
                      className={`${styleDetailRecipe.posTitleLike} row justify-content-between mx-0`}
                    >
                      <div className="col-6">
                        <h3
                          className={`${styleDetailRecipe.textTitle} px-3 py-2 mb-0 text-white`}
                        >
                          {item?.recipe_name}
                        </h3>
                        <p className={`${styleDetailRecipe.creator} px-3`}>
                          By Chef Ronald Humson
                        </p>
                      </div>
                      <div className="col-4 text-center align-self-end">
                        <span>
                          <FiBookmark
                            className={`${stylePopular.icon} ${stylePopular.active} mx-1`}
                          />
                          <BiLike
                            className={`${stylePopular.icon} ${stylePopular.active} mx-1`}
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`${styleDetailRecipe.getUp} container  px-0`}>
                    <div className={`${styleDetailRecipe.card} card`}>
                      <Tabs
                        defaultActiveKey="ingredients"
                        className={`${styleDetailRecipe.tabTitle} mb-3 mt-4 mx-4`}
                      >
                        <Tab
                          eventKey="ingredients"
                          title="Ingredients"
                          className="mx-4"
                        >
                          <Ingredients data={item?.ingredients} />
                        </Tab>
                        <Tab
                          eventKey="video"
                          title="Video Step"
                          className="mx-4"
                        >
                          <VideoStep />
                        </Tab>
                      </Tabs>

                      <div className="mt-2 mx-4 mb-5">
                        <div className="form-floating">
                          <textarea
                            className={`${styleDetailRecipe.comment} form-control`}
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                          ></textarea>
                          <label htmlFor="floatingTextarea2">Comment:</label>
                        </div>

                        <div className="d-grid gap-2 mt-4">
                          <button
                            className={`${styleDetailRecipe.btnPostComment} btn`}
                            type="submit"
                          >
                            Post Comment
                          </button>
                        </div>

                        <div className="row mt-4 align-items-center">
                          <p>Comment:</p>
                          <div className={`${stylePopular.rmPadRight} col-2`}>
                            <div
                              className={styleDetailRecipe.imgProfileComment}
                            >
                              <Image
                                src="/images/profile.jpg"
                                alt="Card image"
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </div>
                          <div className="col-10">
                            <h6>Ayudia</h6>
                            <small>
                              Nice recipe. simple and delicious, thankyou
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailRecipe;
