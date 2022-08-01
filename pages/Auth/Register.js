import {
  FiUser,
  FiLock,
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiUnlock,
} from "react-icons/fi";
import styleLogin from "../../styles/Login.module.css";
import styleRegister from "../../styles/Reg.module.css";
import Link from "next/link";
import { useEffect } from "react";

function Register() {
  useEffect(() => {
    document.body.style.backgroundColor = "#E5E5E5";
    return () => {
      document.body.style.backgroundColor = "unset";
    };
  });
  return (
    <>
      <div className={`container text-center`}>
        <div className="row justify-content-lg-center">
          <div className="col">
            <div className={`${styleRegister.backIcon} mt-3`}>
              <Link href="/Auth/Login">
                <FiArrowLeft className={styleRegister.pointer} />
              </Link>
            </div>

            <h2 className={styleLogin.welcome}>Let’s Get Started !</h2>

            <p className={`${styleRegister.desc} mb-5`}>
              Create new account to access all feautures
            </p>

            <div className={`${styleRegister.search} mb-4`}>
              <input
                type="text"
                className={`${styleRegister.formControl} form-control`}
                placeholder="Name"
              />
              <FiUser className={styleRegister.icon} />{" "}
            </div>

            <div className={`${styleRegister.search} mb-4`}>
              <input
                type="email"
                className={`${styleRegister.formControl} form-control`}
                placeholder="E-Mail"
              />
              <FiMail className={styleRegister.icon} />{" "}
            </div>

            <div className={`${styleRegister.search} mb-4`}>
              <input
                type="text"
                className={`${styleRegister.formControl} form-control`}
                placeholder="Phone Number"
              />
              <FiPhone className={styleRegister.icon} />{" "}
            </div>

            <div className={`${styleRegister.search} mb-4`}>
              <input
                type="password"
                className={`${styleRegister.formControl} form-control`}
                placeholder="Create New Password"
              />
              <FiLock className={styleRegister.icon} />{" "}
            </div>

            <div className={`${styleRegister.search} mb-4`}>
              <input
                type="password"
                className={`${styleRegister.formControl} form-control`}
                placeholder="Confirm Password"
              />
              <FiUnlock className={styleRegister.icon} />{" "}
            </div>

            <Link href="/Auth/ForgotPassword">
              <p className={styleLogin.forgotPass}>Forgot Password ?</p>
            </Link>

            <div className="d-grid gap-2 mb-3">
              <button
                className={`btn py-3 ${styleLogin.btnLogin}`}
                type="submit"
              >
                CREATE
              </button>
            </div>

            <p className={styleLogin.ask}>
              Already have account?{" "}
              <Link href="/Auth/Login">
                <span className={styleLogin.reg}>Log in Here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
