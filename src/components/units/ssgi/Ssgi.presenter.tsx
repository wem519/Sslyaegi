import Uploads01 from "../../commons/uploads/Uploads01";
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
  RadioWrapper,
  Radio,
  RadioLabel,
  ButtonWrapper,
  Submit,
} from "./Ssgi.styles";
export default function SsgiUI(props) {
  return (
    <Wrapper>
      <Title>SSGI 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={props.onChangeWriter}
          />
          <Error>{props.writerError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={props.onChangePassword}
          />
          <Error>{props.passwordError}</Error>
        </InputWrapper>
      </WriterWrapper>
      <ContentsWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            placeholder="제목을 입력해주세요"
            onChange={props.onChangeSubject}
          />
          <Error>{props.subjectError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 입력해주세요"
            onChange={props.onChangeContent}
          />
          <Error>{props.contentError}</Error>
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
          <Youtube placeholder="유투브 링크를 복사해주세요" />
        </InputWrapper>
      </InputWrapper>
      <ImageWrapper>
        <Label>사진 첨부</Label>
        {new Array(3).fill(1).map((el, index) => (
          <Uploads01 key={`${el}+${index}`} />
        ))}
      </ImageWrapper>
      <RadioWrapper>
        <Label>메인 설정</Label>
        <Radio type="radio" name="radio-button" id="youtube" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <Radio type="radio" name="radio-button" id="image" />
        {/* 1.라디오 버튼 속성에 name이 없으면 모두 체크하거나 해제할 수 있어 name이 필수
          2. input의 id와 label의 htmlFor를 통해 연결 */}
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </RadioWrapper>
      <ButtonWrapper>
        <Submit onClick={props.onClickSubmit} isActive={props.isActive}>
          등록하기
        </Submit>
      </ButtonWrapper>
    </Wrapper>
  );
}