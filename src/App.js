import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import CountryCard from './components/CountryCard';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(res => {
        setCountries(res.data)
      })
      .catch(e => {
        console.log(e);
      })
  }, [])

  console.log(countries)

  const renderCountries = countries.map(country => {
    return(
      <CountryCard
        key={country.alpha2Code}
        name={country.name}
        flag={country.flag}
        population={country.population}
        region={country.region}
        capital={country.capital}
    />
    )

  })
  return (
    <div className="App">
      <Navbar/>
      <main className='cardsContainer'>
        {renderCountries}
      </main>
    </div>
  );
}

export default App;
