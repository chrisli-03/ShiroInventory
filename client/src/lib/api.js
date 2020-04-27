import axios from 'axios'

export const request = (url, method, params = {}, success, failed) => {
  return axios({
    url: `/${url}`,
    method,
    ...params
  })
    .then(response => response.data)
    .catch(error => console.log(error))
}