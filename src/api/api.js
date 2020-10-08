import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://emphasoft-test-assignment.herokuapp.com/',
    headers: {
        'Authorization': 'Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e'
    },
});