import { FiUser, FiLock } from "react-icons/fi";
import styleLogin from "../../styles/Login.module.css";
import Link from "next/link";

function Login() {
  return (
    <>
      <div className="container text-center">
        <div className="row justify-content-lg-center">
          <div className="col">
            <FiUser className={`${styleLogin.iconUser} rounded-circle`} />

            <h3 className={styleLogin.welcome}>Welcome !</h3>
            <p className={styleLogin.desc}>Log in to your exiting account.</p>

            <div className={`${styleLogin.search} mb-4`}>
              <input
                type="text"
                className={`${styleLogin.formControl} form-control`}
                placeholder="examplexxx@gmail.com"
              />
              <FiUser className={styleLogin.icon} />{" "}
            </div>

            <div className={styleLogin.search}>
              <input
                type="password"
                className={`${styleLogin.formControl} form-control`}
                placeholder="Password"
              />
              <FiLock className={styleLogin.icon} />{" "}
            </div>

            <Link href="/Auth/ForgotPassword">
              <p className={styleLogin.forgotPass}>Forgot Password ?</p>
            </Link>

            <div className="d-grid gap-2 mb-3">
              <button className={`btn py-3 ${styleLogin.btnLogin}`} type="submit">
                LOG IN
              </button>
            </div>

            <p className={styleLogin.ask}>Don’t have an account? {" "}
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
