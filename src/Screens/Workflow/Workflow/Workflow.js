import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import {
  Chip,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import DataTable from "./DataTable";
import { AddButtonLink } from "../../../Layout/Components/Styled_Button";
import Spacer from "../../../Layout/Components/Spacer";

const businessUnitData = [
  {
    value: 1,
    label: "All",
  },
  {
    value: 2,
    label: "Arcolab Pvt Ltd, BLR",
  },
  {
    value: 3,
    label: "Arcolab Pvt Ltd, HYD",
  },
  {
    value: 4,
    label: "Strides Pvt Ltd, BLR",
  },
  {
    value: 5,
    label: "Strides Pvt Ltd, USA",
  },
];

const filterData = [
  {
    value: 1,
    label: "All",
  },
  {
    value: 2,
    label: "General Workflow",
  },
  {
    value: 3,
    label: "Template Workflow",
  },
  {
    value: 4,
    label: "Document Workflow",
  },
  {
    value: 5,
    label: "Exe-Document Workflow",
  },
];

function Workflow() {
  const [businessUnit, setBusinessUnit] = useState(1);
  const [filter, setFilter] = useState(1);

  const handleBusinessUnit = (event) => {
    setBusinessUnit(event.target.value);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography variant="h5" color="secondary.main" gutterBottom>
                <b>Workflow</b>
              </Typography>
            </Grid>
            <Grid item>
              <AddButtonLink
                name="Create Workflow"
                toLink="/app/workflow/new-workflow"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Spacer height={2} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Typography variant="h6" color="secondary.main">
                Workflow List
              </Typography>
            </Grid>
            <Grid item>
              <Chip
                label="56"
                sx={{
                  bgcolor: "secondary.main",
                  color: "white",
                  border: 1,
                  borderColor: "primary.main",
                }}
                size="small"
              />
            </Grid>
            <Grid item xs>
              <TextField
                placeholder="Search"
                variant="outlined"
                size="small"
                fullWidth
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
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="workflow-filter"
                variant="outlined"
                size="small"
                fullWidth
                required
                select
                value={businessUnit}
                onChange={handleBusinessUnit}
              >
                {businessUnitData.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="workflow-business-unit"
                variant="outlined"
                size="small"
                fullWidth
                required
                select
                value={filter}
                onChange={handleFilter}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Filter : </InputAdornment>
                  ),
                }}
              >
                {filterData.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <DataTable />
        </Grid>
      </Grid>
    </>
  );
}

export default Workflow;
