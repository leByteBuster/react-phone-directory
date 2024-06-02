import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ResultsList from './components/ResultList/ResultList.js'; // TODO: same as below 
import SearchBar from './components/SearchBar/SearchBar.js'; // TODO: somtimes i have to specify SearchBar.js directly. why ??
import fetchService from './services/fetchService';
import Box from '@mui/material/Box';

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    console.log("Query", query)
    if (!query){
      setResults([]);
      return;
    }
    try {
      // TODO: start apiService with capital letter ? 
      fetchService.mockFetch(query).then((tmpRes) => tmpRes.json()).then((result => {
        console.log(result);
        setResults(result);}
      ));
    } catch (error) {
      console.log('Error fetching data:', error)
      setResults([]);
    }
  };

  return (
    <>
      <Box className='App' 
        <SearchBar onSearch={handleSearch} listLength={results.length} />
        <ResultsList results={results} />
      </Box>
    </>
  );
}

export default App;
