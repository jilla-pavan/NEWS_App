import React from "react";
import { imgNotFound } from "../utils/constants";

function NewsCard({ newsData }) {
  //  console.log(newsData);

  const { urlToImage, title, description } = newsData;

  return (
    <div className="bg-white m-1 rounded-lg p-2 shadow-lg w-[250px] h-[400px] flex items-center justify-center flex-col ">
      <img
        className="h-[200px] w-[220px]  rounded-xl shadow-lg"
        src={urlToImage === null ? imgNotFound : urlToImage}
      />
      <div className="h-1/2">
        <h1 className="p-2 text-sm font-bold">{title}</h1>
        <p className="px-2 text-sm overflow-x-clip">{description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
