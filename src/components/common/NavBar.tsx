import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import Profile from "./Profile";
import apiClient from "@/services/api-client";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    apiClient
      .get("/admin/logout", { withCredentials: true })
      .then((res) => {
        dispatch(authActions.setIsAuthenticated(false));
        dispatch(authActions.setAdmin({}));
      })
      .catch((error) => console.log(error.response.data));
  };
  return (
    <div className="hidden md:flex w-full  h-24  bg-white justify-between items-center px-7 mb-7">
      <div className="flex gap-3 items-center">
        <Profile />
      </div>

      <div className="flex items-center gap-5">
        <IoIosNotificationsOutline className="size-7" />
        <Button
          variant="secondary"
          onClick={handleLogout}
          className=" text-purple-600  hover:text-red-400 hover:bg-black bg-white  transition-colors duration-200"
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
