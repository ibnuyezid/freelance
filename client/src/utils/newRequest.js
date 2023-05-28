import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelance-lido.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
