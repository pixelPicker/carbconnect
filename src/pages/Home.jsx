import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col font-Outfit justify-center items-center w-full bg-striped min-h-screen text-gray-100 bg-gray-950 ">
      <p className="text-center border-[2px] border-gray-100/25 bg-gray-950 text-gray-400 !p-2 rounded-lg">&#9679;&ensp; Don’t let global warming melt away our future.</p>
      <h1 className="text-center text-5xl !my-4 font-OutfitBold leading-15 text">Begin your Green Journey Today</h1>
      <p className="text-center text-gray-200 !mb-8">Take the first step towards a sustainable future – explore tools, tackle challenges,<br />and connect with a like-minded community!</p>
      <div className="flex gap-4">
        <Link className="flex items-center cursor-pointer gap-2 !py-2 !px-3 border-[2px] border-gray-100/25 hover:bg-gray-900 active:bg-gray-800 bg-gray-950 rounded-lg">Challenge Yourself <BsArrowUpRightCircleFill /></Link>
        <Link className="flex items-center cursor-pointer gap-2 !py-2 !px-3 border-[2px] border-gray-100/25 hover:bg-gray-100/30 active:bg-gray-100/40 bg-gray-100/20 rounded-lg">Join Our Program <BsArrowUpRightCircleFill /></Link>
      </div>
    </section>
  );
}

export default Home;
