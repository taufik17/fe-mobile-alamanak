import styleDetailRecipe from "../../styles/DetailRecipe.module.css";
import stylePopular from "../../styles/Popular.module.css";
import Image from "next/image";
import Link from "next/link";

function VideoStep() {
  return (
    <>
      <Link href="/Video" passHref>
        <a className="rm-decoration">
          <div className={`${styleDetailRecipe.cardVideo} card mb-4`}>
            <div className="row align-items-center p-2">
              <div className={`${stylePopular.rmPadRight} col-3`}>
                <div className={stylePopular.imgPopular}>
                  <Image
                    src="/images/vid.svg"
                    alt="Card image"
                    width="325"
                    height="325"
                  />
                </div>
              </div>
              <div className={`${stylePopular.rmPadRight} col-9`}>
                <div className="m-2">
                  <h5 className={styleDetailRecipe.step}>Step 1</h5>
                  <p className={styleDetailRecipe.shortDesc}>
                    Boil eggs for 3 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>

      <div className={`${styleDetailRecipe.cardVideo} card mb-4`}>
        <div className="row align-items-center p-2">
          <div className={`${stylePopular.rmPadRight} col-3`}>
            <div className={stylePopular.imgPopular}>
              <Image
                src="/images/vid.svg"
                alt="Card image"
                width="325"
                height="325"
              />
            </div>
          </div>
          <div className={`${stylePopular.rmPadRight} col-9`}>
            <div className="m-2">
              <h5 className={styleDetailRecipe.step}>Step 2</h5>
              <p className={styleDetailRecipe.shortDesc}>
                Boil eggs for 3 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styleDetailRecipe.cardVideo} card mb-4`}>
        <div className="row align-items-center p-2">
          <div className={`${stylePopular.rmPadRight} col-3`}>
            <div className={stylePopular.imgPopular}>
              <Image
                src="/images/vid.svg"
                alt="Card image"
                width="325"
                height="325"
              />
            </div>
          </div>
          <div className={`${stylePopular.rmPadRight} col-9`}>
            <div className="m-2">
              <h5 className={styleDetailRecipe.step}>Step 3</h5>
              <p className={styleDetailRecipe.shortDesc}>
                Boil eggs for 3 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styleDetailRecipe.cardVideo} card mb-4`}>
        <div className="row align-items-center p-2">
          <div className={`${stylePopular.rmPadRight} col-3`}>
            <div className={stylePopular.imgPopular}>
              <Image
                src="/images/vid.svg"
                alt="Card image"
                width="325"
                height="325"
              />
            </div>
          </div>
          <div className={`${stylePopular.rmPadRight} col-9`}>
            <div className="m-2">
              <h5 className={styleDetailRecipe.step}>Step 4</h5>
              <p className={styleDetailRecipe.shortDesc}>
                Boil eggs for 3 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoStep;
