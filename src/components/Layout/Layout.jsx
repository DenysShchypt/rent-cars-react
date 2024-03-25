import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Layout.styled";
import { Loader } from "../Loader/Loader";

export const Layout = ({ children }) => {
  return (
    <div>
      <StyledHeader>
        <NavLink className="headerLink" to="/">
          Home
        </NavLink>
        <NavLink className="headerLink" to="/catalog">
          Catalog
        </NavLink>
        <NavLink className="headerLink" to="/favorites">
          Favorites
        </NavLink>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </div>
  );
};
