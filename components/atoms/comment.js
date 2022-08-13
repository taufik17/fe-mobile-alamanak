import stylePopular from "../../styles/Popular.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styleDetailRecipe from "../../styles/DetailRecipe.module.css";

function Comment(props) {
  const { id_comment, comment, img, name } = props;
  return (
    <>
      <div className={`${stylePopular.rmPadRight} col-2`}>
        <div className={styleDetailRecipe.imgProfileComment}>
          <Image
            src={img}
            alt={name}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="col-10">
        <h6 className="mb-0">{name}</h6>
        <small>{comment}</small>
      </div>
    </>
  );
}

export default Comment;
