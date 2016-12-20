export function searchUserSucc(username) {
  return {
    type: 'SEARCH_USER_SUCCESS',
    username
  }
}

export function saveStreamer(name) {
  return {
    type: 'SAVE_STREAMER',
    name
  }
}

export function searchStreamSucc(stream) {
  return {
    type: 'SEARCH_STREAM_SUCCESS',
    stream
  }
}

export function getFollowsSucc(follows) {
  return {
    type: 'GET_FOLLOWS_SUCCESS',
    follows
  }
}

export function startLoad(loadType){
  return {
    type: 'START_SEARCH_LOAD',
    loadType
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

export function switchStream(stream){
  return {
    type: 'SWITCH_STREAM',
    stream
  }
}
