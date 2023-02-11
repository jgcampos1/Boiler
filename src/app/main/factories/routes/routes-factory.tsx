import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LayoutConfig } from "~/app/main/config/layouts-config";

import { ProtectRoute } from "~/app/presentation/components";
import { FullPageLoading } from "~/app/presentation/components";
import { IRoute } from "../../types";

export const makeRoutes = (routes: IRoute[]) => {
  return routes.map((route) => {
    console.log({ route });
    const Layout = LayoutConfig[route.layout].component;
    if (route.routes) {
      return (
        <Route
          key={route.name}
          element={
            <Routes location={location}>
              <Route
                path={route.path}
                key={route.path}
                element={
                  <ProtectRoute
                    Layout={Layout}
                    private={route.private ?? false}
                    element={route.element}
                  />
                }
              />

              {route.routes.map((nested) => (
                <Route
                  path={nested.path}
                  key={nested.path}
                  element={
                    <ProtectRoute
                      Layout={Layout}
                      private={nested.private ?? false}
                      element={nested.element}
                    />
                  }
                />
              ))}
            </Routes>
          }
        />
      );
    }

    return (
      <Routes key={route.path}>
        <Route
          path={route.path}
          element={
            <ProtectRoute
              Layout={Layout}
              private={route.private ?? false}
              element={route.element}
            />
          }
        />
      </Routes>
    );
  });
};
