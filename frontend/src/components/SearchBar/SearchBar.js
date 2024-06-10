import React from "react"
import PropTypes from "prop-types"
import "./search-bar.scss"

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default function SearchBar({ onSearch, listLength }) {


  return (
    <Box 
      component="form" 
      noValidate 
      position="relative"
      autoComplete="off"
      sx={{
        transform: listLength > 0 ? "translateY(0)" : "translateY(-15%)",
        transition: "transform 0.5s ease 0.3s",
        width: {
          xxsmall: "95%", // width >= 0 
          xsmall:  "95%", // width >= 100
          small:   "95%", // width >= 200
          middle:  "95%", // width >= 300
          large:   "80%", // width >= 400
          xlarge:   400,  // width >= 500      
        },    
      }}    
    >
      <TextField
        fullWidth
        size="small"
        className="search-field"
        variant="filled"
        placeholder="Search..."
        InputProps={
          { 
          disableUnderline: true,
          style: { transition: "border-radius 0.4s ease", },
            sx: { 
                borderRadius: listLength > 0 ? "25px 25px 0 0"  : 10, 
                fontSize: "1.6rem", 
                disableUnderline: true,
                paddingLeft: 1,
                paddingBottom: 1.8,
                height: 42,
              }
          }
        }
        onChange={(e) => onSearch(e.target.value)}
      >
      </TextField>
    </Box>
      );
};
