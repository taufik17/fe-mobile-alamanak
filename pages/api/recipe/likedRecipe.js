import axios from "axios";

export default function handler(req, res) {
  const { id_user } = req.body;
  axios
    .post(`${process.env.BASE_URL}/recipe/findLike/id_user`, { id: id_user })
    .then((response) => {
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data?.message });
    });
}
