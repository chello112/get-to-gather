import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    height: var(--nav-height);
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
  }
  h1 {
    font-weight: 600;
    span {
      color: var(--green-smooth);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
    .main-img {
      display: block;
      border-radius: 10px;
      box-shadow: 20px 20px 50px 15px grey;
    }
  }
`;

export default Wrapper;
