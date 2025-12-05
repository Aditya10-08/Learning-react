import React from 'react'

const Card = ({ img, user, desc, age }) => {
  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col">
      <img src={img} alt={`${user} image`} className="w-full h-40 sm:h-48 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{user}, {age}</h2>
        <p className="text-gray-600 text-sm mb-4 flex-1 capitalize">{desc}</p>
        <div className="mt-auto">
          <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">View More</button>
        </div>
      </div>
    </article>
  )
}

export default Card