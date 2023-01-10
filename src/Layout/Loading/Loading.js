import React from "react";
import {
  Box,
  CircularProgress,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

function LoaderScreen() {
  return (
    <Box
      sx={{
        display: "block",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        bgcolor: "white",
        left: 0,
        top: 0,
        zIndex: 99999,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress
          color="primary"
          size={34}
          thickness={2}
          variant="indeterminate"
          sx={{ animationDuration: "1s" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress
          color="primary"
          size={56}
          thickness={2}
          variant="indeterminate"
          sx={{ animationDuration: "2s" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <CircularProgress
          color="primary"
          size={78}
          thickness={2}
          variant="indeterminate"
          sx={{ animationDuration: "4s" }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "calc(50% + 80px)",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    </Box>
  );
}

function LoaderPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      </Grid>
      <Grid item xs={12}>
        <Skeleton variant="rounded" sx={{ height: 100, mb: 2 }} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
      </Grid>
    </Grid>
  );
}

function LoaderProfileMenu() {
  return (
    <Box>
      <Grid
        container
        spacing={1}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Skeleton
            variant="rounded"
            sx={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </Grid>
        <Grid item xs>
          <Skeleton variant="text" sx={{ fontSize: "1.2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Grid>
      </Grid>
    </Box>
  );
}

function LoaderIconNavMenu() {
  return (
    <Box
      sx={{
        py: 1,
        px: 3,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "text.primary",
        boxSizing: "border-box",
        justifyContent: "flex-start",
      }}
    >
      <Skeleton
        variant="rounded"
        sx={{
          mr: 2,
          width: 18,
          height: 18,
          borderRadius: 20,
        }}
      />
      <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100%" }} />
    </Box>
  );
}

export { LoaderPage, LoaderScreen, LoaderProfileMenu, LoaderIconNavMenu };
