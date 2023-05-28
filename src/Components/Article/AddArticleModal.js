import React, { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const AddArticleModal = ({ onCloseModal, initialData }) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();
  const mutation = useMutation((DATA) => {
    return axios.post(
      "https://645eea377da4477ba94dd89b.mockapi.io/api/v1/articles",
      DATA
    );
  });
  useEffect(() => {
    setDescription(description);
    setName(name);
    setTags(tags);
  }, [name, description, tags]);

  const handleSave = () => {
    console.log(name);
    console.log(description);
    console.log(tags);
    onCloseModal(
      mutation.mutate({
        createdAt: new Date(),
        name: name,
        description: description,
        tags: tags,
      })
    );
    setTimeout(() => {
      window.location.reload();
    });
  };
  return (
    <div className="w-96 h-full p-2 border-black border-2 m-8">
      <div className="font-bold text-lg text-start mx-2 my-2">
        Add new article
      </div>
      <div className="m-2">
        <div className="font-semibold text-start text-base">Name</div>
        <div className="my-1">
          <textarea
            className="border-2 p-1 w-full"
            id=""
            cols="30"
            rows="1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="m-2">
        <div className="font-semibold text-start text-base">Description</div>
        <div className="my-1">
          <textarea
            className="border-2 p-1 w-full"
            id=""
            cols="30"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="m-2">
        <div className="font-semibold text-start text-base">
          Tags(comma separated)
        </div>
        <div className="my-1">
          <textarea
            className="border-2 p-1 w-full"
            id=""
            cols="30"
            rows="1"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
      </div>
      <div className="mx-2 mb-2 mt-64">
        <button
          onClick={handleSave}
          className="w-full bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black rounded"
        >
          Add Article
        </button>
      </div>
    </div>
  );
};

export default AddArticleModal;
