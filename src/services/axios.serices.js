import axios from "axios";

import baseURL from "../urls/urls";

export const axiosSerices = axios.create({baseURL});