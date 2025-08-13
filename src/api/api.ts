import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://flashcards-backend-1-b0wo.onrender.com'
})