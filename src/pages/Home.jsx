import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Hero />
  );
}

export default Home;

const Hero = () => {
  return (
    <>
      <section className="flex flex-col font-Outfit justify-center items-center w-full bg-leaves bg-blend-hard-light min-h-screen bg-black">
        <p className="text-center bg-gray-400/40 border-[2px] border-green-800/50 text-green-800 !p-2 rounded-lg">&#9679;&ensp; Don’t let global warming melt away our future.</p>
        <h1 className="text-center text-green-950 text-5xl !mb-2 !mt-10 font-Bricolage leading-15 text">Begin your Green Journey Today</h1>
        <p className="text-center text-green-800 !mb-8">Take the first step towards a sustainable future – explore tools, tackle challenges,<br />and connect with a like-minded community!</p>
        <div className="flex gap-4">
          <Link className="flex items-center cursor-pointer gap-2 !py-2 !px-3 text-white transition-all duration-300 hover:bg-green-800 shadow-xl active:bg-green-700 bg-green-950 rounded-lg">Challenge Yourself <BsArrowUpRightCircleFill /></Link>
          <Link className="flex items-center cursor-pointer gap-2 !py-2 !px-3 text-green-800 transition-all border-[2px] border-green-800/50 hover:bg-gray-400/50 active:bg-gray-400/60 bg-gray-400/40 rounded-lg">Join Our Program <BsArrowUpRightCircleFill /></Link>
        </div>
      </section>
    </>
  )
}