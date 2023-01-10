import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  IconButton,
  MenuItem,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Signature } from "../../../Layout/Images";
import GroupData from "../../../Data/FakeGroup";

const signatureData = [
  {
    value: 1,
    label: "Signature 1",
  },
  {
    value: 2,
    label: "Signature 2",
  },
  {
    value: 3,
    label: "Signature 3",
  },
  {
    value: 4,
    label: "Signature 4",
  },
];

function CreateNewWorkflow({ open, onClose, onSave }) {
  const [workflow, setWorkflow] = useState();

  const handleWorkflow = (event) => {
    setWorkflow(event.target.value);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: 620,
          p: 2,
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            width: "100%",
          }}
        >
          <Box
            sx={{
              padding: 2,
              boxSizing: "border-box",
              borderBottom: 1,
              borderColor: "grey.300",
            }}
          >
            <Stack
              spacing={1}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" component="h2">
                Create CSV Workflow-0176 ?
              </Typography>
              <IconButton
                color="primary"
                component="span"
                size="small"
                onClick={onClose}
              >
                <Close />
              </IconButton>
            </Stack>
          </Box>
          <Box
            sx={{
              padding: 2,
              boxSizing: "border-box",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="workflow-email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="workflow-password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="workflow-remarks"
                  label="Remarks"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="select-signature"
                      label="Select Signature"
                      variant="outlined"
                      size="small"
                      fullWidth
                      required
                      select
                      value={workflow}
                      onChange={handleWorkflow}
                    >
                      {signatureData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        p: 1,
                        border: 1,
                        borderColor: "grey.200",
                        borderRadius: 1,
                      }}
                    >
                      <Box
                        component="img"
                        src={Signature}
                        alt="Signature"
                        sx={{ display: "block", margin: "0 auto", width: 100 }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label={
                        <Typography variant="body2">
                          Reviewer Required
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      Select Reviewer Group/User
                    </Typography>
                    <Autocomplete
                      multiple
                      size="small"
                      id="select_group"
                      options={GroupData}
                      disableCloseOnSelect
                      groupBy={(option) => option.group}
                      getOptionLabel={(option) => option.name}
                      renderOption={(props, option, { selected }) => (
                        <li {...props} style={{ padding: 0 }}>
                          <Checkbox
                            style={{ marginRight: 8 }}
                            checked={selected}
                            size="small"
                          />
                          {option.name}
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Group/User"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">
                      Select Approver Group/User
                    </Typography>
                    <Autocomplete
                      multiple
                      size="small"
                      id="select_approver_group"
                      options={GroupData}
                      disableCloseOnSelect
                      groupBy={(option) => option.group}
                      getOptionLabel={(option) => option.name}
                      renderOption={(props, option, { selected }) => (
                        <li {...props} style={{ padding: 0 }}>
                          <Checkbox
                            style={{ marginRight: 8 }}
                            checked={selected}
                            size="small"
                          />
                          {option.name}
                        </li>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select Group/User"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  spacing={1}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Button
                    onClick={onClose}
                    size="medium"
                    color="inherit"
                    disableElevation
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={onSave}
                    size="medium"
                    color="primary"
                    variant="contained"
                    disableElevation
                  >
                    Create
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default CreateNewWorkflow;
