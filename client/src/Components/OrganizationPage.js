import React, { useEffect, useState } from "react";
import OrganizationCard from "./OrganizationCard";
import { Link } from "react-router-dom";

export default function OrganizationPage() {
  const [organizations, setOrganizations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/organizations")
      .then((r) => r.json())
      .then((organizations) => {
        setOrganizations(organizations);
      });
  }, []);

    const searchedOrganizations = organizations.filter((organization) => {
      return organization.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const orgCollection = searchedOrganizations.map((organization) => {
      return (
        <OrganizationCard key={organization.id} organization={organization} />
      );
    });

    return (
      <div class="flex flex-col flex-wrap space-y-6">
        <div class="bg-purple-700 items-center text-2xl text-white py-4 font-bold text-center">
          GROUPS
        </div><Link to="/organizations/new" class="text-purple-700 items-center text-2xl text-white py-4 font-bold text-center">
        ADD NEW GROUP</Link>
        <div class="w-1/2 items-center self-center">
          <form>
            <label
              for="default-search"
              class="mb-2 font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Search Groups..."
                required
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                SEARCH
              </button>
            </div>
          </form>
        </div>
        <div class="flex flex-wrap justify-center space-y-4 space-x-4">
          {orgCollection}
        </div>
      </div>
    );
  }