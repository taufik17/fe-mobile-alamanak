import style from "../../styles/NotFound.module.css";
import { FiDatabase } from "react-icons/fi";

function NoDataComp() {
  return (
    <>
      <div className={`${style.card} card text-dark text-center bg-light mb-3`}>
        <div className="card-body p-4">
        <FiDatabase className={style.iconDb} />
          <h5 className={`${style.text} card-title`}>No Data</h5>
        </div>
      </div>
    </>
  );
}

export default NoDataComp;
