import styled from "@emotion/styled";

export const Wrapper = styled.div`
  font-family: "myfont";
  margin: 100px auto;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  border: 1px solid black;

  @media screen and (max-width: 390px) {
    border: none;
  }
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  padding-top: 40px;
`;
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const InputWrapper = styled.div`
  padding-top: 40px;
`;
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
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  resize: none;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Post = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
`;
export const PostButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  background-color: black;
  color: white;
  cursor: pointer;
  font-family: "myfont";
`;
export const Address = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  margin-top: 16px;
`;
export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
export const ImageWrapper = styled.div`
  padding-top: 40px;
  width: 996px;
`;
