import axios from "axios";

export const KEY = "AIzaSyAhfPrx20SDcZO4mY6DuIgFQ5gl-7H0C1I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
