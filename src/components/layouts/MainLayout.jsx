import { Outlet } from "react-router";

import MainMenu from "./MainMenu";
import NavBar from "../NavBar/NavBar";
import { Suspense } from "react";

function MainLayout() {
  return (
    <div className="sectionWrap02">
      <header>
        <MainMenu />
      </header>

      <main>
        <h2>
          createBrowserRouter <br />
          &lt;RouterProvider router=&#123;router&#125; /&gt;
        </h2>
        <Suspense fallback={<p>⏳Lazy Loader ....</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>
        <NavBar />
      </footer>
    </div>
  );
}
export default MainLayout;
