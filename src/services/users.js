import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

const URL = `${process.env.API_BASE_URL}`;

export const UsersService = {
    findAll: () => 
        apiClient
            .get(API_BASE_URL)
            .then(response => response.data),
    
    getById: (id) =>
        apiClient
            .get(`${URL}/${id}`)
            .then(response => response.data),
    
    getByUsername: (username) =>
        apiClient
            .get(`${URL}/${username}`)
            .then(response => response.data)

}