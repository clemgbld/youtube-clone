import axios from "axios";

export const KEY = "AIzaSyCHCl7sIIMNc3VkIxZkztA0wHR7YpJ6BEU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
