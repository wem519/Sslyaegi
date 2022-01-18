import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 100px auto;
  padding-left: 102px;
  padding-right: 102px;
  font-size: 15px;
  text-align: center;
  width: 1200px;

  @media screen and (max-width: 390px) {
    width: 100vmax; /* 뷰포트 너비 또는 높이를 기준으로 하는 최대값 ->화면 크기에 상대적으로 변경되는 단위*/
  }
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
  border-bottom: 1px solid #bdbdbd;
`;
export const TopColumnNumber = styled.div`
  width: 10%;
  text-align: center;
  background-color: #eeee;
`;
export const TopColumnWriter = styled.div`
  width: 10%;
  text-align: center;
  background-color: #eeee;
`;
export const TopColumnTitle = styled.div`
  width: 60%;
  text-align: center;
  background-color: #eeee;
`;
export const TopColumnDate = styled.div`
  width: 20%;
  text-align: center;
  background-color: #eeee;
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
export const Submit = styled.button`
  display: block;
  float: right;
  margin-top: 10px;
  width: 171px;
  height: 52px;
  background-color: white;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 390px) {
    width: 110px;
    height: 39px;
    font-size: 13px;
  }
`;
