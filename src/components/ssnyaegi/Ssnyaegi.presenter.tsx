import {
  Wrapper,
  Title,
  Board,
  Row,
  ColumnNumber,
  ColumnTitle,
  ColumnWriter,
  ColumnDate,
} from "./Ssnyaegi.styles";

export default function SsnyaegiUI(props) {
  return (
    <Wrapper>
      <Title>SSNYAEGI</Title>
      <Board>
        <Row>
          <ColumnNumber>번호</ColumnNumber>
          <ColumnTitle>제목</ColumnTitle>
          <ColumnWriter>작성자</ColumnWriter>
          <ColumnDate>날짜</ColumnDate>
        </Row>
        {props.data?.fetchBoards.map((el, index) => (
          <Row key={el._id}>
            <ColumnNumber>{index + 1}</ColumnNumber>
            <ColumnTitle>{el.title}</ColumnTitle>
            <ColumnWriter>{el.writer}</ColumnWriter>
            <ColumnDate>{el.createdAt.slice(0, 10)}</ColumnDate>
            <div></div>
          </Row>
        ))}
      </Board>
      <div></div>
    </Wrapper>
  );
}
