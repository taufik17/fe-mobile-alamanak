import NavbarBottom from "../../components/navbarBottom";
import { FiUser, FiChevronRight, FiAward, FiBookmark } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import styleProfile from "../../styles/Profile.module.css";
import Image from "next/image";
import Link from "next/link";

function Index() {
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
        </div>
      </div>
    </>
  );
}

export default Index;
