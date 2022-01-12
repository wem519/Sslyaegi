import styled from "@emotion/styled";

interface IpageProps {
  isEdit?: boolean;
}
export const Page = styled.span`
  margin: 0px 20px;

  font-family: "SangSangRock";

  color: ${(props: IpageProps) => (props.isEdit ? "red" : "black")};
  cursor: ${(props: IpageProps) => (props.isEdit ? " none" : "pointer")};
  font-weight: ${(props: IpageProps) => (props.isEdit ? " bold" : "normal")};
`;
