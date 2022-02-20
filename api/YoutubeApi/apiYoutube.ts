import axios from "axios";

export const KEY = "AIzaSyDHHbfAAoH7GUEPw5IeinKs3hbZp6w5JuE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
