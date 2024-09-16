import { Outlet } from "react-router-dom";
import SideBar from "./common/SideBar";
import DashboardPage from "./pages/DashboardPage";
import HiThere from "./pages/PendingAdmissionPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MainLayout = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen">
        <SideBar />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
};

export default MainLayout;
