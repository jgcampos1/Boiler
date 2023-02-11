import { memo } from "react";

import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import { ThemeProvider } from "~/app/presentation/providers";

import { RoutesConfig } from "../config/routes-config";
import { makeRoutes } from "../factories/routes";

const Router = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CssBaseline />
        {makeRoutes(RoutesConfig)}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default memo(Router);
