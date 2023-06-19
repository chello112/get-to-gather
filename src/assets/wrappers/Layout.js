import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 100%;
  }
  @media (min-width: 720px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 100%;
    }
  }
`;
export default Wrapper;
