import styleDetailRecipe from "../../styles/DetailRecipe.module.css";

function Ingredients() {
  return (
    <>
      <div className={`${styleDetailRecipe.ingrContent} card mt-3 p-3`}>
        <p>
          - 2 slices whole-grain bread (bakery-fresh recommended) - 1 tablespoon
          hummus - 2 slices tomato - 1/2 small cucumber, thinly sliced
          lengthwise - 1 slice low-fat cheese
        </p>
      </div>
    </>
  );
}

export default Ingredients;
