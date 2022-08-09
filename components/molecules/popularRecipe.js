import Link from "next/link";
import Image from "next/image";
import styleHome from "../../styles/Home.module.css";
import { BiLike } from "react-icons/bi";

function popularRecipe(props) {
  const { name, foto, taste, like, id_recipe } = props;
  const send = {id_recipe, name};
  return (
    <>
      <Link
        href={{
          pathname: "/DetailRecipe",
          query: send, // the data
        }}
        passHref
      >
        <a className="rm-decoration">
          <div
            className={`${styleHome.cardPopular} ${styleHome.link} card mb-4`}
          >
            <div className="row align-items-center">
              <div className="col-4">
                <div className={styleHome.imgPopular}>
                  <Image src={foto} alt={name} width="225" height="225" />
                </div>
              </div>
              <div className="col-8">
                <div className="m-2">
                  <h5 className={styleHome.namePopular}>{name}</h5>
                  <p className={styleHome.taste}>{taste}</p>
                  <BiLike className={styleHome.star} />
                  <span className={`${styleHome.taste}`}>
                    {"  "}
                    {like}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default popularRecipe;
