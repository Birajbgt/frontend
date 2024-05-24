import axios from "axios";

//creating backend configuration

const Api = axios.create({
    baseURL: "http://localhost:5500",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

//Test Api
export const testApi = () => Api.get('/test');

// Register API
export const registerUserApi = (data) => Api.post('/api/user/create', data)

//Login API
export const loginUserApi = (data) => Api.post('/api/user/login', data)

//http://localhost:5500/test