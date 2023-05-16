import React, { useEffect, useState } from "react";
// import { data } from "../dummyArticles";
import PageLoader from "../common/PageLoader";
const ArticleSection = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const data = require("../dummyArticles");
      console.log(data);
      setArticlesData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <PageLoader />;
  return (
    <div className="mt-5 ">
      {articlesData.data.map((article, index) => (
        <div key={index} className="mb-3">
          <p className="text-xl font-semibold">{article.name}</p>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleSection;
