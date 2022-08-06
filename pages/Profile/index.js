import NavbarBottom from "../../components/navbarBottom";
import { FiUser, FiChevronRight, FiAward, FiBookmark } from "react-icons/fi";
import Swal from "sweetalert2";
import { BiLogOut } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import styleProfile from "../../styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as Type from "../../redux/auth/type";

function Index() {
  const dispacth = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        dispacth({type: Type.REMOVE_AUTH})
        router.replace("/")
      }
    });
  };
  return (
    <>
      <div className="container px-0">
        <NavbarBottom />
        <div className={styleProfile.bgOrange}>
          <div className="text-center pt-5">
            <Image
              className={styleProfile.imgProfile}
              src="/images/profile.jpg"
              alt="Card image"
              width="120"
              height="120"
            />
            <h4 className={`${styleProfile.name} mt-2`}>
              Taufik Agung Santoso
            </h4>
          </div>
        </div>
      </div>

      <div className={`${styleProfile.getUp} container`}>
        <div className={`${styleProfile.card} card`}>
          <Link href="/Profile/Edit">
            <div className={`${styleProfile.cur} row p-3 pt-4`}>
              <div className="col-2 text-center">
                <FiUser className={styleProfile.icon} />
              </div>
              <div className="col-8">
                <h6>Edit Profile</h6>
              </div>
              <div className="col-2 text-center">
                <FiChevronRight />
              </div>
            </div>
          </Link>

          <Link href="/Profile/MyRecipe">
            <div className={`${styleProfile.cur} row p-3`}>
              <div className="col-2 text-center">
                <FiAward className={styleProfile.icon} />
              </div>
              <div className="col-8">
                <h6>My Recipe</h6>
              </div>
              <div className="col-2 text-center">
                <FiChevronRight />
              </div>
            </div>
          </Link>

          <Link href="/Profile/SavedRecipe">
            <div className={`${styleProfile.cur} row p-3`}>
              <div className="col-2 text-center">
                <FiBookmark className={styleProfile.icon} />
              </div>
              <div className="col-8">
                <h6>Saved Recipe</h6>
              </div>
              <div className="col-2 text-center">
                <FiChevronRight />
              </div>
            </div>
          </Link>

          <Link href="/Profile/LikedRecipe">
            <div className={`${styleProfile.cur} row p-3`}>
              <div className="col-2 text-center">
                <BiLike className={styleProfile.icon} />
              </div>
              <div className="col-8">
                <h6>Liked Recipe</h6>
              </div>
              <div className="col-2 text-center">
                <FiChevronRight />
              </div>
            </div>
          </Link>

          <div className="row text-center">
            <div className="col mt-5">
              <div className="d-grid mb-5 pt-5 mx-5">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={handleLogout}
                >
                  <h5 className="my-1">
                    <BiLogOut /> Logout
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
