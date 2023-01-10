import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "block",
          overflow: "hidden",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            p: 3,
            top: "50%",
            left: "50%",
            width: "100%",
            maxWidth: 400,
            borderRadius: 1,
            display: "block",
            textAlign: "center",
            position: "absolute",
            alignItems: "center",
            boxSizing: "border-box",
            justifyContent: "center",
            transform: "translate(-50%, -50%)",
          }}
        >
          <SearchIcon sx={{ fontSize: 90, color: "primary.dark" }} />
          <Typography variant="h1" color="text.primary">
            <b>404</b>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Looks like you are lost. Don't worry, we will take you back.
          </Typography>
          <Button variant="contained" onClick={() => navigate(-1)}>
            Let's Go Back
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default NotFound;
