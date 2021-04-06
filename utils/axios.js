import axios from 'axios'
import { getToken } from './cookies'

// create singleton for axios
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://192.168.100.247:8001/api/v1' // URL
      : 'https://digital-window.herokuapp.com/api/v1',
  mode: 'cors',
  credentials: 'same-origin'
  // timeout: 30000
})

service.interceptors.request.use((config) => {
  if (!config.public) {
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  return config
})

// response interceptor
service.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    console.log(error)
    // Snackbar.open('Look at me!')
    // Notification.open('Notify!')
    // Toast.open('Toasty!')

    /*
    if (!error.response) {
      Dialog.confirm({
        title: 'Algo salio mal :(',
        message:
          'El servicio <b>no esta disponible</b> en estos momentos. Revise su conexion a internet o intente más tarde',
        confirmText: 'Ir al inicio',
        type: 'is-warning',
        hasIcon: true,
        ariaRole: 'alertdialog',
        ariaModal: true,
        onConfirm: () => router.push('/')
      })
    }
    */
    return Promise.reject(error.response.data)
  }
)

export default service
