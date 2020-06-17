import React from 'react'

const Onecountry = ({ country}) => {
  const langs = []
  for (const [index, value] of country.languages.entries()) {
    langs.push(<li key={index}>{value.name}</li>)
  }

    return (
        <div>
    <h2>{country.name}</h2>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <h3>Languages</h3>
    <ul>
        {langs}
    </ul>
    <img src={country.flag} width='300px' alt={country.name} />

    </div>
  )
}

export default Onecountry
