import Uploads01 from "../commons/uploads/Uploads01";
import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Writer,
  Error,
  Password,
  ContentsWrapper,
  Subject,
  Contents,
  PostWrapper,
  Post,
  PostButton,
  Address,
  Youtube,
  ImageWrapper,
} from "./Ssgi.styles";
export default function SsgiUI() {
  return (
    <div
    // style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
        <ContentsWrapper>
          <InputWrapper>
            <Label>제목</Label>
            <Subject />
            <Error></Error>
          </InputWrapper>
          <InputWrapper>
            <Label>내용</Label>
            <Contents />
            <Error></Error>
          </InputWrapper>
        </ContentsWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <PostWrapper>
            <Post />
            <PostButton>우편번호검색</PostButton>
          </PostWrapper>
          <Address />
          <Address />
          <InputWrapper>
            <Label>유튜브</Label>
            <Youtube />
          </InputWrapper>
        </InputWrapper>
        <ImageWrapper>
          <Label>사진 첨부</Label>
          {new Array(3).fill(1).map((el, index) => (
            <Uploads01 key={`${el}+${index}`} />
          ))}
        </ImageWrapper>
      </Wrapper>
    </div>
  );
}
