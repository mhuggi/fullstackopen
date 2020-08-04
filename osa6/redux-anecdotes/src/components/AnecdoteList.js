import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdote)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnecdote(id))
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes
                .sort((a, b) => a.votes < b.votes ? 1 : -1)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                )}
        </div>

    )
}

export default Anecdotes