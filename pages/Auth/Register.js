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
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../../components/spinner";
import { useRouter } from "next/router";

function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [loadButtonReg, setloadButtonReg] = useState(false);

  const handleRegister = () => {
    setloadButtonReg(true);
    axios
      .post("/api/auth/register", {
        name,
        email,
        phone,
        password,
        confpassword,
      })
      .then((res) => {
        setloadButtonReg(false);
        console.log(res)
        Swal.fire({
          icon: "success",
          title: "Succseed",
          text: res?.data,
        }).then((result) =>
          result.isConfirmed ? router.push("/Auth/Login") : null
        );
      })
      .catch((err) => {
        console.log(err);
        setloadButtonReg(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err?.response?.data?.message,
        });
      })
      .finally(() => {
        setloadButtonReg(false);
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

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRegister();
              }}
            >
              <div className={`${styleRegister.search} mb-4`}>
                <input
                  type="text"
                  className={`${styleRegister.formControl} form-control`}
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <FiUser className={styleRegister.icon} />{" "}
              </div>

              <div className={`${styleRegister.search} mb-4`}>
                <input
                  type="email"
                  className={`${styleRegister.formControl} form-control`}
                  placeholder="E-Mail"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FiMail className={styleRegister.icon} />{" "}
              </div>

              <div className={`${styleRegister.search} mb-4`}>
                <input
                  type="text"
                  className={`${styleRegister.formControl} form-control`}
                  placeholder="Phone Number"
                  required
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FiPhone className={styleRegister.icon} />{" "}
              </div>

              <div className={`${styleRegister.search} mb-4`}>
                <input
                  type="password"
                  className={`${styleRegister.formControl} form-control`}
                  placeholder="Create New Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FiLock className={styleRegister.icon} />{" "}
              </div>

              <div className={`${styleRegister.search} mb-4`}>
                <input
                  type="password"
                  className={`${styleRegister.formControl} form-control`}
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => setConfPassword(e.target.value)}
                />
                <FiUnlock className={styleRegister.icon} />{" "}
              </div>

              <Link href="/Auth/ForgotPassword" passHref>
                <a className="rm-decoration">
                  <p className={styleLogin.forgotPass}>Forgot Password ?</p>
                </a>
              </Link>

              <div className="d-grid gap-2 mb-3">
                <button
                  className={`btn py-3 ${styleLogin.btnLogin}`}
                  type="submit"
                  disabled={loadButtonReg}
                >
                  {loadButtonReg ? <Loading /> : "CREATE"}
                </button>
              </div>
            </form>

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
