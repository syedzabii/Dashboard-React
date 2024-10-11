import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineClass } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import NavBar from "../common/NavBar";
import { Link, Navigate } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div className="dashboard w-full">
      {/* Dashboard header */}
      <NavBar />
      {/* Dashboard menu */}
      <div className="flex flex-col items-center">
        <h1 className="md:text-4xl text-center text-slate-700 font-bold mb-20">
          Welcome to your dashboard, Udemy school
        </h1>
        <div className="dashboard-menu w-full max-w-3xl p-4 ">
          {/* Add Admin */}
          <div className="flex gap-4  p-2 mb-4">
            <IoMdPersonAdd className="size-8 custom-icon-blue-bg custom-icon-blue rounded p-1 cursor-pointer" />
            <div className="box w-2/3">
              <h1 className="text-slate-700 md:text-xl mb-3 font-semibold cursor-pointer hover:text-green-600 active:text-blue-500">
                <Link to={"admin-register"}>Add Admin</Link>
              </h1>
              <p className="text-xs md:text-sm text-slate-700">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they’ll appear on
                your site!
              </p>
            </div>
          </div>

          {/* Add Classes */}
          <div className="flex gap-4  p-2 mb-4">
            <MdOutlineClass className="size-8 custom-icon-blue-bg custom-icon-blue rounded p-1" />
            <div className="box w-2/3">
              <h1 className="text-slate-700 md:text-xl mb-3 font-semibold">
                Add classes
              </h1>
              <p className="text-xs md:text-sm text-slate-700">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they’ll appear on
                your site!
              </p>
            </div>
          </div>
          {/* Add Students */}
          <div className="flex gap-4  p-2 mb-4">
            <PiStudentFill className="size-8 custom-icon-blue-bg custom-icon-blue rounded p-1" />
            <div className="box w-2/3">
              <h1 className="text-slate-700 md:text-xl mb-3 font-semibold">
                Add students
              </h1>
              <p className="text-xs md:text-sm text-slate-700">
                Create rich course content and coaching products for your
                students. When you give them a pricing plan, they’ll appear on
                your site!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
