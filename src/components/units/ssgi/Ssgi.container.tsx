import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import SsgiUI from "./Ssgi.presenter";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./Ssgi.queries";

export default function Ssgi(props) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // --> query 구문
  const [createBoard] = useMutation(CREATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [updateBoard] = useMutation(UPDATE_BOARD);
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
  // --> 게시판 등록하기
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
  // --> 게시판 등록하기

  // --> 게시판 수정하기
  interface IMyUpdateBoardInput {
    title?: string;
    contents?: string;
    youtubeUrl?: string;
    boardAddress?: {
      zipcode?: string;
      address?: string;
      addressDetail?: string;
    };
    images?: string[];
  }
  // optional Properties : 사용해도 되고 안해도 상관없는 Property, 위처럼 적용하지 않는다면 위의 모든 state값이 있어야 오류가 발생 X

  async function onClickUpdate() {
    if (!subject && !content) {
      Modal.error({ content: "수정내용이 없습니다" });
    }

    const myUpdateBoardInput: IMyUpdateBoardInput = {};
    if (subject) myUpdateBoardInput.title = subject;
    if (content) myUpdateBoardInput.contents = content;
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      myUpdateBoardInput.boardAddress = {};
      if (zipcode) myUpdateBoardInput.boardAddress.zipcode = zipcode;
      if (address) myUpdateBoardInput.boardAddress.address = address;
      if (addressDetail)
        myUpdateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    const uploadFiles = files.map((el) =>
      el ? uploadFile({ variables: { file: el } }) : null
    );
    const results = await Promise.all(uploadFiles);
    const nextImages = results.map((el) => el?.data.uploadFile.url || "");
    myUpdateBoardInput.images = nextImages;

    if (props.data?.fetchBoard.images?.length) {
      const prevImages = [...props.data?.fetchBoard.images];
      myUpdateBoardInput.images = prevImages.map(
        (el, index) => nextImages[index] || el
      );
    } else {
      myUpdateBoardInput.images = nextImages;
    }

    await updateBoard({
      variables: {
        boardId: router.query.read,
        password: password,
        updateBoardInput: myUpdateBoardInput,
      },
    });
    router.push(`/sslyaegi/${router.query.read}`);
  }

  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }
  // --> 게시판 수정하기
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
      onClickUpdate={onClickUpdate}
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
