import { Outlet, useNavigation } from "react-router";
import NavBar from "../NavBar/NavBar";
import SiteNavBar from "../NavBar/SiteNavBar";

function SiteLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";
  return (
    <div className="sectionWrap02">
      <header>
        <SiteNavBar />
      </header>

      <main>
        <h2> &lt;Suspense fallback=&#123;...</h2>
        {isLoading && (
          <p>
            useNavigation().state = "loading"...
            <br />
            Загрузка....
          </p>
        )}
        <Outlet />
      </main>

      <footer>
        <NavBar />
      </footer>
    </div>
  );
}
export default SiteLayout;
