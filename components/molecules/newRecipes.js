import Image from "next/image";
import styleHome from "../../styles/Home.module.css";

function NewRecipes(props) {
  const { name, foto } = props;
  const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
  const filter = truncate(name, 15, '...');
  return (
    <>
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
    </>
  );
}

export default NewRecipes;
