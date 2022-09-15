/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import Image from "next/image";
import { FiTrash, FiEdit } from "react-icons/fi";
import stylePopular from "../../styles/Popular.module.css";
import styleProfile from "../../styles/Profile.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function myRecipe(props) {
  const { name, foto, category, taste, id_recipe } = props;
  const send = { id_recipe, name };
  const selector = useSelector;
  const router = useRouter();

  const { auth } = selector((state) => state);
  const userToken = auth?.token;

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Delete ${name} ?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        axios
          .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/recipe/delete`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
            data: {
              idRecipe: id,
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", `${name} has been deleted.`, "success").then(
          router.push({
            pathname: "/Profile/MyRecipe",
            query: { delete: true + id },
          })
        );
      }
    });
  };

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
          <div className={`${stylePopular.rmPadRight} col-5`}>
            <div className="m-2">
              <Link
                href={{
                  pathname: "/DetailRecipe",
                  query: send, // the data
                }}
                passHref
              >
                <a className="rm-decoration">
                  <h6 className={stylePopular.namePopular}>{name}</h6>
                </a>
              </Link>
              <p className={styleProfile.variant}>{category}</p>
              <span className={styleProfile.taste}>{taste}</span>
            </div>
          </div>

          <div className="col-4">
            <div className="m-0">
              <span>
                <FiEdit
                  className={`${styleProfile.icon} ${styleProfile.edit} mx-1`}
                />
                <a className="cursor">
                  <FiTrash
                    className={`${styleProfile.icon} ${styleProfile.delete} mx-1`}
                    onClick={() => {
                      handleDelete(id_recipe, name);
                    }}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default myRecipe;
