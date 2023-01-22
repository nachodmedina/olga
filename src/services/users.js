import { AxiosResponse } from "axios";
import apiClient from "./apiClient";

const URL = "/users";

export const UsersService = {
    findAll: () => 
        apiClient
            .get(URL)
            .then(response => response.data),
    
    getById: (id) =>
        apiClient
            .get(`${URL}/${id}`)
            .then(response => response.data)

}