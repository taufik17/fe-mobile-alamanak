import React from "react";
import { FiHome, FiPlusSquare, FiUser } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import navStyle from "../styles/Nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

function NavbarBottom(props) {
  const { auth } = useSelector((state) => state);
  console.log("ini auth",auth);
  const router = useRouter();

  switch (router.pathname) {
    case "/":
      var home = navStyle.active;
      break;
    case "/AddRecipe":
      var recipe = navStyle.active;
      break;
    case "/Profile":
      var profile = navStyle.active;
      break;
    case "/Chat":
      var chat = navStyle.active;
      break;
    default:
      null;
  }

  return (
    <>
      <div className="container text-center fixed-bottom bg-white">
        <div className="row justify-content-md-center justify-content-lg-center">
          <div className="col">
            <nav
              className="navbar navbar-expand navbar-light"
              style={{ height: "50px" }}
            >
              <ul className="navbar-nav nav-justified w-100">
                {!auth?.token ? (
                  <>
                    <Link href="/">
                      <li className={`${navStyle.navItem} ${home}`}>
                        <FiHome />
                      </li>
                    </Link>
                    <Link href="Auth/Login">
                      <li className={`${navStyle.navItem} ${profile}`}>
                        <FiUser />
                      </li>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/">
                      <li className={`${navStyle.navItem} ${home}`}>
                        <FiHome />
                      </li>
                    </Link>
                    <Link href="/AddRecipe">
                      <li className={`${navStyle.navItem} ${recipe}`}>
                        <FiPlusSquare />
                      </li>
                    </Link>
                    <Link href="/Chat">
                      <li className={`${navStyle.navItem} ${chat}`}>
                        <BsChat />
                      </li>
                    </Link>
                    <Link href="Profile">
                      <li className={`${navStyle.navItem} ${profile}`}>
                        <FiUser />
                      </li>
                    </Link>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarBottom;
