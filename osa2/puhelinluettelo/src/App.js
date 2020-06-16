import React, { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import New from './components/New'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewNumber('')
      setNewName('')

    } else {
    setPersons(persons.concat(personObj))
    setNewName('')
    setNewNumber('')

    }
  }
  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    
  }
  const personsToShow = (arr, query) => {
    return arr.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <div>
        <h2>Add new</h2>
        <New addNewPerson={addNewPerson} newName={newName} handleNewNameChange={handleNewNameChange} 
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      </div>
      <h2>Numbers</h2>
      <div>
        {personsToShow(persons, filter).map((person, i) =>
          <Person key={person.name} person={person} />

        )}
      </div>
    </div>
  )

}

export default App
