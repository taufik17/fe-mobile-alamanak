import Image from "next/image";
import styleHome from "../../styles/Home.module.css";
import Link from "next/link";

function NewRecipes(props) {
  const { id_recipe, name, foto } = props;
  const send = {id_recipe, name};
  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;
  const filter = truncate(name, 15, "...");
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
          <div className={`${styleHome.cardNew} card`}>
            <Image
              className={styleHome.imgNew}
              src={foto}
              alt={name}
              width="230"
              height="300"
              loading="lazy"
            />
            <div className="row card-img-overlay align-items-end">
              <div className={styleHome.labelNew}>
                <h6 className={styleHome.cardTitle}>{filter}</h6>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default NewRecipes;
