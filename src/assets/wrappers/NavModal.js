import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 720px) {
    display: none;
  }
  .modal-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-modal {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: var(--white);
    width: 40vw;
    height: 60vh;
    border-radius: var(--borderRadius);
    padding: 2rem 1rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--black);
    cursor: pointer;
  }

  .close-btn:hover {
    color: var(--red-light);
    transition: var(--transition);
  }

  .nav-links {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    align-items: center;
    color: var(--grey-900);
    padding: 1rem 0;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--red-light);
  }
  .nav-link:hover .icon {
    color: var(--red-light);
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .active {
    color: var(--grey-900);
    text-decoration-line: underline;
  }
  .active .icon {
    color: var(--red-light);
  }
`;
export default Wrapper;
