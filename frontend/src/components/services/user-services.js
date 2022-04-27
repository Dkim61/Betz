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
  