import React from "react";
import Pagination from "./shared/Pagination";
import ThreeDot from "./icons/ThreeDot";

export default function Table({ data, totalResult, setPage, page }) {
  return (
    <div className="flex flex-col w-[80vw]">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="sm:min-w-full">
              {/* Table Header */}
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex justify-between">
                      Accout Name
                      <ThreeDot></ThreeDot>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex justify-between">
                      Email
                      <ThreeDot></ThreeDot>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex justify-between">
                      Phone No
                      <ThreeDot></ThreeDot>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex justify-between">
                      Website
                      <ThreeDot></ThreeDot>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex justify-between">
                      Industry <ThreeDot></ThreeDot>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex justify-between">
                      Status
                      <ThreeDot></ThreeDot>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    <div className="flex justify-between">Actions</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody>
                {data.length > 0 &&
                  data.slice(10 * (page - 1), page * 10).map((item, i) => {
                    return (
                      <tr
                        key={i}
                        className={`${
                          i % 2 === 0 ? "bg-gray-100" : "bg-white"
                        } border-b`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.account}
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                          {item.email}
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                          {item.phone}
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                          {item.website}
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                          {item.industry}
                        </td>
                        <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                          {item.status ? "true" : "false"}
                        </td>
                        <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {data.length === 0 ? (
        <p className="text-center mt-10">🚫 No record found</p>
      ) : (
        // Pagination
        <Pagination
          total={totalResult}
          page={page}
          setPage={setPage}
        ></Pagination>
      )}
    </div>
  );
}
