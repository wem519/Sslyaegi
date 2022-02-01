import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";
export default function WooM() {
  const [isvisible, setIsvisible] = useState(false);

  function onComplete() {
    setIsvisible(false);
  }
  function showModal() {
    setIsvisible(true);
  }
  function handleOk() {
    setIsvisible(false);
  }
  function handleCancel() {
    setIsvisible(false);
  }

  return (
    <>
      <div>WooM페이지</div>
      {isvisible && (
        <Modal visible={isvisible} onOk={handleOk} onCancel={handleCancel}>
          {/* <DaumPostcode onComplete={onComplete} /> */}
        </Modal>
      )}
      <button onClick={showModal}>모달창열기</button>
    </>
  );
}
