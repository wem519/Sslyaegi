import { useState } from "react";
import SsgiUI from "./Ssgi.presenter";

export default function Ssgi() {
  // --> 게시판 입력 상태관리
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  // --> 게시판 입력 상태관리

  // --> 에러 메시지 상태관리
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentError, setContentError] = useState("");
  // --> 에러 메시지 상태관리

  // -->

  return <SsgiUI />;
}
