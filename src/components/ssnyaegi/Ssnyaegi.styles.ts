import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-family: "myfont";
  font-size: 15px;
  text-align: center;
`;
export const Title = styled.div`
  margin-top: 20px;
  font-size: 40px;
`;
export const Board = styled.div`
  margin-top: 40px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid black;
`;

export const ColumnNumber = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnWriter = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnTitle = styled.div`
  width: 60%;
  text-align: center;
`;
export const ColumnDate = styled.div`
  width: 20%;
  text-align: center;
`;
