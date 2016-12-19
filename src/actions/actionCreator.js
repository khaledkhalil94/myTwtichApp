export function searchUserSucc(username) {
  return {
    type: 'SEARCH_USER_SUCCESS',
    username
  }
}

export function searchStreamSucc(stream) {
  return {
    type: 'SEARCH_STREAM_SUCCESS',
    stream
  }
}

export function startLoad(){
  return {
    type: 'START_SEARCH_LOAD'
  }
}

export function startStreamLoad(){
  return {
    type: 'START_STREAM_LOAD'
  }
}

export function sendErr(err){
  return {
    type: 'ERR',
    err
  }
}