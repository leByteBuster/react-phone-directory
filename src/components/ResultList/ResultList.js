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
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'phone', headerName: 'Phone Number', width: 180 },
];


export default function ResultList({ results }) {
  return (
  <Container sx={{ width: 450, maxHeight: '80vh', visibility: results.length > 0 ? 'visible' : 'hidden' }}>
    <Box sx={{ height: '100%', width: '100%'}}>
      <DataGrid
        slots={{
          columnHeaders: () => null,
        }}
        rows={results}
        columns={columns}
        pageSize={1}
        rowsPerPageOptions={[1]}
        localeText={{noRowsLabel:""}}
        hideFooter={true}
        sx={{
            height: '100%',
            maxHeight: '100%',
            '& .MuiDataGrid-virtualScroller': {
              maxHeight: '100%',
            },
          }}
      />
    </Box>
  </Container>
  );
};
