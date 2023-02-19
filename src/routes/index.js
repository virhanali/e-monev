import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../components/Layout/Admin";
import ProtectedRoute from "../components/ProtectedRoute";
import Emonev from "./Dashboard/Emonev";
import MyAccount from "./Dashboard/MyAccount";
import UserAccess from "./Dashboard/UserAccess";
import Affairs from "./Dashboard/Affairs";
import Organization from "./Dashboard/Organization";
import Program from "./Dashboard/Program";
import Activity from "./Dashboard/Activity";
import Sasaran from "./Dashboard/Sasaran";
import DataReport from "./Dashboard/DataReport";

import Login from "./Login";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <Emonev />,
        },
        {
          path: "/akun-saya",
          element: <MyAccount />,
        },
        {
          path: "/akses-user",
          element: <UserAccess />,
        },
        {
          path: "/urusan",
          element: <Affairs />,
        },
        {
          path: "/organisasi",
          element: <Organization />,
        },
        {
          path: "/program",
          element: <Program />,
        },
        {
          path: "/kegiatan",
          element: <Activity />,
        },
        {
          path: "/sasaran",
          element: <Sasaran />,
        },
        {
          path: "/data-laporan",
          element: <DataReport />,

        },
      ]   
     },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
