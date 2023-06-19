import Wrapper from "../../assets/wrappers/EventLayout";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const EventLayout = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Wrapper>
      {user ? (
        <div className="content">
          <header>
            <NavLink to="/events/event-list" className="btn">
              Event list
            </NavLink>
            <NavLink to="/events/calendar" className="btn">
              Events calendar
            </NavLink>
            <NavLink to="/events/upcoming" className="btn">
              Upcoming events
            </NavLink>
          </header>
          <div className="main">
            <Outlet />
          </div>
        </div>
      ) : (
        <div className="unauthorized">
          <h5>Please register or login to see event info</h5>
        </div>
      )}
    </Wrapper>
  );
};

export default EventLayout;
