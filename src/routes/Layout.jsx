import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Digital from "../components/Digital";


export default function Layout() {
  // Digital();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="outlet">
        <Outlet />
      </main>
    </>
  );
}
