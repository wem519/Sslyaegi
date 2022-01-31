import { useRef, useState } from "react";
import { UploadImage, UploadButton, HiddenInput } from "./Uploads01.styles";

export default function Uploads01(props) {
  const fileref = useRef(null);
  const [preImg, setPreImg] = useState("");
  console.log(preImg);

  function onClickUpload() {
    fileref.current?.click();
  }

  function onChangeFile(event) {
    const file = event.target?.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setPreImg(data.target?.result as string); // 임시미리보기 저장
    };
  }

  return (
    <>
      {preImg || props.defaultValue ? (
        <UploadImage
          onClick={onClickUpload}
          src={preImg || `https://storage.googleapis.com/${props.defaultValue}`}
        />
      ) : (
        <UploadButton type="button" onClick={onClickUpload}>
          +
        </UploadButton>
      )}
      <HiddenInput type="file" ref={fileref} onChange={onChangeFile} />
    </>
  );
}
