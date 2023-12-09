import axios from "axios";

const getAuthToken = () => localStorage.getItem("AppToken");

export const UserRequest = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getAuthToken()}`
    },
});

export const setAuthToken = (token) => {
    UserRequest.defaults.headers.Authorization = `Bearer ${token}`;
};

// import axios from "axios";
// let token = localStorage.getItem("AppToken")

// export const UserRequest = axios.create({
//     baseURL: "http://localhost:3000",
//     headers:{
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//     },
// })