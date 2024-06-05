import React from 'react'
import PropTypes from 'prop-types'
import './result-list.scss'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid} from '@mui/x-data-grid';

ResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string
    })
  ).isRequired
};

const columns = [
  { field: 'name', headerName: 'Name', width: 220 },
  { field: 'phone', headerName: 'Phone Number', width: 160 },
];

export default function ResultList({ results }) {

  return (
  <Container 
    sx={{ 
      width: 450, 
      maxHeight: '80vh',
      visibility: results.length > 0 ? 'visible' : 'hidden' 
    }}
  >
    <Box 
      sx={{ 
        height: '100%', 
        width: '100%'
      }}
    >
      <DataGrid
        slots={{
          columnHeaders: () => null,
        }}
        rows={results}
        columnHeaderHeight={0}
        columns={columns}
        pageSize={1}
        rowsPerPageOptions={[1]}
        localeText={{noRowsLabel:""}}
        hideFooter={true}
        initialState={{
          sorting: {
            sortModel: [{ field: 'name', sort: 'asc' }],
          },
        }}
        sx={{
            borderColor: 'primary.lightdark',
            rowBorder: 'none',
            height: '100%',
            maxHeight: '100%',
            fontSize: 14,
            '& .MuiDataGrid-cell': {
              paddingLeft: '2rem',
              borderTop: '0',
            },

            // scrollbar

            /* scrollbar only for firefox because
             * scrollbar styling possibilities are not satisfying */
            '@-moz-document url-prefix()': {
              '& .MuiDataGrid-scrollbar': {
                overflowX: 'hidden', 
                overflowY: 'hidden',
              },
            },

            scrollbarWidth: 'thin',

            /* not working with internal theme variables primary, secondary..
             * little hack needed. ditch scrollbar in firefox for now */
            //scrollbarColor: 'primary.dark primary.main',
 
            // style scrollbar for webkit browsers
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "primary.main",
              borderRadius: "20px",
              width: '0.5em',
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: "20px",
              backgroundColor: "primary.dark",
              minHeight: 24,
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "primary.dark",
            },
          }}
      />
    </Box>
  </Container>
  );
};
