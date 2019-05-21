import { combineReducers } from 'redux'
import { ADD_USER, DELETE_USER } from '../actions/'

export const users = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, Object.assign({}, action.user)]
    case DELETE_USER:
      return state.filter((data, i) => i !== action.id)
    default:
      return state
  }
}

export const reducers = combineReducers({
  users,
})

export default reducers
