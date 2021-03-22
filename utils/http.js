// 创建一个 axios
import axios from 'axios'
axios.defaults.baseURL
const http = axios.create({
    baseURL: 'http://157.122.54.189:9095'
})
http.interceptors.response
export default http