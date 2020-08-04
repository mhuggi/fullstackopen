import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notiReducer from '../reducers/notificationReducer'

const reducer = combineReducers({
  anecdote: anecdoteReducer,
  notification: notiReducer
})


  const store = createStore(
    reducer,
    composeWithDevTools()
    )

    console.log(store.getState())

  
export default store