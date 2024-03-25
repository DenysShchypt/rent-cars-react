import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/number">Number</NavLink>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
