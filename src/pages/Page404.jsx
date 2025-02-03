import React from "react";
import { Link } from "react-router-dom";
function Page404() {
  return (
    <section className="flex justify-center overflow-hidden items-center min-h-screen">
      <img src={"src/assets/images/idk.jpg"} className="max-h-screen min-h-screen object-cover w-1/2" />
      <div className="flex flex-1 justify-center items-center flex-col ">
        <h1 className="font-RubikDoodleShadow text-cyan-950 text-8xl !pb-2">404 Error</h1>
        <h1 className="font-Bricolage text-2xl !pb-3">The page you requested can't be found</h1>
        <Link className="!py-2 !px-4 bg-green-950 hover:bg-green-800 active:bg-green-700 transition-all duration-300 text-white font-Bricolage text-xl shadow-lg rounded-lg" to={-1}>Go back</Link>
      </div>
    </section>
  );
}

export default Page404;
