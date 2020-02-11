import axios from "./common/util/axios"

export const getSubAgentListAsync = params =>
  axios({
    method: "get",
    url: "wuhan.html",
    params
  })
