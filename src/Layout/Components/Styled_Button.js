import { useTheme } from "@emotion/react";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: 120,
  boxShadow: `0 10px 16px -8px ${theme.palette.primary.light}`,
  "&:hover": {
    boxShadow: `0 10px 16px -8px ${theme.palette.primary.light}`,
  },
}));

function AddButtonLink({ name, toLink }) {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 50,
        height: 40,
        bgcolor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
          bgcolor: theme.palette.primary.dark,
        },
      }}
      startIcon={
        <Add
          sx={{
            bgcolor: "common.white",
            color: "primary.main",
            borderRadius: "50%",
            boxShadow: "0 0 10px rgb(21 112 75 / 53%)",
          }}
        />
      }
      component={Link}
      to={toLink}
      disableElevation
    >
      {name}
    </Button>
  );
}

function AddButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 50,
        height: 40,
      }}
      disableElevation
      {...props}
    >
      {children}
    </Button>
  );
}

export { StyledButton, AddButtonLink, AddButton };
