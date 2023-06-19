import Wrapper from "../../assets/wrappers/NavModal";
import NavLinks from "./NavLinks";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/modal/navModalSlice";

const NavModal = () => {
  const { isOpen } = useSelector((state) => state.navModal);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className={isOpen ? "modal-container show-modal" : "modal-container"}>
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <FaTimes />
          </button>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default NavModal;
