import React from 'react'

function loading() {
  return (
    <div className="my-10">
      <div className="w-full mb-3">
        <div className="w-full h-[700px] bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      </div>
      <div className="flex-1 relative m-5 md:m-0 ">
        <div className="w-80 h-8 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        <div className="flex gap-x-2 mt-5 ">
          <div className="w-28 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          <div className="w-28 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          <div className="w-28 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        </div>
        <div className="mr-5 text-sm md:text-md mt-5 dark:text-white bg-gray-300 dark:bg-gray-700 rounded-md h-24"></div>
        <div className="flex gap-x-5 mt-5">
          <div className="w-20 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          <div className="w-20 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          <div className="w-20 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}

export default loading