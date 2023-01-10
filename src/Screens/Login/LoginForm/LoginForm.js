import React from "react";
import { Box, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledButton } from "../../../Layout/Components/Styled_Button";
import { Login_Left } from "../../../Layout/Images";
import { Stack } from "@mui/system";

function LoginForm() {
  return (
    <Stack
      direction={{
        lg: "row",
        md: "column",
      }}
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "calc(100vh - 131px)",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid container spacing={0} direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
              <Box
                component="img"
                src={Login_Left}
                alt="Login"
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  display: "block",
                  margin: "0 auto 48px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  margin: {
                    xs: "0 auto",
                    sm: "0 auto",
                    md: "0 0 0 auto",
                  },
                }}
              >
                <Card
                  sx={{
                    mb: 2,
                    border: 1,
                    borderColor: "grey.300",
                  }}
                  elevation={0}
                >
                  <CardContent>
                    <Grid container spacing={2} direction="column">
                      <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom component="p" color="secondary">
                          <b>Login To DMS</b>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <TextField id="Username" label="Enter Your User Name" variant="outlined" required fullWidth />
                      </Grid>
                      <Grid item>
                        <TextField id="login-password" label="Enter Your Password" variant="outlined" required fullWidth />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          color="text.secondary"
                          to="/forgot-password"
                          component={Link}
                          variant="caption"
                          sx={{
                            textDecoration: "none",
                            textAlign: "right",
                            display: "block",
                          }}
                        >
                          <b>Forgot Password</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <StyledButton variant="contained" component={Link} size="large" fullWidth to="/app">
                          Login
                        </StyledButton>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="body2"
                          color="secondary.main"
                          sx={{
                            fontWeight: 400,
                          }}
                          align="center"
                        >
                          Not A Registered Partner?{" "}
                          <Typography
                            component={Link}
                            variant="body2"
                            to="#"
                            sx={{
                              color: "primary.main",
                            }}
                          >
                            <b>REGISTER</b>
                          </Typography>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default LoginForm;
