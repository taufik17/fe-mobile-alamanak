import styleDetailRecipe from "../../styles/DetailRecipe.module.css";

function Ingredients(props) {
  const { data } = props;
  return (
    <>
      <div className={`${styleDetailRecipe.ingrContent} card mt-3 p-3 mb-4`}>
        {/* <p>
          {data}
        </p> */}
        <p dangerouslySetInnerHTML={{ __html: data }}></p>
      </div>
    </>
  );
}

export default Ingredients;
