import NavbarBottom from "../../components/navbarBottom";
import styleAddRecipe from "../../styles/AddRecipe.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-fullpage-custom-loader";
import Head from "next/head";
import dynamic from "next/dynamic";
import axios from "axios";

function EditMyRecipe() {
  const Editor = dynamic(() => import("../../components/editorEdit"), {
    ssr: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [dataEdit, setDataEdit] = useState([]);

  const router = useRouter();
  const { auth } = useSelector((state) => state);
  useEffect(() => {
    if (!auth?.token) {
      router.replace("/");
      setIsLoading(false);
    } else {
      setIsAuth(true);
      getDataEdit();
      setIsLoading(false);
    }
  }, []);
  const { idRecipe, name } = router?.query;

  const getDataEdit = () => {
    axios
      .post("/api/recipe/getDetail", { idRecipe })
      .then((res) => {
        setDataEdit(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#E5E5E5";
    return () => {
      document.body.style.backgroundColor = "unset";
    };
  });

  return (
    <>
      <Head>
        <title>Edit Recipe | {name}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {isAuth ? (
        <> {isLoading ? <Loader sentences={[]} /> : <> </>} </>
      ) : (
        <Loader sentences={[]} wrapperBackgroundColor="black" />
      )}
      <div className="container box-shadow text-center">
        <NavbarBottom />
        <div className="row pt-4 align-items-center mb-4">
          <div className="col">
            <h4 className={`${styleAddRecipe.menuTag} text-center`}>
              Edit {name}
            </h4>
          </div>
        </div>

        <div className="mt-4">
          {dataEdit.map((item) => (
            <Editor
              key={item?.id_recipe}
              ingredients={item?.ingredients}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default EditMyRecipe;
