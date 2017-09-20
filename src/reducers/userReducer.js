export default function userReducer(state = { user: {} }, action) {
  switch(action.type) {
    case 'SIGNUP':
    case 'LOGIN':
    case 'FETCH_CURRENT_USER':
      return { ...state, user: action.payload }
    default: return state
  }
}
