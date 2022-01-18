import {urls} from "../config/urls";

const getAll =()=>{
    return fetch(urls.users)
    .then(value => value.json());
}

const getById =(id)=>{
    return fetch(`${urls.user}/${id}`)
    .then(value => value.json());
}

const getPosts =(id)=>{
    return fetch(`${urls.posts}${id}`)
        .then(value => value.json());
}

export const userService = {
    getAll,
    getById,
    getPosts
};
