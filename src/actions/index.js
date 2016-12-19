import fetch from 'isomorphic-fetch'

function searchUserSucc(username) {
  return {
    type: 'USERNAME_FOUND',
    username
  }
}

function startLoad(){
  return {
    type: 'START_LOAD'
  }
}

function sendErr(err){
  return {
    type: 'ERR',
    err
  }
}

export function searchForUser(username){
  const secrect = '5pxy4vaivucz7u727dvfidxsbwngwv'
  const url = `https://api.twitch.tv/kraken/users/${username}?client_id=${secrect}`
  return(dispatch) => {
    if(!username) {
      dispatch(sendErr('Enter a username.'))
      return
    }
    dispatch(startLoad())
    return fetch(url)
    .then(res => {
      if(res.status === 200) return res.json()
      else dispatch(sendErr('User was not found.'))
    })
    .then(json => {
      if(json) dispatch(searchUserSucc(json))
    })
  }
}
