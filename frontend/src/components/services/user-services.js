import { status } from '../utils/utils';

export function auth(credentials){
    return fetch('http://localhost:8000/api/authenticate/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then(resp => resp.json())
    .catch( e => {
        console.log(e);
    })
  }
  
  export function register(userData){
    return fetch('http://127.0.0.1:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then(status).catch( e => {console.log(e)})
  }
  