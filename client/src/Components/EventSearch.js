import React from "react";

export default function EventSearch({
  category,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}) {
  return (
    //     <div className="searchbar">
    //       <label htmlFor="search">Search Events:</label>
    //       <input
    //         type="text"
    //         id="search"
    //         placeholder="Type an event to search..."
    //         onChange={(e) => onSearchChange(e.target.value)}
    //         value={searchTerm}
    //       />
    //     </div>
    //   );
    // }

    <form>
      <div class="flex">
        <label
          for="search-dropdown"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          All categories{" "}
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="top"
          style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);"
        >
          <select
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <li>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="All"
              >
                Filter by Category
              </option>
            </li>
            <li>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Road Running"
              >
                Road Running
              </option>
            </li>
            <li>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="Trail Running"
              >
                Trail Running
              </option>
            </li>
            <li>
              <option
                class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                value="HIIT"
              >
                HIIT
              </option>
            </li>
          </select>
        </div>
        <div class="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Type an event to search..."
            required
            onChange={(e) => onSearchChange(e.target.value)}
            value={searchTerm}
          />
        </div>
      </div>
    </form>
  );
}
