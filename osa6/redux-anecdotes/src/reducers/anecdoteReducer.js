


export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANE',
    data
  }
}

export const initializeAnecdotes = (anecdote) => {
  return {
    type: 'INIT_ANE',
    data: anecdote,
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