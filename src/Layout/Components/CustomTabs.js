import { Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Tabs({ name, active, activeColor, ...props }) {
  const newActiveColorSet = activeColor ? activeColor : "primary.main";
  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        display: "inline-block",
        bgcolor: active ? newActiveColorSet : "#C5CFDE",
        boxSizing: "border-box",
        borderRadius: "8px 8px 0 0",
        cursor: "pointer",
      }}
      {...props}
    >
      <Typography variant="body2" sx={{ color: "#ffffff" }}>
        {name}
      </Typography>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Card
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      elevation={0}
      sx={{ border: 2, borderColor: "grey.200" }}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </Card>
  );
}

function TabContainer({ children }) {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {children}
    </Stack>
  );
}

export { Tabs, TabPanel, TabContainer };
