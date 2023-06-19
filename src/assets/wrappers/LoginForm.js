import styled from "styled-components";

const Wrapper = styled.main`
  .content {
    display: block;
    text-align: center;
  }

  .heading {
    margin-top: 5%;
  }

  .formGroup {
    margin-bottom: 10px;
  }

  .formGroup input,
  .formGroup select {
    width: 400px;
    height: 30px;
    border: 1px solid #292323;
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: inherit;
  }

  h1 {
    color: var(--grey-900);
    font-family: var(--navFont);
  }

  .btn {
    width: 405px;
    padding: 10px;
    margin-top: 10px;
    background-color: var(--grey-900);
    border: 1px solid #292323;
    font-family: inherit;
  }

  .btn:hover {
    background-color: var(--red-light);
  }

  .icon {
    color: var(--red-light);
  }

  p {
    margin: 10px;
  }

  a {
    text-decoration-line: underline;
  }

  a:hover {
    color: var(--red-light);
    transition: var(--transition);
  }
`;

export default Wrapper;
