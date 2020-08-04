import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
import notiReducer from './reducers/notificationReducer'
import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
  anecdote: anecdoteReducer,
  notification: notiReducer
})


  const store = createStore(
    reducer,
    composeWithDevTools()
    )
    anecdoteService.getAll().then(anecdotes =>
        store.dispatch(initializeAnecdotes(anecdotes))
    )
    
    console.log(store.getState())

  
export default store