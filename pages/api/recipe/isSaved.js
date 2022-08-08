import axios from "axios";

export default function handler(req, res) {
  const { idUser, idRecipe } = req.body;
  axios
    .post("http://localhost:8000/recipe/find/isSaved", { idUser, idRecipe })
    .then((response) => {
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}
