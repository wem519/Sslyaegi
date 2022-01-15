import Pagintaions01 from "../commons/paginations/Paginataion01.container";
import {
  Wrapper,
  Title,
  Board,
  Row,
  TopColumnNumber,
  TopColumnTitle,
  TopColumnWriter,
  TopColumnDate,
  ColumnNumber,
  ColumnTitle,
  ColumnWriter,
  ColumnDate,
  Submit,
} from "./Ssnyaegi.styles";

export default function SsnyaegiUI(props) {
  return (
    <Wrapper>
      <Title>SSNYAEGI</Title>
      <Board>
        <div style={{ borderTop: "1px solid black" }} />
        <Row>
          <TopColumnNumber>번호</TopColumnNumber>
          <TopColumnTitle>제목</TopColumnTitle>
          <TopColumnWriter>작성자</TopColumnWriter>
          <TopColumnDate>날짜</TopColumnDate>
        </Row>
        {props.data?.fetchBoards.map((el, index) => (
          <Row key={el._id}>
            <ColumnNumber>{index + 1}</ColumnNumber>
            <ColumnTitle>{el.title}</ColumnTitle>
            <ColumnWriter>{el.writer}</ColumnWriter>
            <ColumnDate>{el.createdAt.slice(0, 10)}</ColumnDate>
          </Row>
        ))}
      </Board>
      <div>
        <Pagintaions01
          refetch={props.refetch}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
          count={props.count}
        />
      </div>
      <div>
        <Submit onClick={props.onClickWrite}>게시물 등록하기</Submit>
      </div>
    </Wrapper>
  );
}
