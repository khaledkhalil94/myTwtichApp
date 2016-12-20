import { combineReducers } from 'redux'

const loader = (state = {}, action) => {
  switch (action.type) {

    case 'START_SEARCH_LOAD':
      return {...state, searchLoad: true}

    case 'START_STREAM_LOAD':
      return {...state, streamLoad: true, searchLoad: false}

    case 'SEARCH_USER_SUCCESS':
    case 'SEARCH_STREAM_SUCCESS':
    case 'ERR':
    return {...state, searchLoad: false, streamLoad: false}

    default:
      return state;
  }
}

//const defaultState = {user: null, stream: null, err: false}

const state = (state = { streamersHistory: [] }, action) => {
  switch (action.type) {

    case 'SEARCH_USER_SUCCESS':
      return {...state, err: false, user: action.username}

    case 'SWITCH_STREAM':
      return {...state, user: action.name}

    case 'SAVE_STREAMER':
      let history = state.streamersHistory || [];
      return {...state, streamersHistory: [action.name, ...history]}

    case 'SEARCH_STREAM_SUCCESS':
      return {...state, stream: action.stream.stream}

    case 'ERR':
      return {...state, loading: false, err: true, errMsg: action.err}

    default:
      return state

  }
}

const rootReducer = combineReducers({
  state, loader
})

export default rootReducer
