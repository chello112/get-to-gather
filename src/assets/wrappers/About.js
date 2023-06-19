import styled from "styled-components";

const Wrapper = styled.main`
  padding: 2rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-weight: 600;
    color: var(--grey-900);
    span {
      color: var(--red-light);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: block;
    border-radius: 10px;
    box-shadow: 20px 20px 50px 15px grey;
  }
`;

export default Wrapper;
