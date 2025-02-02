import React from 'react'
import { useState } from 'react'

const JobListing = ({job}) => {

  const [showFullDescription, setShowFullDesciption] = useState(false);

  let description = job.description;
   
  if(!showFullDescription){
    description = description.substring(0, 90) + '...';
  }


  return (
    <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                  <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                  </div>
  
                  <div className="mb-5">
                    {description}
                  </div>

                  <button onClick= {()=>setShowFullDesciption((prevState)=>!prevState)}className="text-orange-500 mb-5 hover:text-orange-600">
                    {showFullDescription ? 'Less' : 'More'}
                  </button>
  
                  <h3 className="text-orange-500 mb-2">{job.salary}</h3>
  
                  <div className="border border-gray-100 mb-5"></div>
  
                  <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className=" mb-3">
                      <i className="fa-solid fa-location-dot text-lg"></i>
                      {job.location}
                    </div>
                    <a
                      href={`/job/${job.id}`}
                      className="h-[36px] bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                    Read More
                    </a>
                  </div>
                </div>
              </div>
  )
}

export default JobListing