import { Page } from "./Pagination01.styles";

export default function Pagination01UI(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Page onClick={props.onClickPrevPage}>{`<`}</Page>
      {new Array(10).fill(1).map((_, index) => (
        <Page
          key={props.startPage + index}
          id={String(props.startPage + index)}
          onClick={props.onClickPage}
          isEdit={props.startPage + index === props.clickedPage}
        >
          {props.startPage + index}
        </Page>
      ))}
      <Page onClick={props.onClickNextPage}>{`>`}</Page>
    </div>
  );
}
