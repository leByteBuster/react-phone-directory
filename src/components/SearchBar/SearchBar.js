import React from 'react'
import PropTypes from 'prop-types'
import './search-bar.scss'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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
        transform: listLength > 0 ? 'translateY(0)' : 'translateY(-15%)',
        transition: 'transform 0.5s ease 0.3s',
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
                borderRadius: listLength > 0 ? "25px 25px 0 0"  : 10, 
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
