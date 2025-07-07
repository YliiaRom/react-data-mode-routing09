import { NavLink } from "react-router-dom";
import frontRoutes from "../routers/frontRouters.js";

function NavBar() {
  return (
    <nav>
      <ul className="navWrap">
        <li>
          <NavLink
            to={frontRoutes.pages.index}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={frontRoutes.pages.about}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={frontRoutes.pages.contacts}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            to={frontRoutes.pages.site.index}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Site
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
