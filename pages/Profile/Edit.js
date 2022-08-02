import styleEdit from "../../styles/Edit.module.css";
import stylePopular from "../../styles/Popular.module.css";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

function Edit() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mb-5 mt-4">
            <div className="row align-items-center mb-4">
              <Link href="/Profile">
                <div className={`${stylePopular.link} col-2`}>
                  <FiChevronLeft className={stylePopular.back} />
                </div>
              </Link>
              <div className="col-10">
                <h4 className={`${stylePopular.menuTag} text-center`}>
                  Edit Profile
                </h4>
              </div>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">Change Profile Picture</li>
              <li className="list-group-item">Change Password</li>
              <li className="list-group-item"> </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container text-center fixed-bottom bg-white">
        <div className="row justify-content-md-center justify-content-lg-center">
          <div className="col">
            <div className="d-grid gap-2 mb-5">
              <Link href="/Profile">
                <button className={`${styleEdit.btnCancel} btn`} type="button">
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
