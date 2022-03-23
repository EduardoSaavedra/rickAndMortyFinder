import axios from 'axios'

axios.defaults.headers.post['Content-Type'] ='application/json'
const baseUrl = 'https://rickandmortyapi.com/api'

const request =(method,endpoint,params,data)=>{
  const url =`${baseUrl}${endpoint}`
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
      console.error('Not method supported')
    }
  }
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
