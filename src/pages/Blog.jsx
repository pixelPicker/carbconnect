import React from 'react'

function Blog() {
    const blogPosts = [
        {
            title: "What is Carbon Footprint?",
            content:
                "A carbon footprint is the amount of carbon dioxide and other carbon compounds emitted due to human activities. Understanding it is crucial for mitigating climate change.",
            image: "src/assets/images/car2.jpg",
        },
        {
            title: "How to Reduce Your Carbon Footprint",
            content:
                "Simple daily actions like reducing waste, using renewable energy, and driving less can significantly lower your carbon footprint.",
            image: "src/assets/images/carbon.jpg",
        },
        {
            title: "The Impact of Carbon Footprint on the Environment",
            content:
                "Carbon emissions contribute to global warming, leading to sea-level rise, natural disasters, and threats to biodiversity.",
            image: "src/assets/images/Environment.jpg",
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog