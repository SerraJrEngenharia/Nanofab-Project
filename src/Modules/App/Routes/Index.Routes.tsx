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
import LoginPage from "@/Modules/App/Screens/LoginRegister/LoginPage/Index";

import RegisterPage from '@/Modules/App/Screens/LoginRegister/RegisterPage/Index'
import RedefPassw from '@/Modules/App/Screens/LoginRegister/RedefPasswordPage/Index'

import SpecialProgPage from '@/Modules/App/Screens/SpecialProgramns/Page/Index'
import EquipInfraPage from "@/Modules/App/Screens/Equip&Infra/Page/Index";

// @Types
import { RoutesProps } from "./Types";
import { Container } from "./Style";
import { AuthProvider } from "../Context/Auth";

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
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/criar_conta",
      element: <RegisterPage />,
    },
    {
      path: "/redefinir_senha",
      element: <RedefPassw />,
    },
    {
      path: "/equipamentos_infraestrutura",
      element: <EquipInfraPage />,
    },
    {
      path: "/programas_especiais",
      element: <SpecialProgPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ],
  {
    basename: "/Nanofab-Project",
  }
);

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <Container>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Container>
  );
};

export default Routes;
