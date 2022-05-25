import axios from "axios"
const BASE_URL = "http://188.121.121.225/api"
export default axios.create({
    baseURL:BASE_URL
})
export const axiosPrivate =  axios.create({
    baseURL:BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials:true
})


