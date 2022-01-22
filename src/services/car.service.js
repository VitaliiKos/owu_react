import axiosService from "./axios.service";
import {urls} from "../config/urls";

export const carService ={
    // Creat, Read, Update, Delete -> CRUD
    addNew:(car)=>axiosService.post(urls.cars, car)
        .then(value => value.data),
    getAll:()=> axiosService.get(urls.cars)
        .then(value => value.data),
    // getById:(id)=> axiosService.get(`${urls.cars}/${id}`)
    //     .then(value => value.data),
    updateById:(id, newCar) =>axiosService.patch(`${urls.cars}/${id}`, newCar)
        .then(value => value.data),
    deleteById:(id)=> axiosService.delete(`${urls.cars}/${id}`)
}

