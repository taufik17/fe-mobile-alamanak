import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styleHome from "../../styles/Home.module.css";
import stylePopular from "../../styles/Popular.module.css";
import { useSelector } from "react-redux";
import Like from "../atoms/like";
import Saved from "../atoms/saved";

function PopularRecipe(props) {
  const { key, id_recipe, name, foto, taste, like, category, id_user } = props;
  const { auth } = useSelector((state) => state);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (auth?.token !== null) {
      setIsAuth(true);
    }
  });

  return (
    <>
      <div className={`${styleHome.cardPopular} card mb-4`}>
        <div className="row align-items-center">
          <div className={`${stylePopular.rmPadRight} col-3`}>
            <div className={stylePopular.imgPopular}>
              <Image src={foto} alt={name} width="325" height="325" />
            </div>
          </div>
          <div className={`${stylePopular.rmPadRight} col-5`}>
            <div className="m-2">
              <h6 className={stylePopular.namePopular}>{name}</h6>
              <p className={stylePopular.variant}> {category} </p>
              <span className={stylePopular.taste}>{taste}</span>
            </div>
          </div>

          {isAuth ? (
            <>
              <div className="col-4">
                <div className="m-0">
                  <span>
                    <Saved key={key} id_recipe={id_recipe} id_user={id_user} name={name} />
                    <Like key={key} id_recipe={id_recipe} id_user={id_user} name={name} />
                  </span>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default PopularRecipe;
