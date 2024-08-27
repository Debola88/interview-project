import React from "react";
import Tutors from "./Tutors";

function ManageTutor() {
  return (
    <div className=" px-14 max-md:px-5 pt-12 max-md:pt-10 relative mx-auto pb-24">
      <h1 className="max-md:hidden font-bold text-3xl  max-md:text-2xl pb-8 w-full">
        Manage Tutors
      </h1>

      <div className="bg-[#ffffff] shadow-lg rounded-lg p-5">
        <div className="max-w-full">
          <Tutors />
          <Tutors />
          <Tutors />
          <Tutors />
          <Tutors />
          <Tutors />
        </div>
        <div className="flex max-md:flex-col pt-4 gap-2">
          <button
            type="submit"
            className="rounded-lg text-sm max-md:text-base px-4 py-2 max-md:py-4 bg-[#186BAD] mt-5 text-white font-semibold hover:bg-[#186BAD]/70 transition-all duration-300 max-w-max max-md:max-w-full"
          >
            Reschedule Session
          </button>
          <button
            type="submit"
            className="rounded-lg text-sm max-md:text-base text-black border border-[#D9734C] px-4 py-2 max-md:py-4 bg-[#FFFFFF] hover:bg-black hover:text-white transition-all duration-300 mt-5 font-semibold max-w-max max-md:max-w-full"
          >
            Cancel Session
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default ManageTutor;
