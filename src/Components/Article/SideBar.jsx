import {
  FileOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
  UserOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Modal, Input } from "antd";
import AddArticleModal from "./AddArticleModal";
import { useArticleStore } from "../../store/index";
const SideBar = () => {
  const data = useArticleStore((state) => state.data);
  const addData = useArticleStore((state) => state.addData);
  const updateData = useArticleStore((state) => state.updateData);
  const [open, setOpen] = useState(true);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  console.log(data);
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
          id: response.id,
        });
      }
    }
    modalData && setModalData(null);
  };
  const Menus = [
    { title: "Articles", src: <FileOutlined /> },
    {
      title: "Settings",
      src: <SettingOutlined />,
      onClick: () => setIsModalVisible1(true),
    },
    { title: "Profile", src: <UserOutlined />, gap: true },
    {
      title: "Add Card",
      src: <PlusCircleOutlined />,
      onClick: () => setModalOpen(true),
    },
  ];

  return (
    <div className="mr-2 ml-0 h-screen justify-center content-center">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300 `}
      >
        <div className="flex flex-row space-x-1 content-center items-center ">
          <RightOutlined
            className={`absolute cursor-pointer -right-1  w-7 text-white border-none
           border-2 rounded-full mr-6 ${!open}`}
            onClick={() => setOpen(!open)}
          />
          <LeftOutlined
            className={`text-white  cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left pl-3 font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Rogan UI Challenge
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
              onClick={Menu.onClick}
            >
              {Menu.src}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Modal
        title="Set User Name"
        visible={isModalVisible1}
        okText="Submit"
        okButtonProps={{ className: "bg-blue-500" }}
        onOk={() => {
          setIsModalVisible1(false);
        }}
        onCancel={() => {
          setIsModalVisible1(false);
        }}
      >
        <Input placeholder="Enter User name" />
      </Modal>
      <Modal
        visible={modalOpen}
        onOk={() => {
          setModalOpen(false);
        }}
        onCancel={() => {
          setModalOpen(false);
        }}
      >
        <AddArticleModal
          onCloseModal={handleModalClose}
          initialData={modalData}
        />
      </Modal>
    </div>
  );
};
export default SideBar;
