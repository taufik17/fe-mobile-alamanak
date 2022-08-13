import Image from "next/image";
import Link from "next/link";

function NewRecipes(props) {
  const { id_category, name, foto } = props;
  const link = `/categories/${name}=${id_category}`;
  return (
    <>
      <Link href={link} passHref>
        <div className="col-3 cursor">
          <Image src={foto} alt={name} width="500" height="500" />
          <p>{name}</p>
        </div>
      </Link>
    </>
  );
}

export default NewRecipes;
