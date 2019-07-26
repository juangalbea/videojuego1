import axios from 'axios';

export default class ElementServices {
  constructor(){
    this.service = axios.create({
      baseURL: 'http://localhost:5000/elements',
      withCredentials: true
    })
  }

  game = (platforms) => {
    return this.service.post('/games', {platforms})
    .then(response => response.data)
  }

  comment = (description, userID, favourited)=>{
    return this.service.post('/comment', {description, userID, favourited})
    .then(response => response.data)

  }

  // loggedin = ()=>{
  //   return this.service.get('/userData')
  // .then(response => response.data)
  // }

  // logout = ()=>{
  //   return this.service.get('/logout')
  // .then(response => response.data)
  // }




}