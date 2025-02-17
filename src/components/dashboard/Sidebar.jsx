import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdHomeWork } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import Logo from "./../../assets/logo.png";
import { IoHome } from "react-icons/io5";
import { BsFillHouseAddFill } from "react-icons/bs";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  const navLink = (
    <nav>
      {/* Donor */}
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5  rounded-md transition-colors duration-300 transform  hover:bg-[#FF5364]   hover:text-white ${
            isActive ? "bg-[#FF5364]  text-white" : "text-gray-600 rounded-md "
          }`
        }
      >
        <IoHome className="w-5 h-5" />

        <span className="mx-4 font-medium">Donor Home</span>
      </NavLink>
      <NavLink
        to="my-donation-requests"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#FF5364] rounded-md  hover:text-white ${
            isActive ? "bg-[#FF5364]  text-white" : "text-gray-600 rounded-md"
          }`
        }
      >
        <MdHomeWork className="w-5 h-5" />

        <span className="mx-4 font-medium">My Donation</span>
      </NavLink>
      <NavLink
        to="create-donation-request"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#FF5364] rounded-md  hover:text-white ${
            isActive ? "bg-[#FF5364]  text-white" : "text-gray-600 rounded-md"
          }`
        }
      >
        <BsFillHouseAddFill className="w-5 h-5" />

        <span className="mx-4 font-medium">Create Donation</span>
      </NavLink>
    </nav>
  );
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link
              to={"/"}
              className="flex lg:flex-col items-center gap-3 justify-center"
            >
              <img className="w-12" src={Logo} alt="" />
              <p className=" text-3xl font-extrabold ">
                Go<span className="text-[#FF5364]">Blood</span> Bank
              </p>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2  justify-center items-center text-center mx-auto">
              <Link
                to={"/"}
                className="flex flex-col items-center gap-3 justify-center"
              >
                <img className="w-12" src={Logo} alt="" />
                <p className=" text-3xl font-extrabold ">
                  Go<span className="text-[#FF5364]">Blood</span> Bank
                </p>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            {navLink}
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#FF5364]  rounded-md hover:text-white ${
                isActive
                  ? "bg-[#FF5364]  text-white"
                  : "text-gray-600 rounded-md"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={() => logOut()}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 rounded-md  hover:bg-[#FF5364]   hover:text-white transition-colors duration-300 transform "
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
