import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SsgiUI from "./Ssgi.presenter";
import { CREATE_BOARD, UPLOAD_FILE } from "./Ssgi.queries";

export default function Ssgi(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // --> query 구문
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  // --> query 구문

  // --> 게시판 입력 상태관리
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [files, setFiles] = useState([null, null, null]);
  // --> 게시판 입력 상태관리

  // --> 에러 메시지 상태관리
  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [contentError, setContentError] = useState("");
  // --> 에러 메시지 상태관리

  // --> input 값 실시간 변경 실행

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (
      event.target.value !== "" &&
      password !== "" &&
      subject !== "" &&
      content !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (
      event.target.value !== "" &&
      writer !== "" &&
      subject !== "" &&
      content !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeSubject(event) {
    setSubject(event.target.value);
    if (event.target.value !== "") {
      setSubjectError("");
    }
    if (
      event.target.value !== "" &&
      writer !== "" &&
      password !== "" &&
      content !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeContent(event) {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
    if (
      event.target.value !== "" &&
      writer !== "" &&
      password !== "" &&
      subject !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  function onChangeYoutubeUrl(event) {
    setYoutubeUrl(event.target.value);
  }
  function onChangeAddressDetail(event) {
    setAddressDetail(event.target.value);
  }
  function onClickAddressSearch() {
    setIsOpen(true);
  }
  function onCompleteAddressSearch(data) {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
  }
  function onCancel() {
    setIsOpen(false);
  }
  async function onClickSubmit() {
    if (writer === "") {
      setWriterError("작성자를 입력해주세요");
    }
    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요");
    }
    if (subject === "") {
      setSubjectError("제목을 입력해주세요");
    }
    if (content === "") {
      setContentError("내용을 입력해주세요");
    }
    if (writer !== "" && password !== "" && subject !== "" && content !== "") {
      try {
        const uploadFiles = files.map((el) =>
          el ? uploadFile({ variables: { file: el } }) : null
        );
        const results = await Promise.all(uploadFiles);
        const Images = results.map((el) => el?.data.uploadFile.url || "");

        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: writer,
              password: password,
              title: subject,
              contents: content,
              youtubeUrl: youtubeUrl,
              boardAddress: {
                zipcode: zipcode,
                address: address,
                addressDetail: addressDetail,
              },
              images: Images,
            },
          },
        });
        console.log(result.data.createBoard.images, "사진");
        router.push(`/sslyaegi/${result.data.createBoard._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  }
  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }
  // --> input 값 실시간 변경 실행

  return (
    <SsgiUI
      isActive={isActive}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeSubject={onChangeSubject}
      onChangeContent={onChangeContent}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onCancel={onCancel}
      onClickSubmit={onClickSubmit}
      writerError={writerError}
      passwordError={passwordError}
      subjectError={subjectError}
      contentError={contentError}
      zipcede={zipcode}
      address={address}
      data={props.data}
      isEdit={props.isEdit}
      isOpen={isOpen}
      onChangeFiles={onChangeFiles}
    />
  );
}
