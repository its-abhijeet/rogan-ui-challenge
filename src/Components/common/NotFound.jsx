import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="">
        <p className="text-3xl font-semibold">404 Not Found!</p>
        <Link to="/articles">
          <Button className="bg-blue-500 self-center mt-5" type="primary">
            Go to homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
