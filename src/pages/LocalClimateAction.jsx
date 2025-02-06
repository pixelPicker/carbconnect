import React from 'react';
import { motion } from "framer-motion";


const LocalClimateAction = () => {
  return (
    <div className="bg-gray-100 !mt-20 min-h-screen">
      {/* Header Section */}
      <header className="bg-green-700 text-white py-20 text-center shadow-lg">
        <motion.h1
          className="text-5xl font-extrabold tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Local Climate Action
        </motion.h1>
        <motion.p
          className="mt-4 text-xl opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Building a sustainable future, one community at a time.
        </motion.p>
      </header>

      {/* Introduction Section */}
      <section className="container !mx-auto px-4 py-12">
        <p className="text-lg text-gray-700 text-center">
          Local climate action is a set of efforts to reduce greenhouse gas emissions and adapt to climate change at a local level. These efforts can include building infrastructure, changing travel habits, and reducing energy use.
        </p>
      </section>

      {/* Goals Section */}
      <section className="bg-white py-12">
        <div className="container !mx-auto px-4">
          <h2 className="text-3xl font-bold text-center !mt-5 !mb-8">What are the goals of local climate action?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/img1 (2).jpg" alt="Reduce Emissions" className="rounded-lg !mb-4" />
              <h3 className="text-xl font-semibold !mb-2">Reduce Emissions</h3>
              <p className="text-gray-600">Reduce the amount of greenhouse gases produced by a community.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/img2 (2).jpg" alt="Adapt to Climate Change" className="rounded-lg !mb-4" />
              <h3 className="text-xl font-semibold !mb-2">Adapt to Climate Change</h3>
              <p className="text-gray-600">Help communities prepare for and recover from climate-related events.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/img3.jpg" alt="Promote Sustainability" className="rounded-lg !mb-4" />
              <h3 className="text-xl font-semibold !mb-2">Promote Sustainability</h3>
              <p className="text-gray-600">Create more sustainable ways of living and working.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="container !mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center !mt-5 !mb-8">How is local climate action implemented?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img src="/src/assets/images/img4.jpg" alt="Local Action Plans" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Local Action Plans</h3>
            <p className="text-gray-600">Create plans tailored to the needs of a specific community.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img src="/src/assets/images/img5.jpg" alt="Community Participation" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Participation</h3>
            <p className="text-gray-600">Involve the community in decision-making to ensure sustainability.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img src="/src/assets/images/img6.jpg" alt="Funding" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Funding</h3>
            <p className="text-gray-600">Provide multi-year funding allocations to support local climate action.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <img src="/src/assets/images/img7.jpg" alt="Frameworks" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Local Climate Action Frameworks</h3>
            <p className="text-gray-600">Use guides to help communities implement projects and programs.</p>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="bg-white py-12">
        <div className="container !mx-auto px-4">
          <h2 className="text-3xl font-bold text-center !mt-5 !mb-8">What are some examples of local climate action?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/img8.jpg" alt="Saving Energy at Home" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Saving Energy at Home</h3>
              <p className="text-gray-600">Use energy-efficient appliances and reduce energy consumption.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/img9.jpg" alt="Electric Vehicles" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Switching to Electric Vehicles</h3>
              <p className="text-gray-600">Adopt electric vehicles to reduce carbon emissions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
              <img src="/src/assets/images/img10.jpg" alt="Reducing Food Waste" className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reducing Food Waste</h3>
              <p className="text-gray-600">Compost and plan meals to minimize food waste.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center !py-16 bg-green-100 mt-12 shadow-inner">
        <motion.h2
          className="text-4xl font-bold text-green-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Join the Movement
        </motion.h2>
        <motion.p
          className="!mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Take action today to create a greener tomorrow.
        </motion.p>
        <motion.button
          className="!mt-6 bg-green-700 text-white !px-6 !py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-800 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Involved
        </motion.button>
      </section>


      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2025 Local Climate Action. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LocalClimateAction;