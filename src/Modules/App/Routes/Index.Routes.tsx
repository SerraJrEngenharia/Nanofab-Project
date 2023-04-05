// React
import React from "react";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "@/Modules/App/Screens/Home/Page/Index";
import TeamPage from "@/Modules/App/Screens/Team/Page/Index";
import ProgressPage from "@/Modules/App/Screens/Progress/Page/Index";
import ProjectsPage from "@/Modules/App/Screens/Projects/Page/Index";
import PublicationsPage from "@/Modules/App/Screens/Publications/Page/Index";
import PartnershipsPage from "@/Modules/App/Screens/Partnerships/Page/Index";
import ErrorPage from "@/Modules/App/Screens/Error/Page/Index";

// @Types
import { RoutesProps } from "./Types";
import { Container } from "./Style";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/equipe",
      element: <TeamPage />,
    },
    {
      path: "/andamento",
      element: <ProgressPage />,
    },
    {
      path: "/submissao_projetos",
      element: <ProjectsPage />,
    },
    {
      path: "/publicacoes",
      element: <PublicationsPage />,
    },
    {
      path: "/parcerias",
      element: <PartnershipsPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ],
  {
    basename: "/",
  }
);

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
};

export default Routes;
