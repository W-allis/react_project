// ,applyMiddleware
import { createStore, combineReducers } from 'redux'
import {
  userInfo
} from './user/reducer'
// import thunk from 'redux-thunk'

let store = createStore(
  // applyMiddleware(thunk)
  combineReducers({
    userInfo
  })
)

// export default function configureStore (initialState) {
//   return store(user, initialState)
// }

export default store