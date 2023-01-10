import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack, Typography, Checkbox, Paper } from "@mui/material";

function CustomHeader({ name }) {
  return (
    <td style={{ borderBottom: "1px solid #eeeeee" }}>
      <Stack
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: 50 }}
      >
        <Typography variant="body2" color="secondary">
          <b>{name}</b>
        </Typography>
      </Stack>
    </td>
  );
}

function DataTable() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h6" color="secondary.main">
            Role Privileges
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{ overflowX: "auto", overflowY: "hidden", pb: 2 }}
            component={Paper}
          >
            <table
              style={{
                tableLayout: "fixed",
                width: "100%",
                minWidth: 976,
                position: "relative",
              }}
              cellPadding={2}
              cellSpacing={0}
            >
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <CustomHeader name="ADMINISTRATION" />

                  <CustomHeader name="All" />

                  <CustomHeader name="View" />

                  <CustomHeader name="Create" />

                  <CustomHeader name="Edit" />

                  <CustomHeader name="Delete" />

                  <CustomHeader name="Others" />
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ textAlign: "left", paddingLeft: 16 }}>
                    Business Unit
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ textAlign: "left", paddingLeft: 16 }}>
                    Location
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ textAlign: "left", paddingLeft: 16 }}>
                    Division
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ textAlign: "left", paddingLeft: 16 }}>
                    Department
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ textAlign: "left", paddingLeft: 16 }}>Role</td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td style={{ textAlign: "left", paddingLeft: 16 }}>
                    Employee Master
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                  <td>
                    <Checkbox />
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default DataTable;
