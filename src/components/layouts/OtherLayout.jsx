import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";

function OtherLayout() {
  return (
    <div className="sectionWrap02">
      <header>
        <NavBar />
      </header>

      <main>
        <h2>Other Layout</h2>
        <Outlet />
      </main>

      <footer>
        <NavBar />
      </footer>
    </div>
  );
}
export default OtherLayout;
