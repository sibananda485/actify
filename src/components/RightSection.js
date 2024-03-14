import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Form from "./Form";
import Main from "./Main";

export default function RightSection() {
  const [isForm, setIsform] = useState(false);
  return (
    <div className="grow bg-gray-50 shadow-md">
      <Navbar></Navbar>
      <div className="py-5 px-3 space-y-4 overflow-y-scroll h-[90vh]">
        {/* Switch for form and table data */}
        <div className="flex bg-gray-300 w-fit p-1 rounded-md">
          <div
            onClick={() => setIsform(false)}
            className={`cursor-pointer px-2 font-semibold text-sm ${
              isForm ? "" : "bg-white"
            }  rounded-md`}
          >
            Account
          </div>
          <div
            onClick={() => setIsform(true)}
            className={` cursor-pointer px-2 font-semibold ${
              isForm ? "bg-white" : ""
            } text-sm rounded-md`}
          >
            Create
          </div>
        </div>
        {/* Conditionaly rendering form and table */}
        {isForm ? <Form></Form> : <Main></Main>}
      </div>
    </div>
  );
}
