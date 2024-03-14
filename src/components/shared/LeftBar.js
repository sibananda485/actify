import {
  faAddressBook,
  faCommentDots,
  faLinesLeaning,
  faTableColumns,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function LeftBar() {
  return (
    <> 
      <div className="hidden lg:block w-52 h-screen shadow-lg">
        <h1 className="font-bold text-2xl p-3 border-b">CRM Portal</h1>
        <ul className="flex flex-col gap-5 px-3 py-6">
          <li className="font-semibold flex gap-2 items-center bg-gray-100 p-2">
            <FontAwesomeIcon icon={faTableColumns} />
            Dashboard
          </li>
          <li className="font-semibold flex gap-2 items-center hover:bg-gray-50 transition-all cursor-pointer p-2">
            <FontAwesomeIcon icon={faAddressBook} /> Contact
          </li>
          <li className="font-semibold flex gap-2 items-center hover:bg-gray-50 transition-all cursor-pointer p-2">
            <FontAwesomeIcon icon={faUser} /> Account
          </li>
          <li className="font-semibold flex gap-2 items-center hover:bg-gray-50 transition-all cursor-pointer p-2">
            <FontAwesomeIcon icon={faLinesLeaning} /> Lead
          </li>
          <li className="font-semibold flex gap-2 items-center hover:bg-gray-50 transition-all cursor-pointer p-2">
            <FontAwesomeIcon icon={faCommentDots} /> Feedback
          </li>
        </ul>
      </div>
    </>
  );
}
