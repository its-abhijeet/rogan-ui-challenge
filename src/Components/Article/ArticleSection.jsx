import React from "react";
import axios from "axios";
import { DeleteOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "../common/PageLoader";
const ArticleSection = () => {
  const callingData = async () => {
    const result = await axios.get(
      "https://645eea377da4477ba94dd89b.mockapi.io/api/v1/articles"
    );
    return result.data;
  };
  const deletePost = useMutation((id) => {
    return axios.delete(
      `https://645eea377da4477ba94dd89b.mockapi.io/api/v1/articles/${id}`
    );
  });
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["key1"],
    callingData
  );
  if (isLoading) return <PageLoader />;
  if (isError) <h1>{error}</h1>;
  return (
    <div className="grid grid-cols-2 gap-8">
      {data.map((value, index) => {
        return (
          <div
            key="index"
            className="w-80 my-2 bg-white p-2 outline-1 drop-shadow-md"
          >
            <div className="flex flex-row items-center">
              <div className="font-bold text-lg m-1 basis-11/12" key={index}>
                {value.name}
              </div>
              <DeleteOutlined
                type="button"
                className="basis-1/12 "
                onClick={() => {
                  deletePost.mutate(value.id);
                  refetch();
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }}
              ></DeleteOutlined>
            </div>
            <div className="font-normal text-sm m-1">{value.description}</div>
            <hr className="bg-[#CECECE] mx-1 my-2" />
            <div className="m-1 p-1 border-2 rounded-xl bg-[] inline-block flex-row">
              <div className="text-xs font-semibold text-start float-left">
                {value.tags}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ArticleSection;
