import styleHome from "../../styles/Home.module.css";
import stylePopular from "../../styles/Popular.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

function LikedRecipe() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-auto mb-5 mt-4">
            <div className="row align-items-center mb-4">
              <Link href="/Profile">
                <div className={`${stylePopular.link} col-2`}>
                  <FiChevronLeft className={stylePopular.back} />
                </div>
              </Link>
              <div className="col-10">
                <h4 className={`${stylePopular.menuTag} text-center`}>
                  Liked Recipe
                </h4>
              </div>
            </div>

            <div className={`${styleHome.cardPopular} card mb-4`}>
              <div className="row align-items-center">
                <div className={`${stylePopular.rmPadRight} col-3`}>
                  <div className={stylePopular.imgPopular}>
                    <Image
                      src="/images/Margherita.jpg"
                      alt="Card image"
                      width="325"
                      height="325"
                    />
                  </div>
                </div>
                <div className={`${stylePopular.rmPadRight} col-9`}>
                  <div className="m-2">
                    <h5 className={stylePopular.namePopular}>Margherita</h5>
                    <p className={stylePopular.variant}>In Veg Pizza</p>
                    <span className={stylePopular.taste}>Spicy</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${styleHome.cardPopular} card mb-4`}>
              <div className="row align-items-center">
                <div className={`${stylePopular.rmPadRight} col-3`}>
                  <div className={stylePopular.imgPopular}>
                    <Image
                      src="/images/melon.jpg"
                      alt="Card image"
                      width="325"
                      height="325"
                    />
                  </div>
                </div>
                <div className={`${stylePopular.rmPadRight} col-9`}>
                  <div className="m-2">
                    <h5 className={stylePopular.namePopular}>Melon</h5>
                    <p className={stylePopular.variant}>In Veg Pizza</p>
                    <span className={stylePopular.taste}>Fresh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LikedRecipe