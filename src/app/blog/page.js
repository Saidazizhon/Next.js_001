import React from 'react'


const Blog = () => {
  return (
    <div className='container w-full mx-auto px-32'> 
        <div className="py-32 flex justify-between items-start bg-white">
            <div className="space-y-6 max-w-md">
                <p className="text-sm text-gray-600 uppercase tracking-wide">Career at ether</p>
                <h1 className="text-5xl font-bold">Full Stack Developer</h1>
                <p className="text-gray-600">
                Through True Rich Attended does no end it his mother since real had half every him case in packages.
                </p>
                <button className="bg-[#5D5DFF] text-white px-6 py-3 rounded flex items-center gap-2 text-sm font-medium">
                Apply Now
                <span>→</span>
                </button>
            </div>
            <div className="bg-[#FFE0C7] p-20 rounded-lg w-[50%] flex flex-col  justify-center h-[300px]">
                <h2 className="text-2xl font-bold mb-6">Job Description</h2>
                <div className="space-y-4 text-gray-700">
                <p className='font-semibold'>Remote, India , 4 to 5 Years Of Experience</p>
                <p className='font-semibold'>Department: Product Engineering</p>
                <p className='font-semibold'>Full Time 5 Position Available.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog