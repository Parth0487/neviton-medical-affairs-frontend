import { Box, Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";

function PageInner() {
  return (
    <Box sx={{ p: 2, boxSizing: "border-box" }}>
      <Container sx={{ maxWidth: "none !important", height: "100%" }}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default PageInner;
