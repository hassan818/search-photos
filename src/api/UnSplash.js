import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3_u6rFiCVgAHjCChv39U6hcesLknZfKnkQNd3bSOmf8",
  },
});
