import { FiHome, FiPlusSquare, FiUser } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import navStyle from "../styles/Nav.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';

function NavbarBottom() {
  const router = useRouter();
  if (router.pathname == "/") {
    var home = navStyle.active;
  }
  if (router.pathname == "/AddRecipe") {
    var recipe = navStyle.active;
  }
  if (router.pathname == "/Profile") {
    var profile = navStyle.active;
  }
  if (router.pathname == "/Chat") {
    var chat = navStyle.active;
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
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarBottom;
