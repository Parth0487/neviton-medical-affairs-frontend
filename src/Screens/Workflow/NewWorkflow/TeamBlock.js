import React from "react";
import {
  Autocomplete,
  Checkbox,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import GroupData from "../../../Data/FakeGroup";
import { NumberGraphic } from "../../../Layout/Components/GraphicComponent";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddIcon from "@mui/icons-material/Add";
import Spacer from "../../../Layout/Components/Spacer";
import { Box } from "@mui/system";

function TeamBlock({ index }) {
  return (
    <Box
      sx={{
        p: 1,
        boxSizing: "border-box",
        border: 1,
        borderColor: "grey.400",
        borderRadius: 2,
        width: 298,
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="caption">Reviewer</Typography>
          <NumberGraphic name={index} />
        </Grid>
        <Grid item xs>
          <Typography variant="caption">Select Group/User</Typography>
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
              <TextField {...params} placeholder="Select Group/User" />
            )}
          />
        </Grid>
      </Grid>
      <Spacer height={2} />
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField
            id="duration"
            label="Duration"
            variant="outlined"
            size="small"
            fullWidth
            defaultValue="2 Days"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="alerts-day"
            label="Alerts/Day"
            variant="outlined"
            size="small"
            fullWidth
            defaultValue="5"
          />
        </Grid>
        <Grid item>
          <IconButton size="small">
            <DeleteOutlinedIcon color="error" />
          </IconButton>
          <IconButton size="small">
            <AddIcon color="success" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TeamBlock;
