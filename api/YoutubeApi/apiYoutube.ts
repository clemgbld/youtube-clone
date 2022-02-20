import axios from "axios";

export const KEY = "AIzaSyCYANcLxpylqUxT1XT9_5RSloLyxqSEwm4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
