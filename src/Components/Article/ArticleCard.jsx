import React, { useState } from "react";

function ArticleCard({ name, description, tags }) {
  return (
    <div className="w-80 my-2 bg-white p-2 outline-1 drop-shadow-md">
      <div className="font-bold text-lg m-1">{name}</div>
      <div className="font-normal text-sm m-1">{description}</div>
      <hr className="bg-[#CECECE] mx-1 my-2" />
      <div className="m-1 w-10 h-5 border-2 rounded-xl bg-[] justify-center content-center">
        <div className="text-xs font-semibold text-center">{tags}</div>
      </div>
    </div>
  );
}

export default ArticleCard;
