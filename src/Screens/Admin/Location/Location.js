import {
  Button,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import DataTable from "./DataTable";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Spacer from "../../../Layout/Components/Spacer";
import { StyledButton } from "../../../Layout/Components/Styled_Button";
import { Search } from "@mui/icons-material";

const countries = [
  {
    value: 1,
    label: "India",
  },
  {
    value: 2,
    label: "USA",
  },
  {
    value: 3,
    label: "UK",
  },
];

const timezones = [
  {
    value: 1,
    label: "UTC +5:30",
  },
  {
    value: 2,
    label: "UTC -5",
  },
  {
    value: 3,
    label: "UTC +8",
  },
];

function Location() {
  const [country, setCountry] = useState();
  const [timezone, setTimezone] = useState();
  const [startDate, setStartDate] = useState(dayjs("2014-08-18T21:11:54"));
  const [endDate, setEndDate] = useState(dayjs("2014-08-18T21:11:54"));

  const handleChangeStartDate = (newValue) => {
    setStartDate(newValue);
  };
  const handleChangeEndDate = (newValue) => {
    setEndDate(newValue);
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeTimezone = (event) => {
    setTimezone(event.target.value);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary.main" gutterBottom>
            <b>Location</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="secondary.main">
            New Location
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                    id="location-name"
                    label="Location"
                    variant="outlined"
                    fullWidth
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                    id="location-code"
                    label="Location Code"
                    variant="outlined"
                    fullWidth
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                    id="location-country"
                    label="Country"
                    variant="outlined"
                    fullWidth
                    required
                    size="small"
                    select
                    value={country}
                    onChange={handleChangeCountry}
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                    id="location-timezone"
                    label="Timezone"
                    variant="outlined"
                    fullWidth
                    required
                    size="small"
                    select
                    value={timezone}
                    onChange={handleChangeTimezone}
                  >
                    {timezones.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <TextField
                    id="location-full-address"
                    label="Full Address"
                    variant="outlined"
                    fullWidth
                    size="small"
                    multiline
                    maxRows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <DesktopDatePicker
                    label="Financial Year Start"
                    inputFormat="MM/DD/YYYY"
                    value={startDate}
                    onChange={handleChangeStartDate}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} size="small" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <DesktopDatePicker
                    label="Financial Year End"
                    inputFormat="MM/DD/YYYY"
                    value={endDate}
                    onChange={handleChangeEndDate}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} size="small" />
                    )}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Button
              variant="outlined"
              sx={{ borderColor: "grey.600", color: "grey.600" }}
            >
              Cancel
            </Button>
            <StyledButton variant="contained">Create</StyledButton>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Spacer height={2} />
        </Grid>
        <Grid item xs={12}>
          <Stack
            spacing={1}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="h6" color="secondary.main">
              Location List
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

export default Location;
