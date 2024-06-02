import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ResultsList from './components/ResultList/ResultList.js'; // TODO: same as below 
import SearchBar from './components/SearchBar/SearchBar.js'; // TODO: somtimes i have to specify SearchBar.js directly. why ??
import Box from '@mui/material/Box';

function App() {
  const [results, setResults] = useState([]);
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
