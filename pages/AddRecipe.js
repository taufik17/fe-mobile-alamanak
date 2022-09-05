import NavbarBottom from "../components/navbarBottom";
import styleAddRecipe from "../styles/AddRecipe.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Loader from "react-fullpage-custom-loader";
import Head from "next/head";
import dynamic from "next/dynamic";

function AddRecipe() {
    const Editor = dynamic(() => import("../components/editor"), {
        ssr: false,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
   
    const router = useRouter();
    const { auth } = useSelector((state) => state);
    useEffect(() => {
        if (!auth?.token) {
            router.replace("/");
            setIsLoading(false);
        } else {
            setIsAuth(true);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = "#E5E5E5";
        return () => {
            document.body.style.backgroundColor = "unset";
        };
    });

    

    return (
        <>
            <Head>
                <title>Add Recipe | Alamanak</title>
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
                            Add Your Recipe
                        </h4>
                    </div>
                </div>

                
                    <div className="mt-4">
                        <Editor
                            value={
                                "<h4>Deskripsi :</h4><p>&nbsp;</p><h4>Bahan :</h4><p>&nbsp;</p><h4>Cara Memasak :</h4><p>&nbsp;</p>"
                            }
                        />
                    </div>

                    
            </div>
        </>
    );
}

export default AddRecipe;
