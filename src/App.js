import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.js'; // TODO: somtimes i have to specify SearchBar.js directly. why ??
import Box from '@mui/material/Box';

function App() {
  return (
    <>
      <Box className='App' 
        <SearchBar onSearch={handleSearch}/>
      </Box>
    </>
  );
}

export default App;
