import SsnyaegiUI from "./Ssnyaegi.presenter";
import { FETCH_BOARDS } from "./Ssnyaegi.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Ssnyaegi() {
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const router = useRouter();

  function onClickWrite() {
    router.push("/sslyaegi/ssgi");
  }
  return <SsnyaegiUI data={data} onClickWrite={onClickWrite} />;
}
