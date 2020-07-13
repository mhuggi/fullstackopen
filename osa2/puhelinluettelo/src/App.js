import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import New from './components/New'
import personService from './services/persons'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'
import './index.css'




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])


  const addNewPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    if (persons.some(e => e.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
        const pers = persons.find(n => n.name === newName)
        const newPers = { ...pers, number: newNumber }

        personService
          .update(pers.id, newPers)
        setMessage(`number has been updated for ${newName} `)
        setTimeout(function () { setMessage(null) }, 3000);

      }
      setNewNumber('')
      setNewName('')

    } else {
      personService
        .create(personObj)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote))
          setNewNumber('')
          setNewName('')
          setMessage(`Added ${newName} `)
          setTimeout(function () { setMessage(null) }, 3000);
        
        })
        .catch(error => {
          
          setMessage(error.response.data.error)
          setTimeout(function () { setMessage(null) }, 3000);

          //console.log(error.response.data.error)
        })
    }
  }
  const deletePerson = (person) => {
    if (window.confirm("Delete " + person.name + "?")) {
      personService
        .del(person.id)
        .then(response => 
          setMessage(`Deleted ${person.name} `))
        .catch(error => {
          setErrorMessage(`${person.name} was already removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
      setTimeout(function () { setMessage(null) }, 3000);
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
      <Notification message={message} />
      <ErrorMessage message={errorMessage} />

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
          <div>
            <Person key={person.name} person={person} click={() => deletePerson(person)} />
          </div>
        )}
      </div>
    </div>
  )

}

export default App
