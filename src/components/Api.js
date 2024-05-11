import axios from "axios";

//crating backend Config!
const Api = axios.create({
    baseURL: "http://localhost:5500",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})
//test API
export const testApi = () => Api.get('/test');


export const login=()=> Api.post()
//http://localhost:5500/test