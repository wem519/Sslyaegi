import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-family: "myfont";
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
`;
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 40px;
`;
export const InputWrapper = styled.div``;
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
`;
export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;
