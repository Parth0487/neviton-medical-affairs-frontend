/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BusinessUnitData from "../../../Data/FakeBusinessUnit";
import TableDelete from "./TableDelete";
import Spacer from "../../../Layout/Components/Spacer";
import Table from "../../../Layout/Table/Table";

function DataTable() {
  const data = BusinessUnitData;
  const [deleteRow, setDeleteRow] = useState(false);

  const handleDeleteRow = () => setDeleteRow(true);
  const handleDeleteCloseRow = () => setDeleteRow(false);

  const columns = [
    {
      field: "edit",
      headerName: "",
      renderCell: (params) => (
        <IconButton size="small" color="primary">
          <CreateOutlinedIcon fontSize="small" />
        </IconButton>
      ),
      width: 30,
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
      headerName: "Business Unit",
      field: "name",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Location",
      field: "location",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Users",
      field: "users",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Department",
      field: "department",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Role",
      field: "role",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Created By",
      field: "created_by",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Created On",
      field: "created_on",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Updated By",
      field: "updated_by",
      minWidth: 130,
      flex: 1,
    },
    {
      headerName: "Updated On",
      field: "updated_on",
      minWidth: 130,
      flex: 1,
    },
    {
      field: "delete",
      headerName: "",
      renderCell: (params) => (
        <IconButton
          size="small"
          color="error"
          key={`${params.row.id}_Delete`}
          onClick={handleDeleteRow}
        >
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
      ),
      width: 30,
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
