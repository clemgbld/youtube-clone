import axios from "axios";

export const KEY = "AIzaSyD_QqyP_JyID_Q-IOkPxmW1AdbdaI1_BVE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
