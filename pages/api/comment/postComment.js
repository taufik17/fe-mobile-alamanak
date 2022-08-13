import axios from "axios";

export default function handler(req, res) {
  const { idUser, comment, idRecipe } = req.body;
  console.log(idUser, comment, idRecipe );
  axios
    .post("http://localhost:8000/comment/add/id_recipe", {
      idUser,
      comment,
      idRecipe,
    })
    .then((response) => {
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}
