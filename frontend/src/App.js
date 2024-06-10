import "./App.css";
import { React, useState, useMemo } from "react";
import CircularButton from "./components/CircularButton/CircularButton";
import ResultsList from "./components/ResultList/ResultList"; // TODO: same as below 
import SearchBar from "./components/SearchBar/SearchBar"; // TODO: somtimes i have to specify SearchBar.js directly. why ??
import FetchService from "./services/FetchService";

import { createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ThemeProvider} from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f0ead3", 
      lightdark: "#e2d7ab"
    },
  },
  breakpoints: {
    values: {
      xxsmall: 0,
      xsmall: 100,
      small: 200,
      middle: 300,
      large: 400,
      xlarge: 500,
    },
  },
 });

const orangeTheme = createTheme({
  palette: {
    primary: {
      main: "#ffbf4a", 
      lightdark: "#eda012"
    },
    text: {
      primary: "#353535"
    }
  },
breakpoints: {
    values: {
      xxsmall: 0,
      xsmall: 100,
      small: 200,
      middle: 300,
      large: 400,
      xlarge: 500,
    }, 
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#000000",
    },
  },
  breakpoints: {
    values: {
      xxsmall: 0,
      xsmall: 100,
      small: 200,
      middle: 300,
      large: 400,
      xlarge: 500,
    },
  },
});

const roseTheme = createTheme({
  palette: {
    primary: {
      main: "#E1AFD1",
      lightdark: "#dfa9ce"
    },
    text: {
      primary: "#353535"
    }
  },
  breakpoints: {
    values: {
      xxsmall: 0,
      xsmall: 100,
      small: 200,
      middle: 300,
      large: 400,
      xlarge: 500,
    },
  },
});

export default function App() {

  const [results, setResults] = useState([]);
  const [theme, setTheme] = useState("rose");
  const [query, setQuery] = useState("");

  // we need these so the buttons can be styled in their theme color permanently
  const lightThemePrimaryColor = lightTheme.palette.primary.main;
  const roseThemePrimaryColor = roseTheme.palette.primary.main;
  const orangeThemePrimaryColor = orangeTheme.palette.primary.main;
  const darkThemePrimaryColor = darkTheme.palette.primary.main;

  const currentTheme = useMemo(() => {
    if (theme === "light") return lightTheme;
    if (theme === "dark") return darkTheme;
    if (theme === "orange") return orangeTheme;
    return roseTheme;
  }, [theme]);

  const handleClick = (theme) => {
    toggleTheme(theme)    
  };

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const handleSearch = async (query) => {
    if (!query){
      setResults([]);
      setQuery("")
      return;
    }
    try {
      const result = await FetchService.fetchPhoneBookEntries(query)        
      setResults(result);
    } catch (error) {
      console.log(error)
      setResults([]);
      setQuery("")
    }
    setQuery(query);
  };

  return (
    <ThemeProvider  theme={currentTheme}>
      <CssBaseline enableColorScheme/>
      <Box className="App" 
        sx={{ 
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "primary.light",
          gap: 2,
          paddingTop: results.length > 0 ? "5vh" : "40vh",
          transition: "padding-top 0.65s",
        }}>
        <SearchBar onSearch={handleSearch} listLength={results.length} />
        <ResultsList results={results} query={query} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            position: "fixed",
            gap: "0.8em",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "4em", 
            paddingRight: "3em",
            paddingBottom: "1em",
            //background-color: none;
          }}>
          <CircularButton
            onClick={handleClick}
            theme="light"
            color={lightThemePrimaryColor}
            isActive={theme === "light"}
            >
          </CircularButton>
          <CircularButton
            onClick={handleClick}
            theme="rose"
            color={roseThemePrimaryColor}
            isActive={theme === "rose"}
            >
          </CircularButton>
          <CircularButton
            onClick={handleClick}
            theme="orange"
            color={orangeThemePrimaryColor}
            isActive={theme === "orange"}
            >
          </CircularButton>
          <CircularButton
            onClick={handleClick}
            theme="dark"
            color={darkThemePrimaryColor}
            isActive={theme === "dark"}
            >
          </CircularButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

