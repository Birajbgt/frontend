import axios from "axios";

//creating backend configuration

const Api = axios.create({
    baseURL: "http://localhost:5500",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

//Test Api
export const testApi = () => Api.get('/test');

// Register API
export const registerUserApi = (data) => Api.post('/api/user/create', data)

//Login API
export const loginUserApi = (data) => Api.post('/api/user/login', data)

//Addproduct API
export const createProductApi = (data) => Api.post('/api/product/create', data)

// get all products api
export const getAllProducts = () => Api.get('/api/product/get_all_products')

// get single product
export const getSingleProduct = (id) => Api.get(`/api/product/get_single_product/${id}`)

//http://localhost:5500/test