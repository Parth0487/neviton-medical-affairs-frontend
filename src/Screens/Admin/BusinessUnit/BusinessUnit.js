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
import React, { useState } from "react";
import Spacer from "../../../Layout/Components/Spacer";
import DataTable from "./DataTable";
import { StyledButton } from "../../../Layout/Components/Styled_Button";

const locationData = [
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

const departmentData = [
  {
    value: 1,
    label: "HR",
  },
  {
    value: 2,
    label: "Training",
  },
  {
    value: 3,
    label: "Finance",
  },
  {
    value: 4,
    label: "Sales",
  },
  {
    value: 5,
    label: "Development",
  },
];

const roleData = [
  {
    value: 1,
    label: "CEO",
  },
  {
    value: 2,
    label: "CTO",
  },
  {
    value: 3,
    label: "CIO/Chief Digital Officer/Chief Innovation Officer",
  },
  {
    value: 4,
    label: "VP of Product Management/Head of Product",
  },
  {
    value: 5,
    label: "Product Manager",
  },
  {
    value: 6,
    label: "VP of Marketing",
  },
  {
    value: 7,
    label: "VP of Engineering/Director of Engineering",
  },
  {
    value: 8,
    label: "Chief Architect",
  },
  {
    value: 9,
    label: "Software Architect",
  },
  {
    value: 10,
    label: "Engineering Project Manager/Engineering Manager",
  },
  {
    value: 11,
    label: "Technical Lead/Engineering Lead/Team Lead",
  },
  {
    value: 12,
    label: "Principal Software Engineer",
  },
  {
    value: 13,
    label: "Senior Software Engineer/Senior Software Developer",
  },
  {
    value: 14,
    label: "Software Engineer",
  },
  {
    value: 15,
    label: "Software Developer",
  },
  {
    value: 16,
    label: "Junior Software Developer",
  },
  {
    value: 17,
    label: "Intern Software Developer",
  },
];

function BusinessUnit() {
  const [location, setLocation] = useState();
  const [department, setDepartment] = useState();
  const [role, setRoles] = useState();

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleRoles = (event) => {
    setRoles(event.target.value);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary.main" gutterBottom>
            <b>Business Unit</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="secondary.main">
            New Business Unit
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <TextField
                    id="business-unit"
                    label="Business Unit"
                    variant="outlined"
                    fullWidth
                    required
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      id="business-unit-location"
                      label="Location"
                      variant="outlined"
                      fullWidth
                      required
                      select
                      value={location}
                      onChange={handleChangeLocation}
                      size="small"
                    >
                      {locationData.map((option) => (
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
                      id="business-department"
                      label="Department"
                      variant="outlined"
                      fullWidth
                      required
                      select
                      value={department}
                      onChange={handleDepartment}
                      size="small"
                    >
                      {departmentData.map((option) => (
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
                      id="business-role"
                      label="Role"
                      variant="outlined"
                      fullWidth
                      required
                      select
                      value={role}
                      onChange={handleRoles}
                      size="small"
                    >
                      {roleData.map((option) => (
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
              Business Unit List
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
