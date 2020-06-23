import React, { useState , useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import New from './components/New'
import personService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
      if(window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
        const pers = persons.find(n => n.name === newName)
        const newPers = { ...pers, number: newNumber }

        personService
        .update(pers.id, newPers)
        
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
    })
  
    }
  }
  const deletePerson = (person) => {
    if (window.confirm("Delete "+ person.name + "?")) {
      personService
      .del(person.id)
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
        <div>
          <Person key={person.name} person={person} click={() => deletePerson(person)}/>
          </div>
        )}
      </div>
    </div>
  )

}

export default App
