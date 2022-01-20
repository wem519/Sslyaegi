import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./Ssnyaegi.queries";
import SsnyaegiUI from "./Ssnyaegi.presenter";

export default function Ssnyaegi() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.read },
  });

  function onClickMoveToList() {
    router.push(`/sslyaegi`);
  }

  return <SsnyaegiUI data={data} onClickMoveToList={onClickMoveToList} />;
}
