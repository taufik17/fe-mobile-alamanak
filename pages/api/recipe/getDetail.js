import axios from "axios";

export default function handler(req, res) {
  const { idRecipe } = req.body;
  axios
    .post(`${process.env.BASE_URL}/recipe/find/id`, {
      idRecipe,
    })
    .then((response) => {
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}
