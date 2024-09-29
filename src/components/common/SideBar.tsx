import Ellipse from "../../assets/Ellipse 6.png";
import { MdDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaCheckDouble } from "react-icons/fa";
import ambuloom from "../../assets/image.png";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="hidden md:flex sidebar min-h-screen w-full max-w-64  flex-col items-center  bg-custom-blue-sidebar pt-5">
      <img src={ambuloom} alt="" className="rounded-full h-20 w-20 " />
      <h1 className="mt-4 font-semibold text-white mb-12">AMBAA UL ULOOM</h1>
      <div className="w-full border-b border-gray-300"></div>
      <div className="sidebar-links flex flex-col w-full p-4 min-h-52  items-center">
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
  );
};

export default SideBar;
