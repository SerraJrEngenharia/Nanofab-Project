// React
import React from "react";

// Router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// Pages
import HomePage from "@/Modules/App/Screens/Home/Page/Index";
import ErrorPage from "@/Modules/App/Screens/Error/Page/Index";

// @Types
import { RoutesProps } from "./Types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const Routes: React.FC<RoutesProps> = ({}) => {
  return <RouterProvider router={router} />;
};

export default Routes;
