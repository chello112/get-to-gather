import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 720px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 1);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: var(--sidebar-width);
      margin-left: -200px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2rem;
    }
    .nav-links {
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--grey-900);
      font-family: var(--navFont);
      padding: 1rem 0;
      padding-left: 2.5rem;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-900);
      padding-left: 3rem;
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
  }
`;
export default Wrapper;
