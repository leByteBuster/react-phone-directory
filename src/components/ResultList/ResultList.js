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
            borderColor: 'primary.main',
            rowBorder: 'none',
            rowBorderColor: 'primary.light',
            height: '100%',
            maxHeight: '100%',
            fontSize: 14,
            '& .MuiDataGrid-cell': {
              paddingLeft: '2rem',
              borderTop: '0',
            },
            },
          }}
      />
    </Box>
  </Container>
  );
};
