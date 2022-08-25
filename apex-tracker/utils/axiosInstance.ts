import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APEX_API_URL,
    timeout: 1000,
    params: {
        auth: process.env.NEXT_PUBLIC_APEX_API_KEY,
    },
})
