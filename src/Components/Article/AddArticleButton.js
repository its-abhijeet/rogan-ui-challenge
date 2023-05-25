import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import AddArticleModal from "./AddArticleModal";
import { useArticleStore } from "../../store/index";
import { Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

function AddArticleButton() {
  const mutation = useMutation((DATA) => {
    return axios.post(
      "https://645eea377da4477ba94dd89b.mockapi.io/api/v1/articles",
      DATA
    );
  });
  let data = useArticleStore((state) => state.data);
  const addData = useArticleStore((state) => state.addData);
  const updateData = useArticleStore((state) => state.updateData);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  //   const getData = async () => {
  //     const data1 = await axios.get(
  //       "https://645eea377da4477ba94dd89b.mockapi.io/api/v1/articles"
  //     );
  //     // console.log(data1.data);
  //     data2 = [...data2, ...data1.data];
  //     console.log(data2);
  //   };

  const handleModalClose = (response) => {
    setModalOpen(false);
    if (response) {
      console.log(response);
      if (response.id) {
        updateData({
          name: response.name,
          description: response.description,
          tags: response.tags,
        });
      } else {
        addData({
          name: response.name,
          description: response.description,
          tags: response.tags,
        });
      }
    }
    modalData && setModalData(null);
  };
  console.log(data);
  return (
    <div className="mt-[42rem] ml-[54rem] text-lg rounded-lg border-black border-2 h-12 p-1 cursor-pointer bg-dark-purple">
      <PlusCircleOutlined
        onClick={() => setModalOpen(true)}
        className="text-lg text-white"
      />
      <Modal
        visible={modalOpen}
        onOk={() => {
          setModalOpen(false);
        }}
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
