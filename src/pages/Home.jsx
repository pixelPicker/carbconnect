import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { LuTrees } from "react-icons/lu";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <Services />
    </>
  );
}

export default Home;

const Hero = () => {
  return (
    <>
      <section className="flex flex-col font-Outfit justify-center items-center w-full !pt-10 sm:pt-0 !px-4 bg-leaves bg-blend-hard-light min-h-screen bg-black">
        <p className="text-center bg-gray-400/40 border-[2px] border-green-800/50 text-green-800 !p-2 rounded-lg"> <Typewriter /></p>
        <h1 className="text-center text-green-950 text-3xl sm:text-5xl !mb-2 !mt-10 font-Bricolage sm:leading-15">Begin your Green Journey Today</h1>
        <p className="text-center text-green-800 !mb-8">Take the first step towards a sustainable future – explore tools, tackle challenges,<br />and connect with a like-minded community!</p>
        <div className="flex gap-4">
          <Link className="flex items-center cursor-pointer gap-2 !py-2 !px-3 text-white transition-all duration-300 hover:bg-green-800 shadow-xl active:bg-green-700 bg-green-950 rounded-lg">Challenge Yourself <BsArrowUpRightCircleFill /></Link>
          <Link className="flex items-center cursor-pointer gap-2 !py-2 !px-3 text-green-800 transition-all border-[2px] border-green-800/50 hover:bg-gray-400/50 active:bg-gray-400/60 bg-gray-400/40 rounded-lg">Join Our Program <BsArrowUpRightCircleFill /></Link>
        </div>
      </section>
    </>
  )
}

const Impact = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center !py-8 sm:!py-16 bg-green-100/50">
        <h1 className="text-3xl md:text-5xl !px-2 text-center font-Bricolage text-green-950 !pb-8 sm:!pb-16">The impact of carbon on our world</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 font-Outfit !px-4 md:!px-8 gap-8">

          <div className="!p-5 rounded-lg bg-green-200 shadow-lg">
            <div className="flex justify-between items-center text-3xl sm:text-5xl font-Bricolage text-green-950">
              <h1>1.2°C </h1>
              <FaGlobeAsia />
            </div>
            <h3 className="text-xl sm:text-2xl text-green-950 !pb-2 !pt-3">Increase in Global Temperatures</h3>
            <p className="text-green-900 ">The rise in carbon emissions has led to a significant increase in global temperatures. Since the late 19th century, Earth’s average temperature has risen by 1.2°C, causing  disrupted weather patterns.</p>
          </div>

          <div className="!py-3 !px-5 rounded-lg bg-green-200 shadow-lg">
            <div className="flex justify-between items-center text-3xl sm:text-5xl font-Bricolage text-green-950">
              <h1>30% </h1>
              <IoIosWater />
            </div>
            <h3 className="text-xl sm:text-2xl text-green-950 !pb-2 !pt-3">More CO2 absorbed by Oceans</h3>
            <p className="text-green-900 ">Oceans act as a buffer by absorbing about 30% of human-generated CO₂, but this comes at a cost. Excess CO₂ causes ocean acidification, harming marine life, coral reefs, and fisheries.</p>
          </div>

          <div className="!py-3 !px-5 rounded-lg bg-green-200 shadow-lg">
            <div className="flex justify-between items-center text-3xl sm:text-5xl font-Bricolage text-green-950">
              <h1>15</h1>
              <LuTrees />
            </div>
            <h3 className="text-xl sm:text-2xl text-green-950 !pb-2 !pt-3">Billion Trees lost Annually</h3>
            <p className="text-green-900 ">Forests are crucial carbon sinks, but 15 billion trees are lost each year due to deforestation. This not only reduces Earth's ability to absorb CO₂ but also releases stored carbon back into the atmosphere.</p>
          </div>
        </div>

      </section>
    </>
  )
}


const Typewriter = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const messages = [
    "🌍 'The greatest threat to our planet is the belief that someone else will save it.' – Robert Swan",
    "🌱 'What you do makes a difference, and you have to decide what kind of difference you want to make.' – Jane Goodall",
    "🔥 'We are the first generation to feel the impact of climate change and the last that can do something about it.' – Barack Obama",
    "🌊 'There is no Planet B. We have to act now!'",
    "🌿 'Nature does not hurry, yet everything is accomplished.' – Lao Tzu",
  ];


  useEffect(() => {
    const currentFact = messages[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), 50);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      }
    } else {
      if (charIndex < currentFact.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), 80);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    setText(currentFact.substring(0, charIndex));
  }, [charIndex, isDeleting, index]);

  return (
    <div className="text-lg font-Outfit text-green-950">
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
}

const Services = () => {
  return (
    <section className="md:!p-16 !py-16 !px-4 bg-stone-200">
      <h1 className="text-3xl sm:text-5xl font-Bricolage text-cyan-950 !pb-2">Our Services</h1>
      <h3 className="sm:text-lg font-Bricolage text-cyan-900 !pl-1 !pb-8">Explore the features that make CarbConnect your go-to platform for sustainability!</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 grid-rows-5 lg:grid-rows-3 gap-2">
        <div className="relative rounded-lg lg:col-span-2 lg:row-span-2">
          <div className="font-Bricolage flex flex-col items-end lg:text-3xl absolute right-0 top-0 z-10">
            <h1 className="bg-cyan-950 w-fit text-white rounded-bl-2xl rounded-tr-lg !p-2">Track your daily</h1>
            <h1 className="bg-cyan-950 w-fit text-white rounded-bl-2xl !p-2">Emissions</h1>
          </div>
          <img src="src/assets/images/cbf_ss.png" className="brightness-90 rounded-lg" />
        </div>
        <div className="border-[1px] border-gray-400 !p-1 lg:!p-4 rounded-lg lg:col-start-3">2</div>
        <div className="border-[1px] border-gray-400 !p-1 lg:!p-4 rounded-lg lg:col-start-3 lg:row-start-2">3</div>
        <div className="border-[1px] border-gray-400 !p-1 lg:!p-4 rounded-lg lg:col-start-3 lg:row-start-3">4</div>
        <div className="border-[1px] border-gray-400 !p-1 lg:!p-4 rounded-lg lg:col-start-2 lg:row-start-3">5</div>
        <div className="border-[1px] border-gray-400 !p-1 lg:!p-4 rounded-lg lg:col-start-1 lg:row-start-3">6</div>
      </div>
    </section>
  )
}