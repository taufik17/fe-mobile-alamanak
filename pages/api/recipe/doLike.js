import axios from "axios";

export default function handler(req, res) {
  const { idRecipe, idUser, token } = req.body;
  axios
    .post("http://localhost:8000/recipe/addLikeRecipe", {
      idRecipe,
      idUser,
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    })
    .then((response) => {
        console.log("hello", response);
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}
