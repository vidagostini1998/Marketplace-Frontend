import axios from 'axios';

const api = axios.create({
    baseURL:'https://marketplace-backend-api.vercel.app/',
})

export default api;