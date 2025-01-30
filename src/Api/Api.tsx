import axios from "axios";
const baseURL = "https://programming-fashion.store/api";

export const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
  },
});
