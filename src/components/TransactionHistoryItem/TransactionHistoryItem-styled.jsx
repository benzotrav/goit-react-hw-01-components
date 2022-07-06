import styled from 'styled-components';

export const HeaderRow = styled.tr`
  width: 500px;
  text-align: center;
  background-color: lightgray;
  &:nth-child(2n) {
    background-color: #ffffff;
  }
`;

export const HeaderPartition = styled.td`
  padding: 10px;
`;