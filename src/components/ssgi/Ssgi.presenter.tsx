import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Writer,
  Error,
  Password,
} from "./Ssgi.styles";
export default function SsgiUI() {
  return (
    <>
      <Wrapper>
        <Title>SSGI 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer />
            <Error></Error>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password />
            <Error></Error>
          </InputWrapper>
        </WriterWrapper>
      </Wrapper>
    </>
  );
}
