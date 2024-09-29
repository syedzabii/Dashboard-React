import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

import { MdDashboard, MdOutlinePendingActions } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { authActions } from "@/store/AuthSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    axios
      .get("http://localhost:8000/api/v1/admin/logout", {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(authActions.setIsAuthenticated(false));
        dispatch(authActions.setAdmin({}));
      })
      .catch((error) => console.log(error.response.data));
  };

  return (
    <nav className="md:hidden bg-custom-blue-sidebar p-2 mb-8">
      <div className="flex flex-col items-end">
        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <Button
            className="text-white text-3xl"
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <IoMdClose className="text-red-500 active:text-red-400" />
            ) : (
              <GiHamburgerMenu />
            )}
          </Button>
        </div>

        {/* Navigation links */}
        <div className={`${isOpen ? "block" : "hidden"}`}>
          {/* Dashboard */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-custom-blue text-white w-full flex items-center justify-start gap-3 bg-custom-blue cursor-pointer rounded-md p-2 mb-2"
                : "text-white w-full flex items-center justify-start gap-3 cursor-pointer rounded-md p-2 mb-2"
            }
          >
            <MdDashboard className="size-5" />
            <span className="font-semibold">Dashboard</span>
          </NavLink>

          {/* Pending-Admissions */}
          <NavLink
            to="/pending-admissions"
            className={({ isActive }) =>
              isActive
                ? "bg-custom-blue text-white w-full flex items-center justify-start gap-3 bg-custom-blue cursor-pointer rounded-md p-2 mb-2"
                : "text-white w-full flex items-center justify-start gap-3 cursor-pointer rounded-md p-2 mb-2"
            }
          >
            <MdOutlinePendingActions className="size-5" />
            <span className="font-semibold">Pending admissions</span>
          </NavLink>

          {/* Students */}
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive
                ? "bg-custom-blue text-white w-full flex items-center justify-start gap-3 bg-custom-blue cursor-pointer rounded-md p-2 mb-2"
                : "text-white w-full flex items-center justify-start gap-3 cursor-pointer rounded-md p-2 mb-2"
            }
          >
            <PiStudentFill className="size-5" />
            <span className="font-semibold">Students</span>
          </NavLink>

          <button className="text-white w-full flex items-center justify-start gap-3 cursor-pointer rounded-md p-2 mb-2">
            <CiLogout className="size-5" />
            <span onClick={handleLogout} className="font-semibold">
              Log out
            </span>
          </button>
          {/* Attendance */}
          {/* <NavLink
          to="/attendance"
          className={({ isActive }) =>
            isActive
              ? "bg-custom-blue text-white w-full flex items-center justify-start gap-3 bg-custom-blue cursor-pointer rounded-md p-2 mb-2"
              : "text-white w-full flex items-center justify-start gap-3 cursor-pointer rounded-md p-2 mb-2"
          }
        >
          <FaCheckDouble className="size-5" />
          <span className="font-semibold">Attendance</span>
        </NavLink> */}

          {/* Settings & Profile */}
          {/* <NavLink
          to="/attendance"
          className={({ isActive }) =>
            isActive
              ? "bg-custom-blue text-white w-full flex items-center justify-start gap-3 bg-custom-blue cursor-pointer rounded-md p-2 mb-2"
              : "text-white w-full flex items-center justify-start gap-3 cursor-pointer rounded-md p-2 mb-2"
          }
        >
          <MdOutlineSettings className="size-5" />
          <span className="font-semibold">Settings and profile</span>
        </NavLink> */}

          {/* Teachers */}
          {/* <NavLink
          to="/attendance"
          className={({ isActive }) =>
            isActive
              ? "bg-custom-blue text-white w-full flex items-center justify-start gap-3 bg-custom-blue cursor-pointer rounded-md p-2 mb-2"
              : "text-white w-full flex items-center justify-start gap-3 cursor-pointer rounded-md p-2 mb-2"
          }
        >
          <GiTeacher className="size-5" />
          <span className="font-semibold">Teachers</span>
        </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
