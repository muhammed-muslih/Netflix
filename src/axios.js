import axios from "axios";
import { baseUrl } from "./config/constant";
const instance = axios.create({
    baseURL: baseUrl,
   
  });
  export default instance;  