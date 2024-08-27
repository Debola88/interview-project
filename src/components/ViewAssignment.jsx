import React from "react";

const ViewAssignment = () => {
  return (
    <>
      <div className="px-14 max-md:px-5 pt-12 max-md:pt-0 relative mx-auto pb-24">
        <h1 className="max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full">
          Notifications
        </h1>

        <div className="max-md:hidden border-b border-[#969696] absolute w-full left-0"></div>

        <div className="max-w-[75%] max-lg:max-w-full">
          <div className="flex justify-between w-full md:pb-5 md:pt-8 items-center ">
            <h2 className="font-bold text-2xl max-md:text-base max-md:pt-0">
              Submit Assignment
            </h2>
          </div>
          <div className="shadow bg-white rounded-2xl p-10">
            <input type="file" className="h-10 p-2 w-full bg-gray-100" placeholder=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAssignment;
