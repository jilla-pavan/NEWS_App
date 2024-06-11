import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { fetcher, newsDataAPI_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useSWR from "swr";

function NewsFeedPage() {
  // Using useSWR to fetch data from an API

  const { data, error } = useSWR(newsDataAPI_URL, fetcher);

  // code related to navigate to next card

  const [activeNewsCard, setActiveNewsCard] = useState(0);
  const handleNextClick = () => {
    setActiveNewsCard((activeNewsCard + 1) % data.articles.length);
  };

  // Adding efficient User Experience by implementing Shimmer, Error Message....

  if (error) return <div>{error}</div>;

  return !data ? (
    <Shimmer /> // using shimmer effect
  ) : (
    <div className=" bg-slate-500 w-[300px] h-[500px] border border-black rounded-2xl">
      <div className="p-2 flex justify-center items-center flex-col">
        <h1 className="m-1 font-bold text-white">News Feed App</h1>

        {/* using data that is fetched */}

        {data.articles.map((x, i) => {
          return (
            <div className={activeNewsCard === i ? "block" : "hidden"}>
              <NewsCard newsData={x} key={i} />
            </div>
          );
        })}

        <button
          className="m-2 px-6 py-2 bg-green-300"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default NewsFeedPage;
