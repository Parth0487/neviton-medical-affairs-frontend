import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Success } from "../../../Layout/Images";
import { Typography } from "@mui/material";

function Successful({ open, onClose }) {
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
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  component="img"
                  src={Success}
                  alt="Success"
                  sx={{ width: 160, display: "block", margin: "0 auto" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" align="center">
                  You created the <b>CSV Workflow-0176</b> Successfully
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default Successful;
