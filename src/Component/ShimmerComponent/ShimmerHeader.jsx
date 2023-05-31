import React from "react";

export default function ShimmerHeader() {
  return (
    <div className="bg-[#fff] flex justify-between px-12 border-b-2 py-8 w-full">
      <div className="flex gap-12">
        <button className="px-20 py-5 bg-[#f0f0f0] rounded-xl"></button>
        <button className="px-20 py-5 bg-[#f0f0f0] rounded-xl"></button>
      </div>
      <div className="flex gap-12">
        <input type="search" className="h-10 border rounded-xl" />
        <button className="px-20 py-5 bg-[#f0f0f0] rounded-xl"></button>
        <button className="px-20 py-5 bg-[#f0f0f0] rounded-xl"></button>
      </div>
    </div>
  );
}
