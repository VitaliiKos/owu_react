import {axiosSerices} from "./axios.serices";
import {urls} from "../urls";

export const carServices = {
    getAll:()=>axiosSerices.get(urls.cars).then(value => value.data),
    deleteByID:(id)=>axiosSerices.delete(`${urls.cars}/${id}`),
    create:(car)=>axiosSerices.post(urls.cars, car).then(value => value.data)

}