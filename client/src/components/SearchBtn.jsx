import * as React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search"; // Import SearchIcon
import Box from "@mui/material/Box";

export default function SearchBtn() {
  return (
    <Box
      sx={{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
      }}
    >
      <Button
        variant="contained" // Corrected spelling from 'conatined' to 'contained'
        startIcon={<SearchIcon />}
        sx={{
          backgroundColor: 'rgb(76, 83, 217)',
          color: 'white',
        }}
      >
        Search
      </Button>
    </Box>
  );
}
