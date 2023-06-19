import styled from "styled-components";

const Wrapper = styled.main`
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .btn {
    border: 1px solid var(--black);
  }

  .active {
    color: var(--grey-900);
    text-decoration-line: underline;
  }

  .unauthorized {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
export default Wrapper;
