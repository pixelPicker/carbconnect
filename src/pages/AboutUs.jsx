import React from "react";
import neelImage from "../assets/images/neel.jpeg";
import car from "../assets/images/1.jpeg";
import anisha from "../assets/images/anisha.png"
const AboutUs = () => {
  
  const teamMembers = [
    {
      id: 1,
      name: "Rahul",
      role: "Team Leader",
      bio: "Oversaw the entire project, coordinated team efforts, and ensured timely completion.",
      image: "/public/images/1.jpeg",
      
    },
    {
      id: 2,
      name: "Yash",
      role: "UI/UX Designer",
      bio: " Created the Local Climate Action page, helping users take localized steps toward sustainability.",
      image: "/images/neel.jpeg",
    },
    {
      id: 3,
      name: "Carlton",
      role: "Frontend Developer & Content Strategist",
      bio: " Designed the Actionable Challenges activity and the About Us page for better user engagement.",
      image: car,
    },
    {
      id: 4,
      name: "Neel",
      role: "Content Writer & Researcher",
      bio: "Designed the Blog Page, providing valuable insights on climate issues and greenhouse gases.",
      image: neelImage,
    },
    {
      id: 5,
      name: "Anisha",
      role: "Product Designer & Researcher",
      bio: "Developed the Product Marketplace, featuring eco-friendly products for sustainable living.",
      image: anisha,
    },
    {
      id: 6,
      name: "Eva Green",
      role: "Community Manager",
      bio: "Built the Community Forum, fostering discussions and engagement on green initiatives.",
      image: "/public/images/1.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 py-12 px-6 sm:px-8 lg:px-12 text-gray-900">
      <div className="max-w-6xl !mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 !mt-16 !mb-6">Meet Our Team</h1>
        <p className="text-lg text-green-600 !mb-10">
          We are a passionate team dedicated to sustainability. Get to know the people behind our mission!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 border border-green-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 !mx-auto rounded-full !mt-4 !mb-4 border-4 border-green-500 shadow-sm"
              />
              <h2 className="text-2xl font-semibold text-green-700 !mb-1">{member.name}</h2>
              <p className="text-green-600 !mb-2">{member.role}</p>
              <p className="text-gray-700 !mb-1">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;