import axios from "axios";

import { baseURL } from "@/constants/urls";

const apiService = axios.create({ headers: { "Content-Type": "application/json" }, withCredentials: true, baseURL });

export { apiService };
