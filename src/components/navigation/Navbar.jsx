import Logo from "../Logo";
import Wrapper from "../../assets/wrappers/Navbar";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/features/modal/navModalSlice";
import { logout } from "../../redux/features/auth/authSlice";
import { useState } from "react";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="btn nav-btn" onClick={() => dispatch(openModal(true))}>
          <AiOutlineBars />
        </button>

        <div className="nav-container">
          <Logo />
          <h3 className="logo-text">
            Get<span>To</span>Gather
          </h3>
        </div>

        <div className="btn-container">
          {user ? (
            <button type="button" className="btn" onClick={() => setShowLogout(!showLogout)}>
              {user.username} <FaUserCircle />
            </button>
          ) : (
            <button type="button" className="btn" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>

        {user ? (
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => {
                dispatch(logout());
                setShowLogout(!showLogout);
              }}
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};
export default Navbar;
