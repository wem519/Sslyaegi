import SsnyaegiesUI from "./Ssnyaegies.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Ssnyaegies.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Ssnyaegies() {
  // -->search부분
  const [istrue, setIstrue] = useState(false);
  function onClickSearch() {
    setIstrue((prev) => !prev);
  }
  // -->search부분

  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();

  function onClickWrite() {
    router.push("/sslyaegi/ssgi");
  }
  function onClickMoveToDetail(event) {
    router.push(`/sslyaegi/${event.currentTarget.id}`);
  }

  return (
    <SsnyaegiesUI
      data={data}
      onClickWrite={onClickWrite}
      onClickMoveToDetail={onClickMoveToDetail}
      startPage={startPage}
      setStartPage={setStartPage}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      istrue={istrue}
      onClickSearch={onClickSearch}
    />
  );
}
