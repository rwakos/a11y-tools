import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div role="navigation">
        <Sidebar />
      </div>
      <section className="home-section">
        <div className="container" role="main">
          <Outlet />
        </div>
      </section>
    </>
  );
}
