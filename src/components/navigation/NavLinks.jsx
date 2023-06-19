import navLinks from "../../utils/navLinks";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/modal/navModalSlice";

const NavLinks = () => {
  const dispatch = useDispatch();

  return (
    <div className="nav-links">
      {navLinks.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={() => {
              dispatch(closeModal());
            }}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
