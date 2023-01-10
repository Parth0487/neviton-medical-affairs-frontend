import React, { useState } from "react";
import { Add, Edit, Search } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { StyledButton } from "../../../Layout/Components/Styled_Button";
import Spacer from "../../../Layout/Components/Spacer";
import DataTable from "./DataTable";

const locations = [
  {
    value: 1,
    label: "Mumbai",
  },
  {
    value: 2,
    label: "Kolkata",
  },
  {
    value: 3,
    label: "Jaipur",
  },
  {
    value: 4,
    label: "Hyderabad",
  },
  {
    value: 5,
    label: "Bengaluru",
  },
];

function Department() {
  const [location, setLocation] = useState();

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary.main" gutterBottom>
            <b>Division</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="secondary.main">
            New Divsion
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                    id="division-name"
                    label="Division"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                    id="division-code"
                    label="Code"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                    id="department"
                    label="Select Department"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    select
                    value={location}
                    onChange={handleChangeLocation}
                  >
                    {locations.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      id="business-unit"
                      label="Business Unit"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      select
                      value={location}
                      onChange={handleChangeLocation}
                    >
                      {locations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Stack direction="column">
                      <IconButton size="small" color="info" sx={{ p: "1px" }}>
                        <Edit fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="success"
                        sx={{ p: "1px" }}
                      >
                        <Add fontSize="inherit" />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      id="business-unit-location"
                      label="Location"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      select
                      value={location}
                      onChange={handleChangeLocation}
                    >
                      {locations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Stack direction="column">
                      <IconButton size="small" color="info" sx={{ p: "1px" }}>
                        <Edit fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="success"
                        sx={{ p: "1px" }}
                      >
                        <Add fontSize="inherit" />
                      </IconButton>
                    </Stack>
                  </Stack>
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
              Division List
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

export default Department;
