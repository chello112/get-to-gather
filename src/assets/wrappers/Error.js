import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 400px;
    display: block;
    margin-bottom: 1rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: black;
  }
  a {
    color: var(--grey-600);
    text-decoration: underline;
    font-size: large;
  }
  a:hover {
    color: green;
  }
`;

export default Wrapper;
