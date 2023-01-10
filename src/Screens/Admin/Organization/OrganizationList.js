import { Search } from "@mui/icons-material";
import {
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DataTable from "./DataTable";

function BusinessUnit() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary.main" gutterBottom>
            <b>Organization</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack
            spacing={1}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="h6" color="secondary.main">
              Organization List
            </Typography>
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              sx={{
                "& fieldset": {
                  borderRadius: 5,
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <DataTable />
        </Grid>
      </Grid>
    </>
  );
}

export default BusinessUnit;
