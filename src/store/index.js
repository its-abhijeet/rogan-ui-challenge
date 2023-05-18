import { create } from "zustand";

const useStore = create((set) => ({
  data: [
    {
      createdAt: "2023-05-12T13:34:38.006Z",
      name: "Dummy 4",
      description: "Dummy 4 Description ",
      tags: "test",
      id: "4",
    },
    {
      createdAt: "2023-05-12T13:34:38.006Z",
      name: "Dummy 5",
      description: "Dummy 5 Description ",
      tags: "test",
      id: "5",
    },
    {
      createdAt: "2023-05-12T13:34:38.006Z",
      name: "Dummy 6",
      description: "Dummy 6 Description ",
      tags: "test",
      id: "6",
    },
    {
      createdAt: "2023-05-12T13:34:38.006Z",
      name: "Dummy 7",
      description: "Dummy 7 Description ",
      tags: "test",
      id: "7",
    },
    {
      createdAt: "2023-05-12T13:34:38.006Z",
      name: "Dummy 8",
      description: "Dummy 8 Description ",
      tags: "test",
      id: "8",
    },
    {
      createdAt: "2023-05-12T13:34:38.006Z",
      name: "Dummy 9",
      description: "Dummy 9 Description ",
      tags: "test",
      id: "9",
    },
  ],
  addData: (article) =>
    set((state) => ({
      data: [
        {
          createdAt: new Date(),
          name: article.name,
          description: article.description,
          tags: article.tags,
          id: Math.floor(Math.random() * 100),
        },
        ...state.data,
      ],
    })),
  removeData: (id) =>
    set((state) => ({
      data: state.data.filter((article) => article.id !== id),
    })),
  updateData: (article) =>
    set((state) => ({
      data: state.data.map((item) => {
        if (item.id === article.id) {
          return {
            ...item,
            name: article.name,
            description: article.description,
            tags: article.tags,
          };
        } else {
          return item;
        }
      }),
    })),
}));
export const useArticleStore = useStore;
