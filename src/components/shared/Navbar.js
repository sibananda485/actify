import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="shadow-md p-3 flex justify-between">
        <p className="text-xl font-semibold ">Welcome back, john</p>
        <button className="bg-red-500 text text-white px-3 py-1 rounded-md">
          Sign out
        </button>
      </div>
    </>
  );
}
