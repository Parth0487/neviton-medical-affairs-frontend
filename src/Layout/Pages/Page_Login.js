import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

function PageLogin({ FullLogo }) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        p: 2,
        position: "relative",
        display: "block",
        boxSizing: "border-box",
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          maxWidth: "none !important",
          pl: { xs: "0 !important", sm: "inherit !important" },
          pr: { xs: "0 !important", sm: "inherit !important" },
        }}
      >
        <Stack
          flexDirection="column"
          justifyContent="space-between"
          alignItems="inherit"
          sx={{
            minHeight: "calc(100vh - 32px)",
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Box
              component="img"
              src={FullLogo}
              alt="Spotlight"
              sx={{
                display: "block",
                width: { xs: 80, sm: 90, md: 120 },
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Outlet />
          </Box>
          <Box>
            <Typography
              variant="caption"
              gutterBottom
              align="right"
              component="p"
            >
              Copyrights &copy; 2022 Connect My Partner, All Rights Reserved
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default PageLogin;
