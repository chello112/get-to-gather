import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 1);

  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }

  .toggle-btn:hover {
    background-color: var(--red-light);
  }

  //Loses the line between sidebar and navbar
  background: var(--white);
  .btn-container {
    position: relative;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    background-color: var(--grey-900);
  }

  .btn:hover {
    background-color: var(--red-light);
  }

  .dropdown {
    position: absolute;
    top: 3rem;
    right: 0.5rem;
    width: auto;
    background: var(--green-light);
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
    visibility: hidden;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-900);
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
  }

  .dropdown-btn:hover {
    text-decoration-line: underline;
    cursor: pointer;
  }

  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 720px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }

    .logo,
    .nav-btn {
      display: none;
    }

    .logo-text {
      display: flex;
      color: var(--grey-900);
      font-family: var(--navFont);
    }

    span {
      color: var(--red-light);
    }
  }
`;
export default Wrapper;
