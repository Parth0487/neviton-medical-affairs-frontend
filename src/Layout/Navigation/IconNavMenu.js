import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

function IconNavMenu({ name, toLink, icon }) {
  const theme = useTheme();
  return (
    <Box
      component={NavLink}
      to={toLink}
      sx={{
        py: 1,
        px: 3,
        flex: "row",
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "text.primary",
        textDecoration: "none",
        boxSizing: "border-box",
        justifyContent: "flex-start",
        ":hover": {
          bgcolor: "grey.200",
        },
      }}
      style={({ isActive }) =>
        isActive
          ? {
              borderRight: "4px solid",
              borderColor: theme.palette.secondary.main,
              backgroundColor: theme.palette.grey[200],
            }
          : {
              borderRight: "0px solid",
              borderColor: "transparent",
            }
      }
    >
      {icon ? (
        <Box component="img" src={icon} alt="name" sx={{ mr: 2, width: 14 }} />
      ) : (
        <Box sx={{ mr: 2, width: 18 }} />
      )}

      <Typography variant="body2">{name}</Typography>
    </Box>
  );
}

export default IconNavMenu;
