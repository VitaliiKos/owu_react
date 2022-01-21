import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";

export const albumsService = {
    getAlbumsById: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getPhotos: (id) => axiosService.get(`${urls.photo}/${id}/photos`).then(value => value.data)

}