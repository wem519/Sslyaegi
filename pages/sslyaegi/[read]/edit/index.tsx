import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Ssgi from "../../../../src/components/units/ssgi/Ssgi.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      images
    }
  }
`;

export default function SsgiOld() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.read) },
  });

  return <Ssgi isEdit={true} data={data} />;
}
