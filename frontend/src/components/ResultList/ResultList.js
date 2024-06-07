import React from "react"
import PropTypes from "prop-types"
import "./result-list.scss"

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DataGrid} from "@mui/x-data-grid";

ResultList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      phone: PropTypes.string
    })
  ).isRequired
};

const highlightSubstring = (text, substring) => {
  if (!substring) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${substring})`, "gi"));
  return (
    <Box component="span">
      {parts.map((part, index) =>
        part.toLowerCase() === substring.toLowerCase() ? (
          <Box component="span" fontWeight="fontWeightBold" key={index}>
            {part}
          </Box>
        ) : (
          part
        )
      )}
    </Box>
  );
};


const columns = (query) => [
  { field: "name", headerName: "Name", width: 220, renderCell: (params) => highlightSubstring(params.value, query)},
  { field: "phone", headerName: "Phone Number", width: 160 },
];

export default function ResultList({ results, query }) {

  return (
  <Container 
    sx={{ 
      width: {
        xs: 200, // >= 0 
        sm: 348, // >= 600
        md: 450, // >= 900 
      },
      maxHeight: "80vh",
      visibility: results.length > 0 ? "visible" : "hidden" 
    }}
  >
    <Box 
      sx={{ 
        height: "100%", 
        width: "100%"
      }}
    >
      <DataGrid
        rows={results}
        columnHeaderHeight={0}
        columns={columns(query)}
        headerHeight={0}
        pageSize={1}
        rowsPerPageOptions={[1]}
        localeText={{noRowsLabel:""}}
        hideFooter={true}
        initialState={{
          sorting: {
            sortModel: [{ field: "name", sort: "asc" }],
          },
        }}
        sx={{
            borderColor: "primary.lightdark",
            paddingBottom: "15px",
            borderWidth: 3,
            borderRadius: "0 0 25px 25px",
            height: "100%",
            maxHeight: "100%",
            fontSize: 15,
            fontWeight: 400,
            "& .MuiDataGrid-cell": {
              paddingLeft: "2rem",
              border: "none",
            },
          
           
           /* this hack is needed to remove the top border of the 
            * sometimes appearing filler space in the result list.
            * Couldn"t find a cleaner solution so far */
          "& .MuiDataGrid-filler *": {
              borderTop: "none",
            },

            // scrollbar

            /* scrollbar only for firefox because
             * scrollbar styling possibilities are not satisfying */
            "@-moz-document url-prefix()": {
              "& .MuiDataGrid-scrollbar": {
                overflowX: "hidden", 
                overflowY: "hidden",
              },
            },

            scrollbarWidth: "thin",

            /* not working with internal theme variables primary, secondary..
             * little hack needed. ditch scrollbar in firefox for now */
            //scrollbarColor: "primary.dark primary.main",
 
            // style scrollbar for webkit browsers
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "primary.main",
              borderRadius: "0px 0px 0px 25px",
              width: "0.5em",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: "25px",
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
