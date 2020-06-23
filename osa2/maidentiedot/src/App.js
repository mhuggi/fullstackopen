import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Filter from './components/Filter'
import Toomany from './components/Toomany'
import Onecountry from './components/Onecountry'



const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')


  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const countriesToShow = (arr, query) => {
    return arr.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  const showCountry = (country) => {
    setFilter(country.name)
  }


  return (
    <div>
      <h2>Search countries</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Countries</h2>
      <div>
        {countriesToShow(countries, filter).map((country, i) => {
          if (countriesToShow(countries, filter).length < 10 && countriesToShow(countries, filter).length > 1) {
            return (
              <div key={country.name}>
                <Country key={country.name + "Text"} country={country} showCountry={showCountry} />
                <button key={country.name + "Button"} type="button" onClick={() => showCountry(country)}>Show</button>
              </div>
            )
          } else if (countriesToShow(countries, filter).length === 1) {
            return <Onecountry key={country.name + "OneCountry"} country={country} />
          } else if (countriesToShow(countries, filter).length - 1 === i) {
            return <Toomany key="toomany" />
          }
        }
        )}

      </div>
    </div>

  )
}
export default App
