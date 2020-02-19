import axios from 'axios'
import qs from 'querystring'

const instance = axios.create({
    baseURL: '/api'
  })

  instance.interceptors.request.use(config=>{
      config.data = qs.stringify(config.data)
      return config
  })

  instance.interceptors.response.use(
     response => response.data,
      error=>{
        console.log(error)  
        return Promise.reject(error);
      }  

  )
  export default instance