import axios from "axios"
const BASE_URL = "http://185.202.113.165:3000/api/"
export const axiosInstance = axios.create({
    baseURL:BASE_URL,
    headers: { 'Content-Type': 'application/json' },

})







