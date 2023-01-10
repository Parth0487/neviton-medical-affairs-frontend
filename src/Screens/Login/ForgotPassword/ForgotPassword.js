import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { StyledButton } from "../../../Layout/Components/Styled_Button";

function ForgotPasswordForm() {
  return (
    <Stack
      direction={{ lg: "row", md: "column" }}
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "calc(100vh - 131px)",
      }}
    >
      <Box
        sx={{
          width: { lg: "30%", md: "100%", sm: "100%", xs: "100%" },
          maxWidth: { lg: 400, md: "inherit", sm: "inherit", xs: "inherit" },
        }}
      >
        <Card sx={{ mb: 4, border: 1, borderColor: "grey.300" }} elevation={0}>
          <CardContent>
            <Grid container spacing={1} direction="column">
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom component="h1">
                  <b>Forgot Password</b>
                </Typography>
                <Typography variant="body2" component="p" sx={{ mb: 2 }}>
                  Forgot password. Don&apos;t worry. We will resolve this ASAP
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  id="login-username"
                  label="Enter Your User Name"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ px: 2, pb: 2 }}>
            <Stack
              sx={{ width: "100%" }}
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <StyledButton
                variant="contained"
                fullWidth
                size="large"
                component={Link}
                to="#"
              >
                Submit
              </StyledButton>
              <Typography
                color="secondary.main"
                variant="body2"
                gutterBottom
                component="p"
              >
                We send you and email. Please check now.
              </Typography>
              <Typography
                variant="body2"
                color="secondary.main"
                sx={{ fontWeight: 400, width: "100%" }}
                align="center"
              >
                <Typography
                  component={Link}
                  variant="body2"
                  to="/"
                  sx={{ color: "primary.main" }}
                >
                  <b>Back To Login</b>
                </Typography>
              </Typography>
            </Stack>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  );
}

export default ForgotPasswordForm;
