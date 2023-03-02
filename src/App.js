
import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';

function App() {

  const [allCountries, setAllCountries] = useState([])

  useEffect(()=>{
    getData()
  }, [])

  const getData = async () =>{
    try {
      const response = await axios.get("https://ih-countries-api.herokuapp.com/countries")
      console.log(response.data);
      setAllCountries(response.data)
    } catch (error) {
      
    }
  }


  return (
    <div className="App">

    <NavBar allCountries={allCountries}/>

    <Routes>
      <Route path="/" element={<NavBar allCountries={allCountries}/>} ></Route>
      <Route path='/:id' element={<CountryDetails />}>  </Route>
    </Routes>
      
    </div>
  );
}

export default App;
