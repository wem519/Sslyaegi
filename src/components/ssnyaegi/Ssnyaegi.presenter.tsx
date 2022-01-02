import { Title } from "./Ssnyaegi.styles";

export default function SsnyaegiUI(props) {
  return (
    <>
      <Title>SSNYAEGI</Title>
      {props.data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          <div>{el.title}</div>
          <div>{el.writer}</div>
          <div>{el.createdAt}</div>
          <div></div>
        </div>
      ))}
      <div></div>
    </>
  );
}
