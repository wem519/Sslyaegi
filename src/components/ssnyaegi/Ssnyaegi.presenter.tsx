import Pagintaions01 from "../commons/paginations/Paginataion01.container";
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
      <div>
        <Pagintaions01
          refetch={props.refetch}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
          count={props.count}
        />
      </div>
      <div>
        <button
          style={{ display: "block", float: "right", marginTop: "10px" }}
          onClick={props.onClickWrite}
        >
          글 작성하기
        </button>
      </div>
    </Wrapper>
  );
}
