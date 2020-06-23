import React from 'react'

const Person = ({ person, click }) => {
  return (
    <div>
    <p>{person.name} {person.number} 
    <button onClick={click} >delete</button></p>
    </div>
  )
}

export default Person
