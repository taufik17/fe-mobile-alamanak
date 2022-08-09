import Image from "next/image";
import { FiTrash, FiEdit } from "react-icons/fi";
import stylePopular from "../../styles/Popular.module.css";
import styleProfile from "../../styles/Profile.module.css";

function LikedRecipe(props) {
  const { name, foto, category, taste } = props;
  return (
    <>
      <div className={`${styleProfile.cardPopular} card mb-4`}>
        <div className="row align-items-center">
          <div className={`${styleProfile.rmPadRight} col-3`}>
            <Image
              className={styleProfile.imgPopular}
              src={foto}
              alt={name}
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className={`${stylePopular.rmPadRight} col-6`}>
            <div className="m-2">
              <h6 className={stylePopular.namePopular}>{name}</h6>
              <p className={styleProfile.variant}>{category}</p>
              <span className={styleProfile.taste}>{taste}</span>
            </div>
          </div>

          <div className="col-3">
            <div className="m-0">
              <span>
                <FiTrash
                  className={`${styleProfile.icon} ${styleProfile.delete} mx-1`}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LikedRecipe;
