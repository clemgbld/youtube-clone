import axios from "axios";

export const KEY = "AIzaSyB3Kd5ADp6p9FU45YKu6OgXcxnj5ziV_Lw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
