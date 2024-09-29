import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import DashboardPage from "./components/pages/DashboardPage.tsx";
import PendingAdmissionPage from "./components/pages/PendingAdmissionPage.tsx";
import StudentsViewPage from "./components/pages/StudentsViewPage.tsx";
import LoginPage from "./components/pages/LoginPage.tsx";
import ProtectedRoute from "./components/common/ProtectedRoute.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import AdminRegister from "./components/pages/AdminRegister.tsx";
import AlertDestructive from "./components/common/AlertDestructive.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <App />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "students",
            element: <StudentsViewPage />,
          },
          {
            path: "pending-admissions",
            element: <PendingAdmissionPage />,
          },
          {
            path: "admin-register",
            element: <AdminRegister />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/expired-page",
    element: <AlertDestructive />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
