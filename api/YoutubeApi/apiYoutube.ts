import axios from "axios";

export const KEY = "AIzaSyD98xKDH8iChcTLgRrJjSeQfpZpHWiHplM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
