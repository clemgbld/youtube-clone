import axios from "axios";

export const KEY = "AIzaSyBkQLpIT7nn1DqQJXwyHPYcil-7iJ7CgaY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
