import axios from "axios";

export default function handler(req, res) {
  const { idRecipe } = req.body;
  axios
    .post("http://localhost:8000/recipe/find/id", {
      idRecipe,
    })
    .then((response) => {
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}
