import styled from "styled-components";

const Wrapper = styled.table`
  .container {
    width: auto;
    display: block;
    border-radius: 10px;
    box-shadow: 20px 20px 50px 15px grey;

    table {
      border-collapse: collapse;
      width: 100%;
    }

    th,
    td {
      border: 1px solid #ffffff;
      text-align: left;
    }

    th {
      background-color: var(--thead);
    }

    td {
      background-color: var(--tbody);
    }
  }
`;

export default Wrapper;
