import React from "react";
import SideBar from "./SideBar";
import ArticleSection from "./ArticleSection";
import AddArticleButton from "./AddArticleButton";

const index = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <ArticleSection />
      <AddArticleButton />
    </div>
  );
};

export default index;
