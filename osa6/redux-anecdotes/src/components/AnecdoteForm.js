import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { newMessage } from '../reducers/notificationReducer'
import { connect } from 'react-redux' 


const NewAnecdote = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        //dispatch(createAnecdote(anecdote))
        props.createAnecdote(anecdote)
        dispatch(newMessage(`Created '${anecdote}'`))
        setTimeout(function(){ dispatch(newMessage('')) }, 5000);
        
    }

    return (
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
        </div>
    )
}

export default connect(
    null, 
    { createAnecdote }
  )(NewAnecdote)
  