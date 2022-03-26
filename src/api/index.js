import axios from 'axios'

import _pickBy from 'lodash/pickBy'
import _isEmpty from 'lodash/isEmpty'

import queryString from 'query-string'

axios.defaults.headers.post['Content-Type'] ='application/json'
const baseUrl = 'https://rickandmortyapi.com/api'

const request =(method,endpoint,params,data)=>{
  const query = stringifyQuery(params)
  const url =`${baseUrl}${endpoint}${query}`
  const access = JSON.parse(localStorage.getItem("authToken"))
  axios.defaults.headers.common ={ Authorization: !!access?`Bearer ${access}`:'' }

  switch(method){
    case 'POST':
      return axios.post(url, JSON.stringify(data))
    case 'GET':
      return !!params ? axios.get(url,params) : axios.get(url)
    case 'PUT':
      return axios.put(url,data)
    default:{
      console.error('Ruta no encontrada')
    }
  }
}

const stringifyQuery = params => {
  const _filters = _pickBy(params, filter => {
    if (typeof filter === 'string') return filter.length > 0
    return true
  })
  // Add the query params
  return !_isEmpty(_filters)
    ? `?${queryString.stringify(_filters, { arrayFormat: 'bracket' })}`
    : ''
}

export const Get =(endpoint, params = {})=> {
  return request('GET', endpoint, params, null)
}

export const Post=(endpoint, data = null)=> {
  return request('POST', endpoint, {}, data)
}

export const Put=(endpoint, data = null)=> {
  return request('PUT', endpoint, {}, data)
}
