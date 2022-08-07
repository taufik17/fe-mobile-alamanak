import Link from "next/link";
import Image from "next/image";
import styleHome from "../../styles/Home.module.css";
import stylePopular from "../../styles/Popular.module.css";
import { BiLike } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";

function popularRecipe(props) {
  const { key, name, foto, taste, like, category } = props;
  return (
    <>
      <div className={`${styleHome.cardPopular} card mb-4`}>
        <div className="row align-items-center">
          <div className={`${stylePopular.rmPadRight} col-3`}>
            <div className={stylePopular.imgPopular}>
              <Image
                src={foto}
                alt={name}
                width="325"
                height="325"
              />
            </div>
          </div>
          <div className={`${stylePopular.rmPadRight} col-5`}>
            <div className="m-2">
              <h6 className={stylePopular.namePopular}>{name}</h6>
              <p className={stylePopular.variant}> {category} </p>
              <span className={stylePopular.taste}>{taste}</span>
            </div>
          </div>

          <div className="col-4">
            <div className="m-0">
              <span>
                <FiBookmark
                  className={`${stylePopular.icon} ${stylePopular.active} mx-1`}
                />
                <BiLike className={`${stylePopular.icon} mx-1`} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default popularRecipe;
