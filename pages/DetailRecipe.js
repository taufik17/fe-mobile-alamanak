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
import { useSelector } from "react-redux";
import axios from "axios";
import Head from "next/head";
import Swal from "sweetalert2";
import Loading from "../components/spinner";
import Comment from "../components/atoms/comment";

function DetailRecipe() {
  const { auth } = useSelector((state) => state);
  const router = useRouter();
  const data = router.query;

  const [dataDetail, setDataDetail] = useState([]);
  const [loadDetail, setLoadDetail] = useState(true);

  const [dataComment, setDataComment] = useState([]);
  const [loadComment, setLoadComment] = useState(null);

  const [isAuth, setIsAuth] = useState(false);

  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDetail();
    getComment();
  }, []);

  useEffect(() => {
    if (auth?.token == null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  });

  const getDetail = () => {
    axios
      .post("/api/recipe/getDetail", { idRecipe: data?.id_recipe })
      .then((res) => {
        setDataDetail(res?.data?.data);
        setLoadDetail(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComment = () => {
    setLoadComment(true);
    axios
      .post("/api/comment/getComment", { idRecipe: data?.id_recipe })
      .then((res) => {
        setDataComment(res?.data?.data);
        setLoadComment(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postComment = () => {
    setIsLoading(true);
    getComment();
    axios
      .post("/api/comment/postComment", {
        idUser: auth?.profile?.id_user,
        comment,
        idRecipe: data?.id_recipe,
      })
      .then((res) => {
        setIsLoading(false);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
          position: "bottom",
        });

        Toast.fire({
          icon: "success",
          title: `${res?.data}`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    getComment();
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
              <div className="col mt-2">
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
                    <a className="cursor">
                      <p className="px-2">
                        <FiArrowLeft
                          className={styleDetailRecipe.back}
                          onClick={() => router.back()}
                        />
                      </p>
                    </a>

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
                          By {item?.name}
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
                        {isAuth ? (
                          <>
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                postComment();
                              }}
                            >
                              <div className="form-floating">
                                <textarea
                                  className={`${styleDetailRecipe.comment} form-control`}
                                  placeholder="Leave a comment here"
                                  required
                                  onChange={(e) => setComment(e.target.value)}
                                  style={{ height: "100px" }}
                                ></textarea>
                                <label htmlFor="floatingTextarea2">
                                  Comment:
                                </label>
                              </div>

                              <div className="d-grid gap-2 mt-4">
                                <button
                                  className={`${styleDetailRecipe.btnPostComment} btn`}
                                  type="submit"
                                  disabled={isLoading}
                                >
                                  {isLoading ? <Loading /> : "Post Comment"}
                                </button>
                              </div>
                            </form>
                          </>
                        ) : (
                          <></>
                        )}

                        <div className="row mt-4 align-items-center">
                          <p>Comment:</p>
                          {loadComment ? (
                            <>
                              <div className="col mt-2">
                                <div className="card">
                                  <div className={styleHome.animatedBg} />
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {dataComment.length > 0 ? (
                                <>
                                  {dataComment.map((item) => (
                                    <>
                                      <Comment
                                        id_comment={item?.id_comment}
                                        comment={item?.text_comment}
                                        name={item?.name}
                                        img={item?.user_image}
                                      />
                                    </>
                                  ))}
                                </>
                              ) : (
                                <>
                                  <small className="text-center text-black-50">
                                    Not Found
                                  </small>
                                </>
                              )}
                            </>
                          )}
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
