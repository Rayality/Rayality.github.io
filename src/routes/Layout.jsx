import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}
