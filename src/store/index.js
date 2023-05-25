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

const useStore = create((set) => ({
  data: useQuery(["incoming-data"], async () => {
    const result = await axios.get(
      "https://645eea377da4477ba94dd89b.mockapi.io/api/v1/articles"
    );
    console.log(result);
    return result.data;
  }),
  addData: (article) =>
    set((state) => ({
      data: [
        {
          createdAt: new Date(),
          name: article.name,
          description: article.description,
          tags: article.tags,
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
// };
export const useArticleStore = useStore;
