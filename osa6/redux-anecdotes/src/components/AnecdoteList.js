import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { newMessage } from '../reducers/notificationReducer'



const Anecdotes = () => {
    const anecdotes = useSelector(state => state.anecdote)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(newMessage(`You voted '${anecdote.content}'`))
        setTimeout(function(){ dispatch(newMessage('')) }, 5000);
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
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                )}
        </div>

    )
}

export default Anecdotes