import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

function Root() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Root;
