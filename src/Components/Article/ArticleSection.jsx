import React, { useEffect, useState } from "react";
import { useArticleStore } from "../../store/index";
import PageLoader from "../common/PageLoader";
import ArticleCard from "./ArticleCard";
const ArticleSection = () => {
  const data = useArticleStore((state) => state.data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <PageLoader />;
  return (
    <div className="mt-5 ">
      {/* grid grid-cols-4 gap-4 */}
      {data.map((article, index) => (
        <ArticleCard
          className=""
          name={article.name}
          description={article.description}
          tags={article.tags}
        />
      ))}
    </div>
  );
};

export default ArticleSection;
