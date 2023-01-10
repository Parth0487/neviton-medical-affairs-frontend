import { useTheme } from "@emotion/react";
import { Collapse, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useLocation } from "react-router-dom";

function ExpandIconNavMenu({ name, icon, activeLink, children }) {
  const [checked, setChecked] = useState(false);
  const location = useLocation();

  const handleExpand = () => {
    setChecked(!checked);
  };

  const handleMainExpand = () => {
    setChecked(false);
  };

  const handleMainCloser = () => {
    setChecked(true);
  };

  useEffect(() => {
    window.addEventListener("resize", handleMainExpand, true);
  }, []);

  useEffect(() => {
    if (location.pathname.indexOf(activeLink) != -1) {
      handleMainCloser();
    } else {
      handleMainExpand();
    }
  }, [location.pathname]);

  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          py: 1,
          pl: 3,
          pr: 1,
          flex: "row",
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "text.primary",
          textDecoration: "none",
          boxSizing: "border-box",
          justifyContent: "flex-start",
          backgroundColor: checked ? theme.palette.grey[200] : "transparent",
          ":hover": {
            bgcolor: "grey.200",
          },
        }}
        onClick={handleExpand}
      >
        <Box component="img" src={icon} alt="name" sx={{ mr: 2, width: 14 }} />
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2">{name}</Typography>
        </Box>
        {checked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Box>
      <Collapse in={checked}>{children}</Collapse>
    </Box>
  );
}

export default ExpandIconNavMenu;
