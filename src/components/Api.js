import axios from "axios";

//creating backend configuration

const Api = axios.create({
    baseURL: "http://localhost:5500",
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

// make a config for token 
const config = {
    headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`,
    },
};

//Test Api
export const testApi = () => Api.get('/test');

// Register API
export const registerUserApi = (data) => Api.post('/api/user/create', data)

//Login API
export const loginUserApi = (data) => Api.post('/api/user/login', data)

//Addproduct API
export const createProductApi = (data) => Api.post('/api/product/create', data)
export const createNoteApi = (data) => Api.post('/api/note/create', data, config)

// get all products api
export const getAllProducts = () => Api.get('/api/product/get_all_products', config)
export const getAllNotess = () => Api.get('/api/note/get_all_notes', config)

// get single product
export const getSingleProduct = (id) => Api.get(`/api/product/get_single_product/${id}`, config)
export const getSingleNote = (id) => Api.get(`/api/note/get_single_note/${id}`, config)

// get delete
export const deleteProduct = (id) => Api.delete(`/api/product/delete_product/${id}`, config)
export const deleteNote = (id) => Api.delete(`/api/note/delete_note/${id}`, config)

// get update
export const updateProduct = (id, data) => Api.put(`/api/product/update_product/${id}`, data, config)
export const updateNote = (id, data) => Api.put(`/api/note/get_single_note/${id}`, data, config)

//http://localhost:5500/test