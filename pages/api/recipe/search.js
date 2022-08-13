import axios from "axios";

export default function handler(req, res) {
  const { keyword } = req.body;
  axios
    .post("http://localhost:8000/recipe/searchRecipe", {
        keyword,
    })
    .then((response) => {
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}