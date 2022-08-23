import { FiVideo, FiPlus, FiMinus } from "react-icons/fi";
import styleAddRecipe from "../../styles/AddRecipe.module.css";
import React from "react";

const TaskList = (props) => {
  return props.taskList.map((val, idx) => {
    let projectName = projectName - idx;
    return (
      <>
        <tr key={val.index}>
          <td className="p-0">
            <div className={`${styleAddRecipe.search}`}>
              <input
                type="text"
                name="projectName"
                data-id={idx}
                id={projectName}
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
export default TaskList;
