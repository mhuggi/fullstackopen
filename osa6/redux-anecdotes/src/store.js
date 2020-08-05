import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from './reducers/anecdoteReducer'
import notiReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdote: anecdoteReducer,
  notification: notiReducer
})


  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
    )
  
export default store