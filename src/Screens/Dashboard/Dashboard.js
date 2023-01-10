import { Grid, Typography } from "@mui/material";
import React from "react";
function Dashboard() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary.main" gutterBottom>
            <b>Dashboard</b>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
