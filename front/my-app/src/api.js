// import axios, {head} from "axios";
//
// const API = "http://localhost:8080";
//
// function getCookie(name){
//     return document.cookie.split("; ").find(r=>r.startsWith(name+"="))?.split("=")[1];
// }
//
// export async function ensureCsrf(){
//     if(!getCookie("XSRF-TOKEN")){
//         await fetch('${API}/csrf', {credentials:"include"});
//     }
// }
//
// export async function apiFetch(path, init = {}){
//     await ensureCsrf();
//     const method = (init.method || "GET").toUpperCase();
//     const headers = new Headers(init.headers);
//
//     if(["POST", "PUT", "PATCH", "DELETE"].includes(method)){
//         headers.set("Content-Type", "application/json");
//         const token = getCookie("XSRF-TOKEN");
//         if(token) headers.set("X-XSRF-TOKEN", decodeURIComponent(token));
//     }
//     return fetch('${API}${path}', {...init, headers, credentials:"include"});
// }
//
// // export const api = axios.create({
// //     baseURL: '/api',
// //     withCredentials: true,
// //     headers: { 'Content-Type': 'application/json' },
// //     xsrfCookieName: 'XSRF-TOKEN', // (시큐리티 ON일 때)
// //     xsrfHeaderName: 'X-XSRF-TOKEN'
// // });


import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    withCredentials: true,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    headers: { 'Content-Type': 'application/json' },
});