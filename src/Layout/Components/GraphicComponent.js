import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function NumberGraphic({ name }) {
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        border: 2,
        borderColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        bgcolor: "secondary.main",
        color: "secondary.contrastText",
      }}
    >
      <Typography variant="h6">
        <b>{name}</b>
      </Typography>
    </Box>
  );
}

export { NumberGraphic };
