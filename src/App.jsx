import { RouterProvider } from "react-router";
import "./App.css";
import router from "./components/routers/router.jsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
