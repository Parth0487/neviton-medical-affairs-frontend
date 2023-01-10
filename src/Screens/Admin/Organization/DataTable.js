/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import OrganizationListData from "../../../Data/FakeOrganization";
import TableDelete from "./TableDelete";
import Spacer from "../../../Layout/Components/Spacer";
import Table from "../../../Layout/Table";

function DataTable() {
  const data = OrganizationListData;
  const [deleteRow, setDeleteRow] = useState(false);

  const handleDeleteRow = () => setDeleteRow(true);
  const handleDeleteCloseRow = () => setDeleteRow(false);

  const columns = [
    { field: "id", headerName: "SI No.", width: 70 },
    { field: "org_name", headerName: "Organization", minWidth: 130, flex: 1 },
    { field: "code", headerName: "Code", minWidth: 130, flex: 1 },
    { field: "created_by", headerName: "Created By", minWidth: 130, flex: 1 },
    { field: "created_on", headerName: "SI No.", minWidth: 130, flex: 1 },
    { field: "updated_by", headerName: "Updated By", minWidth: 130, flex: 1 },
    { field: "updated_on", headerName: "Updated On", minWidth: 130, flex: 1 },
    {
      field: "delete",
      headerName: " ",
      width: 30,
      renderCell: (params) => {
        return (
          <IconButton
            size="small"
            color="error"
            key={`${params.row.id}_Delete`}
            onClick={handleDeleteRow}
          >
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>
        );
      },
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
