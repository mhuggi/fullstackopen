import anecdoteService from '../services/anecdotes'

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const aneToVote = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'VOTE',
      data: {
        id: aneToVote.id
      }
    })
  }
}
/*
export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
}
*/
export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANE',
      data: anecdotes,
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const aneToChange = state.find(n => n.id === id)
      const currentVotes = aneToChange.votes
      const changedAne = {
        ...aneToChange,
        votes: currentVotes + 1
      }
      return state.map(ane =>
        ane.id !== id ? ane : changedAne)

    case 'NEW_ANE':
      return [...state, action.data]

    case 'INIT_ANE':
      return action.data

    default:
      return state
  }
}

export default reducer