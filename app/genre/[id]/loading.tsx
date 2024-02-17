import React from "react";

function loading() {
  const dummyArray: Array<number> = [0, 1, 2];

  return (
    <>
      {dummyArray?.map((_, i:number) => (
        <div key={i} className="border-[1px] flex flex-col md:flex-row gap-x-5 items-center my-5 py-10   rounded-md ">
          <div className="w-full md:w-[30%] ">
            <div className="w-full h-[400px] bg-gray-300 dark:bg-gray-700 rounded-md"></div>
          </div>
          <div className="flex-1 relative m-5 md:m-0 ">
            <div className="w-80 h-8 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            <div className="flex gap-x-2 mt-5 ">
              <div className="w-1/4 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
              <div className="w-1/4 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
              <div className="w-1/4 h-6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
            </div>
            <div className="mr-5 text-sm md:text-md mt-5 dark:text-white bg-gray-300 dark:bg-gray-700 rounded-md h-24"></div>
            <div className="flex gap-x-5 mt-5">
              <button className="py-6 bg-gray-300 dark:bg-gray-700 rounded-md w-[20%]"></button>
              <button className="py-6 bg-gray-300 dark:bg-gray-700 rounded-md w-[20%]"></button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default loading;
