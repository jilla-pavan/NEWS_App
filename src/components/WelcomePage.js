import { Link } from "react-router-dom";
import SwipeControl from "./SwipeControl";
import { useState } from "react";

function WelcomePage() {
  return (
    <div className=" bg-slate-500 w-[300px] h-[500px] border border-black rounded-2xl flex flex-col items-center justify-center">
      <h1 className="m-2 font-bold text-white"> Welcome to News Feed App</h1>
      <Link to="/newsfeedpage">
        <button className="px-6 py-2 m-4 rounded-lg bg-green-300">
          Press to fetch
        </button>
      </Link>
    </div>
  );
}

export default WelcomePage; 
