import fetch from 'isomorphic-fetch'
import {searchUserSucc, searchStreamSucc, startLoad,
        startStreamLoad, sendErr, saveStreamer} from './actionCreator'

const secrect = '5pxy4vaivucz7u727dvfidxsbwngwv'

function getStream(name, dispatch){
  const url = `https://api.twitch.tv/kraken/streams/${name}?client_id=${secrect}`
  fetch(url)
  .then( res => res.json() )
  .then( json => dispatch(searchStreamSucc(json)) )
}

export function searchForUser(username){
  const url = `https://api.twitch.tv/kraken/users/${username}?client_id=${secrect}`
  return(dispatch, getState) => {
    if(!username) {
      dispatch(sendErr('Enter a username.'))
      return
    }
    dispatch(startLoad())
    return fetch(url)
    .then(res => {
      if(res.status === 200) return res.json()
      else dispatch(sendErr('User not found'))
    })
    .then(json => {
      if(json){
        let user = getState().state.user;
        dispatch(searchUserSucc(json))
        dispatch(saveStreamer(json))
        if(user && (user._id === json._id)) {
          dispatch(searchUserSucc(user))
        } else {
          dispatch(startStreamLoad())
          getStream(username, dispatch)
        }
      }
    })
  }
}
