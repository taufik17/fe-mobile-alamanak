import { FiVideo, FiPlus, FiMinus } from "react-icons/fi";
import styleAddRecipe from "../../styles/AddRecipe.module.css";
import React from "react";

const FormVideoLink = (props) => {
  return props.linkVideo.map((val, idx) => {
    let videoLink = videoLink - idx;
    return (
      <>
      <br />
        <tr key={val.index} style={{borderStyle: "none !important" }}>
          <td className="p-0">
            <div className={`${styleAddRecipe.search}`}>
              <input
                type="text"
                name="videoLink"
                data-id={idx}
                id={videoLink}
                className={`${styleAddRecipe.formControl} form-control`}
                placeholder="Add Video Link"
                required
              />
              <FiVideo className={styleAddRecipe.icon} />{" "}
            </div>
          </td>
          <td>
            {idx === 0 ? (
              <button
                onClick={() => props.add()}
                type="button"
                className="btn btn-primary text-center"
              >
                <i aria-hidden="true">
                  <FiPlus />{" "}
                </i>
              </button>
            ) : (
              <button
                className="btn btn-danger"
                onClick={() => props.delete(val)}
              >
                <i aria-hidden="true">
                  <FiMinus />{" "}
                </i>
              </button>
            )}
          </td>
        </tr>
      </>
    );
  });
};
export default FormVideoLink;
