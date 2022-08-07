import Image from "next/image";

function NewRecipes(props) {
  const { name, foto } = props;
  return (
    <>
      <div className="col-3">
        <Image src={foto} alt={name} width="500" height="500" />
        <p>{name}</p>
      </div>
    </>
  );
}

export default NewRecipes;
