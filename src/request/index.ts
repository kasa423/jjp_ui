import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
  // withCredentials: true, // 跨域请求时发送 cookies
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

request.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      //添加请求头
      config.headers["Authorization"] = "Bearer " + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  })

export type Response<T> = {
  code: number,
  message: string,
  data: T
}

// response 拦截器
request.interceptors.response.use(
  response => {
    if (response.data.code ===401) {
      // 返回 401 清除token信息并跳转到登录页面
      localStorage.removeItem('token')
      // window.location.href = '/login'
      return Promise.reject(response)
    }
    if (response.data.code !== 200) {
      return Promise.reject(response)
    }
    return response.data
  },
  error => {
    return Promise.reject(error)
  })

export default request