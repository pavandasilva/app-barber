import axios from 'axios'
/* import Cookies from 'js-cookie' */

const axiosConfig = axios.create({ baseURL: 'http://10.66.1.58:8000' })

/* const token = Cookies.get('Forum66Token')

axiosConfig.defaults.headers.authorization = `Bearer ${token}` */

export default axiosConfig
