import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../reducers/'

const defaultState = {
  users: [
    {
      nameFirst: 'John',
      nameLast: 'Smith',
      email: 'john@smith.org',
    },
    {
      nameFirst: 'Jane',
      nameLast: 'Doe',
      email: 'jane@doe.org',
    },
    {
      nameFirst: 'Jack',
      nameLast: 'Sprat',
      email: 'jack@sprat.com',
    },
  ],
}

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, composeWithDevTools())
  return store
}

export const store = configureStore(defaultState)
export default store
