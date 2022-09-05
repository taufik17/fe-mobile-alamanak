import axios from "axios";

export default function handler(req, res) {
  const { idRecipe, idUser, token } = req.body;
  axios
    .post(`${process.env.BASE_URL}/recipe/addLikeRecipe`, {
      idRecipe,
      idUser,
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    })
    .then((response) => {
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}
