import { NavLink } from "react-router-dom";
import frontRoutes from "../routers/frontRouters.js";

function SiteNavBar() {
  return (
    <nav>
      <ul className="navWrap">
        <li>
          <NavLink
            to={frontRoutes.pages.site.index}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Site Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={frontRoutes.pages.site.about}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Site About
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
            to={frontRoutes.pages.site.loader}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            useLoaderData()
          </NavLink>
        </li>
        <li>
          <NavLink
            to={frontRoutes.pages.site.state}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            useNavigation()/'loading'
          </NavLink>
        </li>
        <li>
          <NavLink
            to={frontRoutes.pages.site.actionAdd}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            useActionDate()/post
          </NavLink>
        </li>
        <li>
          <NavLink
            to={frontRoutes.pages.site.crumbs}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            CRUMB
          </NavLink>
        </li>
        <li>
          <NavLink
            to={frontRoutes.pages.site.menu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Main Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to={frontRoutes.pages.index}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Go To Main Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default SiteNavBar;
