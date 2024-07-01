import axios from 'axios'

const axiosBase = axios.create({
    baseURL: 'http://localhost:5500/api'
    // baseURL : 'https://evangagi-forum-deploy-backend.onrender.com'
})

export default axiosBase 