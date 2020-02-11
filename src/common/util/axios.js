import axios from "axios"
// import { message } from "antd"

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
  function(response) {
    switch (response.data.suc) {
      case false:
        // message.error(response.data.msg || "发生错误，请稍后再试")
        console.log(response.data.msg || "发生错误，请稍后再试")
        return response
      default:
        return response
    }
  },
  function(error) {
    // message.error("发生错误，请稍后再试")
    console.log("发生错误，请稍后再试")
    return Promise.reject(error)
  }
)

export default axiosInstance
