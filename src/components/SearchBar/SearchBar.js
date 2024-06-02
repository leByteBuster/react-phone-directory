import React from 'react'
import PropTypes from 'prop-types'
import './search-bar.scss'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default function SearchBar({ onSearch }) {
  return (
    <Box 
      component="form" 
      noValidate 
      position="relative"
      autoComplete="off"
      sx={{
        backgroundColor: 'oldlace',
        width: 400,
    }}    
    >
      <TextField
        fullWidth
        size="small"
        className='search-field'
        variant="filled"
        //label="search"
        placeholder="Search..."
        InputProps={
          { 
          disableUnderline: true,
          style: { textAlign: 'center'},
            sx: { 
                fontSize: 16, 
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
