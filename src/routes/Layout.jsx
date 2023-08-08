import { Outlet } from "react-router-dom";
import Navbar from "../pages/myNavbar";

export default function Layout() {
  return (
    <>
      <header>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
