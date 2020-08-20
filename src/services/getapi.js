import axios from "axios";
export const getApi = async () => {
  const res = await axios.get("./local-data/data.json");
  return res.data;
};
