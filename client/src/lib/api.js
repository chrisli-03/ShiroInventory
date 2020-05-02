import axios from 'axios'

export const request = (url, method, params = {}, query = '', success, failed) => {
  return axios({
    url: `/${url}` + (query === '' ? '' : `?${query}`),
    method,
    ...params
  })
    .then(response => response.data)
    .catch(error => console.log(error))
}