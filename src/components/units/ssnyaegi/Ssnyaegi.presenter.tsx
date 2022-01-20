import {
  Wrapper,
  Header,
  WriterWrapper,
  Info,
  AboutWrapper,
  ContentsWrapper,
  Title,
  ImgWrapper,
  Image,
  Content,
  Youtube,
  ButtonWrapper,
  ListButton,
  UpdateButton,
} from "./Ssnyaegi.styles";

export default function SsnyaegiUI(props) {
  return (
    <Wrapper>
      <Header>
        <WriterWrapper>
          <img />
          <Info>
            <div>{props.data?.fetchBoard.writer}</div>
            <div>{props.data?.fetchBoard.createdAt.slice(0, 10)}</div>
          </Info>
        </WriterWrapper>
        <AboutWrapper>
          <img />
          <img />
        </AboutWrapper>
      </Header>
      <ContentsWrapper>
        <Title>{props.data?.fetchBoard.title}</Title>
        <ImgWrapper>
          <Image />
        </ImgWrapper>
        <Content>{props.data?.fetchBoard.contents}</Content>
        <Youtube />
      </ContentsWrapper>
      <ButtonWrapper>
        <ListButton onClick={props.onClickMoveToList}>목록으로</ListButton>
        <UpdateButton>수정하기</UpdateButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
