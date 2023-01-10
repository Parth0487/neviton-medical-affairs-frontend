import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  AddButton,
  StyledButton,
} from "../../../Layout/Components/Styled_Button";
import { Box } from "@mui/system";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Spacer from "../../../Layout/Components/Spacer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import {
  Tabs,
  TabPanel,
  TabContainer,
} from "../../../Layout/Components/CustomTabs";
import TeamBlock from "./TeamBlock";
import CreateNewWorkflow from "./CreateNewWorkflow";
import Successful from "./Successful";
import RemoveIcon from "@mui/icons-material/Remove";

const workflowData = [
  {
    value: 1,
    label: "General Workflow",
  },
  {
    value: 2,
    label: "Template Workflow",
  },
  {
    value: 3,
    label: "Document Workflow",
  },
  {
    value: 4,
    label: "Exe-Document Workflow",
  },
];

function NewWorkflow() {
  const [workflow, setWorkflow] = useState();
  const [value, setValue] = useState(0);
  const [direction, setDirection] = useState("Serial");
  const [saveWorkflow, setSaveWorkflow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleToggle = (event, value) => {
    setDirection(value);
  };

  const handleWorkflow = (event) => {
    setWorkflow(event.target.value);
  };

  const handleTab = (newValue) => {
    setValue(newValue);
  };

  const handleSaveWorkflow = () => {
    setSaveWorkflow(true);
  };

  const handleCloseWorkflow = () => {
    setSaveWorkflow(false);
  };

  const handleSuccess = () => {
    setSuccess(true);
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
  };

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
                <b>New Workflow - WF0176</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="body2">Target</Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  bgcolor: "#FF4A6F",
                  color: "#ffffff",
                  p: 1,
                  borderRadius: 1,
                }}
              >
                <Typography variant="body2">23/04/2022</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Task ID: <b>TSK/WF08</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="department-code"
                        label="Department Code"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="workflow-type"
                        label="Select Workflow Type"
                        variant="outlined"
                        size="small"
                        fullWidth
                        required
                        select
                        value={workflow}
                        onChange={handleWorkflow}
                      >
                        {workflowData.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="description"
                        label="Description"
                        variant="outlined"
                        fullWidth
                        size="small"
                        multiline
                        maxRows={4}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <AddButton
                        color="info"
                        startIcon={
                          <Add
                            sx={{
                              bgcolor: "common.white",
                              color: "info.main",
                              borderRadius: "50%",
                            }}
                          />
                        }
                      >
                        Add Reviewerflow
                      </AddButton>
                    </Grid>
                    <Grid item xs={12}>
                      <AddButton
                        color="primary"
                        startIcon={
                          <Add
                            sx={{
                              bgcolor: "common.white",
                              color: "primary.main",
                              borderRadius: "50%",
                            }}
                          />
                        }
                      >
                        Add Approverflow
                      </AddButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <AddButton
                        color="error"
                        startIcon={
                          <RemoveIcon
                            sx={{
                              bgcolor: "common.white",
                              color: "error.main",
                              borderRadius: "50%",
                            }}
                          />
                        }
                      >
                        Delete Reviewerflow
                      </AddButton>
                    </Grid>
                    <Grid item xs={12}>
                      <AddButton
                        color="error"
                        startIcon={
                          <RemoveIcon
                            sx={{
                              bgcolor: "common.white",
                              color: "error.main",
                              borderRadius: "50%",
                            }}
                          />
                        }
                      >
                        Delete Approverflow
                      </AddButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <Grid item>
                      <Typography variant="caption">Total Duration:</Typography>
                    </Grid>
                    <Grid item>
                      <Box
                        sx={{
                          bgcolor: "grey.200",
                          py: 0.5,
                          px: 1,
                          borderRadius: 1,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <HourglassBottomIcon sx={{ mr: 1 }} />
                        <Typography variant="caption">
                          <b>06 Days</b>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <TabContainer>
                        <Tabs
                          name="Reviewer Flow"
                          active={value === 0}
                          onClick={() => handleTab(0)}
                          activeColor="info.main"
                        />
                        <ChevronRightIcon />
                        <Tabs
                          name="Approver Flow"
                          active={value === 1}
                          onClick={() => handleTab(1)}
                          activeColor="primary.main"
                        />
                      </TabContainer>
                    </Grid>
                    <Grid item xs={12}>
                      <TabPanel value={value} index={0}>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Typography>
                              <b>Reviewer Team</b>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <ToggleButtonGroup
                              exclusive
                              size="small"
                              color="info"
                              value={direction}
                              onChange={handleToggle}
                            >
                              <ToggleButton value="Parallel">
                                Parallel
                              </ToggleButton>
                              <ToggleButton value="Serial">Serial</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid
                              container
                              spacing={1}
                              direction={{
                                xs: "column",
                                sm: "column",
                                md: "row",
                                lg: "row",
                                xl: "row",
                              }}
                              justifyContent="flex-start"
                              alignItems="center"
                            >
                              <Grid item>
                                <TeamBlock index="01" />
                              </Grid>
                              <Grid item>
                                <ChevronRightIcon
                                  color="secondary"
                                  sx={{
                                    m: 0,
                                    transform: {
                                      xs: "rotate(90deg)",
                                      sm: "rotate(90deg)",
                                      md: "rotate(0deg)",
                                      lg: "rotate(0deg)",
                                      xl: "rotate(0deg)",
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <TeamBlock index="02" />
                              </Grid>
                              <Grid item>
                                <ChevronRightIcon
                                  color="secondary"
                                  sx={{
                                    m: 0,
                                    transform: {
                                      xs: "rotate(90deg)",
                                      sm: "rotate(90deg)",
                                      md: "rotate(0deg)",
                                      lg: "rotate(0deg)",
                                      xl: "rotate(0deg)",
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <TeamBlock index="03" />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <Grid
                          container
                          spacing={2}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Typography>
                              <b>Approver Team</b>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <ToggleButtonGroup
                              exclusive
                              size="small"
                              color="info"
                              value={direction}
                              onChange={handleToggle}
                            >
                              <ToggleButton value="Parallel">
                                Parallel
                              </ToggleButton>
                              <ToggleButton value="Serial">Serial</ToggleButton>
                            </ToggleButtonGroup>
                          </Grid>
                          <Grid item xs={12}>
                            <Grid
                              container
                              spacing={1}
                              direction={{
                                xs: "column",
                                sm: "column",
                                md: "row",
                                lg: "row",
                                xl: "row",
                              }}
                              justifyContent="flex-start"
                              alignItems="center"
                            >
                              <Grid item>
                                <TeamBlock index="01" />
                              </Grid>
                              <Grid item>
                                <ChevronRightIcon
                                  color="secondary"
                                  sx={{
                                    m: 0,
                                    transform: {
                                      xs: "rotate(90deg)",
                                      sm: "rotate(90deg)",
                                      md: "rotate(0deg)",
                                      lg: "rotate(0deg)",
                                      xl: "rotate(0deg)",
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <TeamBlock index="02" />
                              </Grid>
                              <Grid item>
                                <ChevronRightIcon
                                  color="secondary"
                                  sx={{
                                    m: 0,
                                    transform: {
                                      xs: "rotate(90deg)",
                                      sm: "rotate(90deg)",
                                      md: "rotate(0deg)",
                                      lg: "rotate(0deg)",
                                      xl: "rotate(0deg)",
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <TeamBlock index="03" />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </TabPanel>
                    </Grid>
                  </Grid>
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
            <Button variant="outlined" color="info">
              Save as Draft
            </Button>
            <StyledButton variant="contained" onClick={handleSaveWorkflow}>
              Save
            </StyledButton>
          </Stack>
        </Grid>
      </Grid>
      <Spacer height={2} />
      <CreateNewWorkflow
        open={saveWorkflow}
        onClose={handleCloseWorkflow}
        onSave={handleSuccess}
      />
      <Successful open={success} onClose={handleCloseSuccess} />
    </>
  );
}

export default NewWorkflow;
