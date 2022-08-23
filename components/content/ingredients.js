import styleDetailRecipe from "../../styles/DetailRecipe.module.css";

function Ingredients(props) {
  const { data } = props;
  return (
    <>
      <div className={`${styleDetailRecipe.ingrContent} card mt-3 p-3 mb-4`}>
        {/* <p>
          {data}
        </p> */}
        <div dangerouslySetInnerHTML={{ __html: data }}></div>
      </div>
    </>
  );
}

export default Ingredients;
