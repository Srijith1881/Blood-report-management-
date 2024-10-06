// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen w-screen flex items-center justify-between px-10 bg-white">
            {/* Left Side: Text Section */}
            <div className="flex flex-col justify-center items-start w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Donate Blood, Save Lives
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    Join us in making a difference. Your blood donation can help save someone’s life. Be a hero today!
                </p>
                <div className="flex space-x-4">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300">
                        Donate Now
                    </button>
                    <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Side: Image Section */}
            <div className="w-1/2 flex justify-center">
                <img
                    src="./src/assets/images/blood img.jpg"
                    alt="Blood Donation"
                    className="w-3/4"
                />
            </div>
        </div>
    );
};

export default Home;
