export default (state={user: null, err: false, loading: false}, action) => {
  switch (action.type) {
    case 'USERNAME_FOUND':
      return {...state, loading: false, err: false, errMsg: null, user: action.username}

    case 'ERR':
      return {...state, loading: false, err: true, errMsg: action.err, user: null}

    case 'START_LOAD':
      return {...state, loading: true}

    default:
      return state

  }
}