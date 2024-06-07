import React from "react";
import { Button } from "@mui/material";

export default function CircleButton({ onClick, theme, color, isActive }) {

  const handleClick = () => {
    onClick(theme);
  };

  return (
    <Button
       onClick={handleClick}
       size="small"
       variant="contained" 
       disableElevation
       sx={{
         minWidth: 0,
         borderRadius: "50%",
         height: "3em",
         width: "3em",
         backgroundColor: isActive ? "primary.dark" : color,
       }}>
     </Button>
  );
}

