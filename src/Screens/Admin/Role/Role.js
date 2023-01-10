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
import React, { useState } from "react";
import {
  StyledButton,
  AddButtonLink,
} from "../../../Layout/Components/Styled_Button";
import Spacer from "../../../Layout/Components/Spacer";
import DataTable from "./DataTable";
import { Search } from "@mui/icons-material";

const modules = [
  {
    value: 1,
    label: "Module 56",
  },
  {
    value: 2,
    label: "Module 15",
  },
  {
    value: 3,
    label: "Module 42",
  },
  {
    value: 4,
    label: "Module 52",
  },
  {
    value: 5,
    label: "Module 12",
  },
];

const roles = [
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

function Role() {
  const [module, setModule] = useState();
  const [role, setRole] = useState();

  const handleChangeModule = (event) => {
    setModule(event.target.value);
  };

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary.main" gutterBottom>
            <b>Role</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="secondary.main">
            Role Member
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <TextField
                    id="role-module"
                    label="Module"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    select
                    value={module}
                    onChange={handleChangeModule}
                  >
                    {modules.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                  <TextField
                    id="role-role"
                    label="Role"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    select
                    value={role}
                    onChange={handleChangeRole}
                  >
                    {roles.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={1}
                  >
                    <Button
                      variant="contained"
                      color="info"
                      sx={{ borderRadius: 50, height: 40 }}
                      disableElevation
                    >
                      View Members
                    </Button>
                    <AddButtonLink
                      name="New Role"
                      toLink="/app/admin/new-role"
                    />
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
              Role List
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

export default Role;
