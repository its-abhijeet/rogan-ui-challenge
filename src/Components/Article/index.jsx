import React from "react";
import SideBar from "./SideBar";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import ArticleSection from "./ArticleSection";

const index = () => {
  return (
    <>
      <ArticleSection />
      <SideBar />
    </>
  );
};

export default index;
