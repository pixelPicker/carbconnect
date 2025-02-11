import React from 'react'

function Blog() {
    const blogPosts = [
        {
            title: "What is Carbon Footprint?",
            content:
                "A carbon footprint is the amount of carbon dioxide and other carbon compounds emitted due to human activities. Understanding it is crucial for mitigating climate change.",
            image: "src/assets/images/car2.jpg",
            link: "https://carbconnect.blogspot.com/2025/02/what-is-carbon-footprint.html",
        },
        {
            title: "How to Reduce Your Carbon Footprint",
            content:
                "Simple daily actions like reducing waste, using renewable energy, and driving less can significantly lower your carbon footprint.",
            image: "src/assets/images/carbon.jpg",
            link: "https://carbconnect.blogspot.com/2025/02/how-to-reduce-your-carbon-footprint.html",
        },
        {
            title: "The Impact of Carbon Footprint on the Environment",
            content:
                "Carbon emissions contribute to global warming, leading to sea-level rise, natural disasters, and threats to biodiversity.",
            image: "src/assets/images/Environment.jpg",
            link: "https://carbconnect.blogspot.com/2025/02/the-impact-of-carbon-footprint-on.html",
        },
        {
            title: "Innovative Ways to Offset Your Carbon Emissions",
            content:
                "Explore creative methods to offset your carbon emissions, such as supporting renewable energy projects and participating in reforestation initiatives.",
            image: "src/assets/images/offset.jpg",
            link: "https://carbconnect.blogspot.com/2025/02/innovative-ways-to-offset-your-carbon.html",
        },
        {
            title: "The Role of Technology in Reducing Carbon Footprint",
            content:
                "Discover how advancements in technology, like smart home devices and electric vehicles, are aiding in the reduction of carbon emissions.",
            image: "src/assets/images/tech.jpg",
            link: "https://carbconnect.blogspot.com/2025/02/the-role-of-technology-in-reducing.html",
        },
        {
            title: "Understanding Carbon Footprint in the Fashion Industry",
            content:
                "Learn about the environmental impact of the fashion industry and how sustainable practices can help reduce its carbon footprint.",
            image: "src/assets/images/fashion.jpg",
            link: "https://carbconnect.blogspot.com/2025/02/understanding-carbon-footprint-in.html",
        },
        {
            title: "The Importance of Sustainable Agriculture",
            content:
                "Delve into how sustainable farming practices can reduce carbon emissions and promote environmental health.",
            image: "src/assets/images/agriculture.jpg",
            link: "https://esitcrabconnect.blogspot.com/2025/02/the-importance-of-sustainable.html",
        },
        {
            title: "Carbon Footprint of Digital Activities",
            content:
                "Examine the environmental impact of our daily digital activities and discover ways to minimize your digital carbon footprint.",
            image: "src/assets/images/digital.jpg",
            link: "https://esitcrabconnect.blogspot.com/2025/02/carbon-footprint-of-digital-activities.html",
        },
        {
            title: "The Benefits of a Plant-Based Diet",
            content:
                "Understand how adopting a plant-based diet can significantly reduce your carbon footprint and contribute to a healthier planet.",
            image: "src/assets/images/plantbased.jpg",
            link: "https://esitcrabconnect.blogspot.com/2025/02/the-benefits-of-plant-based-diet.html",
        },
    ];


    return (
        <div className="container w-screen  !mt-20">
            <h1 className="text-3xl font-bold text-center !mb-6">Understanding Carbon Footprint</h1>
            <div className="grid  !px-16 grid-cols-1 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <div key={index} className='hover:scale-110 shadow-lg bg-amber-50 transition-all !p-6'>
                        <img className='max-w-full aspect-square object-cover' src={post.image} />
                        <h1 className='font-Bricolage text-3xl'>{post.title}</h1>
                        <p className='font-Outfit text-lg'>{post.content}</p>
                        <a 
                                href={post.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block px-5 py-3 text-white bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md hover:from-green-600 hover:to-green-800 transform hover:scale-105 transition-all"
                            >
                                Read More →
                            </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog