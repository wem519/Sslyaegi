import SsnyaegiUI from "./Ssnyaegi.presenter";
import { FETCH_BOARDS } from "./Ssnyaegi.queries";
import { useQuery } from "@apollo/client";

export default function Ssnyaegi() {
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  return <SsnyaegiUI data={data} />;
}
