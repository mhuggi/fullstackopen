import React from 'react'

const Person = (props) => {
  return (
    <form onSubmit={props.addNewPerson}>
    <div>Name: <input value={props.newName} onChange={props.handleNewNameChange} /> </div>
    <div>Number: <input value={props.newNumber} onChange={props.handleNumberChange} /> </div>
    <button type="submit">save</button>
  </form>

  )
}

export default Person
