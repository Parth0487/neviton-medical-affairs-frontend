/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Chip, IconButton, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Table from "../../../Layout/Table";
import WorkflowData from "../../../Data/FakeWorkflow";
import TableDelete from "./TableDelete";
import Spacer from "../../../Layout/Components/Spacer";
import { Link } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

function DataTable() {
  const data = WorkflowData;
  const [deleteRow, setDeleteRow] = useState(false);

  const handleDeleteRow = () => setDeleteRow(true);
  const handleDeleteCloseRow = () => setDeleteRow(false);

  const handleColor = (e) => {
    if (e === "Assigned") return "#0DD08B";
    if (e === "Unassigned") return "#FFA200";
    if (e === "Review Pending") return "#E40034";
    if (e === "Approval Pending") return "#E40034";
    if (e === "Yet to Start") return "#347EFF";
    else return "black";
  };

  const columns = [
    {
      field: "edit",
      headerName: "",
      width: 30,
      renderCell: (params) => (
        <IconButton
          size="small"
          color="primary"
          component={Link}
          to="/app/workflow/new-workflow"
        >
          <CreateOutlinedIcon fontSize="small" />
        </IconButton>
      ),
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      headerName: "SI No.",
      field: "id",
      width: 70,
    },
    {
      headerName: "Name/Id",
      field: "name",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Workflow Type",
      field: "type",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Task Id",
      field: "task_id",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Reviewer",
      field: "reviewer",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Approver",
      field: "approver",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: (params) => (
        <Typography variant="body2" color={handleColor(params.row.status)}>
          {params.row.status}
        </Typography>
      ),
      minWidth: 140,
      flex: 1,
    },
    {
      field: "action",
      headerName: "",
      renderCell: (params) => {
        if (params.row.status === "Review Pending") {
          return (
            <Chip
              size="small"
              color="primary"
              icon={<TaskAltIcon />}
              label={params.row.status}
            />
          );
        }
        if (params.row.status === "Approval Pending") {
          return (
            <Chip
              size="small"
              color="primary"
              icon={<TaskAltIcon />}
              label={params.row.status}
            />
          );
        } else {
          return "";
        }
      },
      minWidth: 190,
      flex: 1,
    },
    {
      field: "deleteTable",
      headerName: "",
      width: 30,
      renderCell: (params) => (
        <>
          <IconButton
            size="small"
            color="error"
            key={`${params.row.id}_Delete`}
            onClick={handleDeleteRow}
          >
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>
        </>
      ),
      sortable: false,
      filterable: false,
      hideable: false,
    },
  ];

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs>
          <Table data={data} columns={columns} />
        </Grid>
      </Grid>
      <TableDelete open={deleteRow} onClose={handleDeleteCloseRow} />
      <Spacer height={2} />
    </>
  );
}

export default DataTable;
