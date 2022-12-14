import axios from "axios";

export default function handler(req, res) {
  const { name, email, phone, password, confpassword } = req.body;
  axios
    .post(`${process.env.BASE_URL}/register`, {
      name,
      email,
      phone,
      password,
      confpassword,
    })
    .then((response) => {
      console.log(response);
      res.status(200).json(response?.data);
    })
    .catch((error) => {
      res.status(400).json({ message: error?.response?.data });
    });
}
