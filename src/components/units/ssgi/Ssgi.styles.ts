import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  border: 1px solid black;
  background-color: red;

  @media screen and (max-width: 390px) {
    border: none;
  }
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  padding-top: 40px;

  @media screen and (max-width: 390px) {
    font-size: 58px;
  }
`;
export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`;
export const InputWrapper = styled.div`
  padding-top: 40px;
`;
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 390px) {
    display: none;
  }
`;
export const Writer = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;

  @media screen and (max-width: 390px) {
    width: 725px;
    height: 65px;
    font-size: 20px;
    ::placeholder {
      font-size: 20px;
    }
  }
`;
export const Password = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  @media screen and (max-width: 390px) {
    width: 725px;
    height: 65px;
    ::placeholder {
      font-size: 20px;
    }
  }
`;
export const Error = styled.div`
  padding-top: 10px;
  padding-left: 16px;
  height: 14px;
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
  @media screen and (max-width: 390px) {
    width: 996px;
    height: 65px;
    ::placeholder {
      font-size: 20px;
    }
  }
`;
export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding-top: 16px;
  padding-left: 16px;
  resize: none;
  @media screen and (max-width: 390px) {
    width: 996px;
    height: 480px;
    ::placeholder {
      font-size: 20px;
    }
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Post = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  text-align: center;
  font-size: 14px;
  @media screen and (max-width: 390px) {
    width: 107px;
    height: 65px;
    ::placeholder {
      font-size: 20px;
    }
  }
`;
export const PostButton = styled.button`
  width: 124px;
  height: 52px;
  margin-left: 16px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 390px) {
    width: 143px;
    height: 65px;
    font-size: 16px;
  }
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
  background-color: blue;
`;
export const RadioWrapper = styled.div`
  padding-top: 40px;
  width: 996px;
  background-color: yellow;
`;
export const Radio = styled.input`
  cursor: pointer;
`;
export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
`;

interface IProps {
  isActive: boolean;
}
export const Submit = styled.button`
  width: 171px;
  height: 52px;
  font-size: 16px;
  border: none;
  background-color: ${(props: IProps) => (props.isActive ? "#FEE134" : "gray")};
  cursor: ${(props: IProps) => (props.isActive ? "pointer" : "default")};
`;
