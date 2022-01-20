import Pagintaions01 from "../../commons/paginations/Paginataion01.container";
import {
  Wrapper,
  Title,
  SearchWrapper,
  SearchIcon,
  SearchBar,
  DateBar,
  SearchButton,
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
} from "./Ssnyaegies.styles";
export default function SsnyaegiesUI(props: any) {
  return (
    <Wrapper>
      <Title>SSNYAEGI</Title>
      <SearchWrapper>
        <SearchIcon onClick={props.onClickSearch} isTrue={props.isTrue} />
        <SearchBar isTrue={props.isTrue} />
        <DateBar isTrue={props.isTrue} />
        <SearchButton>검색하기</SearchButton>
      </SearchWrapper>
      <Board>
        <div style={{ borderTop: "1px solid black" }} />
        <Row>
          <TopColumnNumber>번호</TopColumnNumber>
          <TopColumnTitle>제목</TopColumnTitle>
          <TopColumnWriter>작성자</TopColumnWriter>
          <TopColumnDate>날짜</TopColumnDate>
        </Row>
        {props.data?.fetchBoards.map((el, index) => (
          <Row key={el._id} id={el._id} onClick={props.onClickMoveToDetail}>
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
