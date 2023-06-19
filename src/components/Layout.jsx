import { Outlet } from "react-router-dom";
import { Navbar, NavModal, BigSidebar } from "../components";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Layout";

const Layout = () => {
  const { isOpen } = useSelector((state) => state.navModal);

  return (
    <Wrapper>
      <main className="dashboard">
        <BigSidebar />
        {isOpen && <NavModal />}
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default Layout;
