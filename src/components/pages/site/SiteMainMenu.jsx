import { useState } from "react";

import { routes } from "../../routers/router";
import { NavLink } from "react-router";

function SiteMainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRoutes = routes[2];
  const children = rootRoutes?.children || [];
  console.log("ROOT", routes[2]);

  return (
    <div className="sectionWrap">
      <ul className="crumbs02">
        {children.map((item, index) => {
          if (!item.handle) return null;
          return (
            <li key={index}>
              <NavLink
                style={{ color: "white" }}
                to={`/site/${item.path}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >{`${item.handle?.svg}${item.handle.title}`}</NavLink>
            </li>
          );
        })}
      </ul>
      <h2>Main Menu</h2>
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        CODE
      </div>
      {isOpen && <div></div>}
    </div>
  );
}
export default SiteMainMenu;
