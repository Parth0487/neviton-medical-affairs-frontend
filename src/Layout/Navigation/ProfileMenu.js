import React, { useState } from "react";
import { Grid, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

function ProfileMenu({ profileImg, name, mail }) {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    navigate("/")
  }
  return (
    <>
      <Box>
        <Grid
          container
          spacing={1}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Box
              component="img"
              alt="Spotlight"
              src={profileImg}
              sx={{
                width: 40,
                border: 2,
                display: "block",
                cursor: "pointer",
                borderRadius: "50%",
                borderColor: "primary.main",
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <Typography
              component="p"
              variant="body2"
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {name}
            </Typography>
            <Typography
              component="p"
              variant="caption"
              color="primary.main"
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {mail}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClick} size="small">
              <MoreHorizIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={{ sx: { width: 200 } }}
      >
        <MenuItem dense onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem dense onClick={() => logout()}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default ProfileMenu;
