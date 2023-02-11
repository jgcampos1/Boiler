import { styled, Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3, 2.5),

  [theme.breakpoints.down("md")]: {
    boxSizing: "border-box",
    height: "100%",
  },
}));
export const Text = styled(Typography)(({ theme }) => ({
  color: "red",
  fontSize: theme.typography.fontSize,
}));
