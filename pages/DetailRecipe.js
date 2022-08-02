import styleProfile from "../styles/Profile.module.css";
import styleDetailRecipe from "../styles/DetailRecipe.module.css";
import stylePopular from "../styles/Popular.module.css";
import Image from "next/image";
import { Tab, Tabs } from "react-bootstrap";
import { FiBookmark, FiArrowLeft } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import Link from "next/link";
import Ingredients from "../components/content/ingredients";
import VideoStep from "../components/content/videoStep";

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
        <Link href="/" passHref>
          <a>
            <p className={`${styleDetailRecipe.back} px-4`}>
              <FiArrowLeft />
            </p>
          </a>
        </Link>

        <div
          className={`${styleDetailRecipe.posTitleLike} row justify-content-between`}
        >
          <div className="col-5">
            <h3 className="px-4 text-white">Sandwich with Egg</h3>
            <p className={`${styleDetailRecipe.creator} px-4`}>
              By Chef Ronald Humson
            </p>
          </div>
          <div className="col-4 text-center align-self-end">
            <span>
              <FiBookmark
                className={`${stylePopular.icon} ${stylePopular.active} mx-1`}
              />
              <BiLike
                className={`${stylePopular.icon} ${stylePopular.active} mx-1`}
              />
            </span>
          </div>
        </div>
      </div>

      <div className={`${styleDetailRecipe.getUp} container  px-0`}>
        <div className={`${styleProfile.card} card`}>
          <Tabs
            defaultActiveKey="ingredients"
            className={`${styleDetailRecipe.tabTitle} mb-3 mt-4 mx-4`}
          >
            <Tab eventKey="ingredients" title="Ingredients" className="mx-4">
              <Ingredients />
            </Tab>
            <Tab eventKey="video" title="Video Step" className="mx-4">
              <VideoStep />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DetailRecipe;
