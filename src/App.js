import './App.css';
import React, { useState, useMemo } from 'react';
import ResultsList from './components/ResultList/ResultList.js'; // TODO: same as below 
import SearchBar from './components/SearchBar/SearchBar.js'; // TODO: somtimes i have to specify SearchBar.js directly. why ??
import fetchService from './services/fetchService';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';

// TODO: place this outside when working
const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
};

const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#121212',
      //paper: '#424242',
    },
  },
};

const thirdTheme = {
  palette: {
    primary: {
      main: '#E1AFD1',
    },
    secondary: {
      main: '#7469B6',
    },
    background: {
      default: '#ffffff',
      paper: '#424242',
    },
  },
};

export default function App() {
  const [results, setResults] = useState([]);
  const [theme, setTheme] = useState('third');

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

  const currentTheme = useMemo(() => {
    if (theme === 'light') return createTheme(lightTheme);
    if (theme === 'dark') return createTheme(darkTheme);
    return createTheme(thirdTheme);
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeProvider  theme={currentTheme}>
      <CssBaseline enableColorScheme/>
      <Box className='App' 
        sx={{ 
          backgroundColor: 'primary.light',
          gap: 2,
          paddingTop: results.length > 0 ? '5vh' : '40vh',
          transition: 'padding-top 0.65s',
        }}>
        <SearchBar onSearch={handleSearch} listLength={results.length} />
        <ResultsList results={results} />
      </Box>
    </ThemeProvider>
  );
};

