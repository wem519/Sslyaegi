import SsnyaegiUI from "./Ssnyaegi.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Ssnyaegi.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Ssnyaegi() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const router = useRouter();

  function onClickWrite() {
    router.push("/sslyaegi/ssgi");
  }
  return (
    <SsnyaegiUI
      data={data}
      onClickWrite={onClickWrite}
      startPage={startPage}
      setStartPage={setStartPage}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
    />
  );
}
