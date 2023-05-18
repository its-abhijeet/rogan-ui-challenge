import React from "react";
import SideBar from "./SideBar";
import ArticleSection from "./ArticleSection";

const index = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <ArticleSection />
    </div>
  );
};

export default index;
