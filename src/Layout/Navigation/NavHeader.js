import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Logo_Strides, Icon_Settings_Tick } from "../Images";
import MenuIcon from "@mui/icons-material/Menu";

function NavHeader({ onExpand }) {
  return (
    <Box
      sx={{
        p: { xs: 1, sm: 1, md: 2 },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "common.white",
        position: "fixed",
        left: 0,
        width: { xs: "100%", sm: "100%", md: 248 },
        boxShadow: { xs: 2, sm: 2, md: 0 },
        minHeight: 60,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          sx={{ display: { xs: "inherit", sm: "inherit", md: "none" } }}
          onClick={onExpand}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          src={Logo_Strides}
          sx={{ width: 100 }}
          alt="Logo"
        />
      </Box>
      <Box
        sx={{
          p: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          bgcolor: "primary.main",
          boxSizing: "border-box",
          justifyContent: "space-between",
          borderRadius: 1,
          cursor: "pointer",
        }}
      >
        <Box
          component="img"
          src={Icon_Settings_Tick}
          alt="edms"
          sx={{ width: 18, mr: 1 }}
        />
        <Typography variant="body2" color="primary.contrastText">
          EDMS
        </Typography>
      </Box>
    </Box>
  );
}

export default NavHeader;
