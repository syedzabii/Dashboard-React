import { Outlet } from "react-router-dom";
import SideBar from "./common/SideBar";
import DashboardPage from "./pages/DashboardPage";
import HiThere from "./pages/PendingAdmissionPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MobileNavBar from "./common/MobileNavBar";

const MainLayout = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col md:flex-row min-h-screen">
        <SideBar />
        <MobileNavBar />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
};

export default MainLayout;
