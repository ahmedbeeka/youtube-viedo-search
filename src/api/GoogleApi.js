import axios from "axios";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: "AIzaSyCT6KKvAfbSlbX_lznCxwJcdgCPCTE8UNk",
  },
});