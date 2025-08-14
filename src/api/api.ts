import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://flashcards-backend-production-146c.up.railway.app'
})