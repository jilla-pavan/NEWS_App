import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { newsDataAPI } from "../utils/constants";
import Shimmer from "./Shimmer";

function NewsFeedPage() {
  const [newsData, setNewsData] = useState([]);
  const [activeNewsCard, setActiveNewsCard] = useState(0);

  const handleNextClick = () => {
    setActiveNewsCard((activeNewsCard + 1) % newsData.length);
  };

  // Fetching the data using API

  const fetchNewsData = async () => {
    const fetchData = await fetch(newsDataAPI);
    const json = await fetchData.json();
    setNewsData(json.articles);
    console.log(json.articles);
  };

  useEffect(() => {
    fetchNewsData();
  }, []);

  return newsData.length === 0 ? (
    <Shimmer /> // using shimmer effect
  ) : (
    <div className=" bg-slate-500 w-[300px] h-[500px] border border-black rounded-2xl ">
      <div className="p-2 flex justify-center items-center flex-col">
        <h1 className="m-1 font-bold text-white">News Feed App</h1>

        {newsData.map((x, i) => {
          return (
            <div className={activeNewsCard === i ? "block" : "hidden"}>
              <NewsCard newsData={x} key={i} />
            </div>
          );
        })}

        <button
          className="m-2 px-6 py-2 bg-green-300 rounded-lg"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NewsFeedPage;
