import React from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Spacer from "../../../Layout/Components/Spacer";
import DataTable from "./DataTable";
import { StyledButton } from "../../../Layout/Components/Styled_Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function NewRole() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item>
              <IconButton
                sx={{
                  border: 1,
                  borderColor: "grey.300",
                }}
                onClick={() => navigate(-1)}
                size="small"
              >
                <ArrowBackIcon fontSize="inherit" />
              </IconButton>
            </Grid>
            <Grid item xs>
              <Typography variant="h5" color="secondary.main">
                <b>New Role</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="secondary.main">
            Basic Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={3}>
                  <TextField
                    id="new-role-name"
                    label="Role Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                  <TextField
                    id="new-role-Description"
                    label="Description"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    multiline
                    maxRows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Two Factor Authentication"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Spacer height={2} />
        </Grid>
        <Grid item xs={12}>
          <DataTable />
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
      </Grid>
      <Spacer height={2} />
    </>
  );
}

export default NewRole;
