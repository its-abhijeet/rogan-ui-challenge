import { create } from "zustand";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// // Using react Query============================================
// const ExtractingData = () => {
//   const [getResult, setGetResult] = useState(null);
//   //for react query use
//   const { isLoading: isLoadingData, refetch: getData } = useQuery(
//     "incoming-data",
//     async () => {
//       return await axios.get(
//         "https://645eea377da4477ba94dd89b.mockapi.io/api/v1/articles"
//       );
//     },
//     {
//       enabled: false,
//       retry: 2,
//       onSuccess: (res) => {
//         const result = {
//           status: res.status + "-" + res.statusText,
//           headers: res.headers,
//           data: res.data,
//         };
//         setGetResult(result);
//       },
//       onError: (err) => {
//         setGetResult(err.response?.data || err);
//       },
//     }
//   );
//   useEffect(() => {
//     if (isLoadingData) setGetResult("Loading...");
//   }, [isLoadingData]);
//   //   ========================================

//

// const useStore = create((set) => 
//   data: [
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 1",
//       description: "Dummy 1 Description ",
//       tags: "test",
//       id: "1",
//     },
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 2",
//       description: "Dummy 2 Description ",
//       tags: "test",
//       id: "2",
//     },
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 3",
//       description: "Dummy 3 Description ",
//       tags: "test",
//       id: "3",
//     },
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 4",
//       description: "Dummy 4 Description ",
//       tags: "test",
//       id: "4",
//     },
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 5",
//       description: "Dummy 5 Description ",
//       tags: "test",
//       id: "5",
//     },
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 6",
//       description: "Dummy 6 Description ",
//       tags: "test",
//       id: "6",
//     },
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 7",
//       description: "Dummy 7 Description ",
//       tags: "test",
//       id: "7",
//     },
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 8",
//       description: "Dummy 8 Description ",
//       tags: "test",
//       id: "8",
//     },
//     {
//       createdAt: "2023-05-12T13:34:38.006Z",
//       name: "Dummy 9",
//       description: "Dummy 9 Description ",
//       tags: "test",
//       id: "9",
//     },
//   ],
//   addData: (article) =>
//     set((state) => ({
//       data: [
//         {
//           createdAt: new Date(),
//           name: article.name,
//           description: article.description,
//           tags: article.tags,
//         },
//         ...state.data,
//       ],
//     })),
//   removeData: (id) =>
//     set((state) => ({
//       data: state.data.filter((article) => article.id !== id),
//     })),
//   updateData: (article) =>
//     set((state) => ({
//       data: state.data.map((item) => {
//         if (item.id === article.id) {
//           return {
//             ...item,
//             name: article.name,
//             description: article.description,
//             tags: article.tags,
//           };
//         } else {
//           return item;
//         }
//       }),
//     })),
// }));
// // };
// export const useArticleStore = useStore;
