import React, { useState } from "react";
import AddArticleModal from "./AddArticleModal";
import { Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

function AddArticleButton() {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  ;
  const handleModalClose = () => {
    setModalOpen(false);
    modalData && setModalData(null);
  };
  // console.log(DATA);
  return (
    <div className="absolute top-4 right-4 text-lg rounded-lg border-black border-2 h-12 p-1 cursor-pointer bg-dark-purple">
      <PlusCircleOutlined
        onClick={() => setModalOpen(true)}
        className="text-lg text-white"
      />
      <Modal
        visible={modalOpen}
        onOk={() => {
          setModalOpen(false);
        }}
        okButtonProps={{ className: "bg-blue-500" }}
        onCancel={() => {
          setModalOpen(false);
        }}
        destroyOnClose
      >
        <AddArticleModal
          onCloseModal={handleModalClose}
          initialData={modalData}
        />
      </Modal>
    </div>
  );
}

export default AddArticleButton;
