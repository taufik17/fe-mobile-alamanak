import { FiUser, FiChevronRight, FiAward, FiBookmark } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import styleProfile from "../styles/Profile.module.css";
import styleDetailRecipe from "../styles/DetailRecipe.module.css";
import Image from "next/image";
import Link from "next/link";

function DetailRecipe() {
  return (
    <>
      <div className="container px-0">
        <Image
          className={styleDetailRecipe.imgProfile}
          src="/images/egg.jpg"
          alt="Card image"
          width="100%"
          height="80px"
          layout="responsive"
        />
      </div>

      <div className={`${styleDetailRecipe.getUp} container  px-0`}>
        <div className={`${styleProfile.card} card`}>
          <nav className="p-4">
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Ingredients
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Video Step
              </button>
              
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active px-4"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabIndex="0"
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="nav-disabled"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
              ...
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailRecipe;
