import React, { useState, useEffect } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import styleLogin from "../../styles/Login.module.css";
import Loading from "../../components/spinner";
import Swal from "sweetalert2";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import * as Type from "../../redux/auth/type";
import Loader from "react-fullpage-custom-loader";
import Head from "next/head";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { auth } = useSelector((state) => state);

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (auth?.profile?.token) {
      router.replace("/");
      setIsLoadingPage(false);
    } else {
      setIsAuth(true);
      setIsLoadingPage(false);
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadLogin, setIsLoadLogin] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post("/api/auth/login", { email, password })
      .then((res) => {
        dispatch({
          type: Type.SET_AUTH,
          payload: {
            token: res?.data?.token,
            user: res?.data?.user,
          },
        });
        Swal.fire({
          icon: "success",
          title: "Succseed",
          text: "Berhasil Login",
        })
          .then((result) => (result.isConfirmed ? setIsLoadLogin(true) : null))
          .then(router.replace("/"))
          .then(setIsLoadLogin(false));
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err?.response?.data?.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Head>
        <title>Login | Alamanak</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      {loadLogin ? (
        <>
          <Loader sentences={[]} />
        </>
      ) : (
        <> </>
      )}

      {isAuth ? (
        <> {isLoadingPage ? <Loader sentences={[]} /> : <> </>} </>
      ) : (
        <Loader sentences={[]} wrapperBackgroundColor="black" />
      )}
      <div className="container text-center">
        <div className="row justify-content-lg-center">
          <div className="col">
            <FiUser className={`${styleLogin.iconUser} rounded-circle`} />

            <h3 className={styleLogin.welcome}>Welcome !</h3>
            <p className={styleLogin.desc}>Log in to your exiting account.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className={`${styleLogin.search} mb-4`}>
                <input
                  type="email"
                  className={`${styleLogin.formControl} form-control`}
                  placeholder="examplexxx@gmail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FiUser className={styleLogin.icon} />{" "}
              </div>

              <div className={styleLogin.search}>
                <input
                  type="password"
                  className={`${styleLogin.formControl} form-control`}
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FiLock className={styleLogin.icon} />{" "}
              </div>

              <Link href="/Auth/ForgotPassword">
                <p className={styleLogin.forgotPass}>Forgot Password ?</p>
              </Link>

              <div className={`${styleLogin.btn} d-grid gap-2 mb-3`}>
                <button
                  className={`btn py-3 ${styleLogin.btnLogin}`}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Loading /> : "LOG IN"}
                </button>
              </div>
            </form>

            <p className={styleLogin.ask}>
              Don’t have an account?{" "}
              <Link href="/Auth/Register">
                <span className={styleLogin.reg}>Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
