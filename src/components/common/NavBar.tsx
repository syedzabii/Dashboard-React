import { IoIosNotificationsOutline } from "react-icons/io";
import { PiUserCircleCheckLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import Profile from "./Profile";
import apiClient from "@/services/api-client";

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
    <div className="hidden md:flex w-full  h-24 bg-white justify-between items-center px-7 mb-7">
      <div className="flex gap-3 items-center">
        <PiUserCircleCheckLight className="size-9 text-green-500" />
        <Profile />
      </div>

      <div className="flex items-center gap-5">
        <IoIosNotificationsOutline className="size-7" />
        <button
          onClick={handleLogout}
          className=" w-28 h-10 rounded text-white bg-custom-blue active:bg-blue-300 hover:bg-blue-400 text-sm font-semibold"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default NavBar;
