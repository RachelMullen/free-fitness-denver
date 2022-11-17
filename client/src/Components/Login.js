import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setCurrentUser, setLoggedIn }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  //Logs in User
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((formData) => setCurrentUser(formData));
        setLoggedIn(true);
        navigate("/profile");
      }
    });
  }

  return (
    <div class="flex flex-col flex-wrap justify-evenly items-center ">
      <div class="relative w-full max-w-md h-full md:h-auto ">
        <div class="relative bg-purple-600 rounded-lg shadow-md dark:bg-gray-700">
          <div class="py-6 px-6 lg:px-8">
            <h1 class=" text-center mb-4 text-3xl font-medium   dark:text-white">
              LOG IN{" "}
            </h1>
            <form onSubmit={handleSubmit} class="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-lg font-medium text-gray-100 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="email@email.com"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-lg font-medium text-gray-100 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                class="w-full shadow-xl text-white bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                LOGIN
              </button>
              <div class="text-lg font-lg text-gray-100 dark:text-gray-300 text-center">
                <p class="italic">New User?</p>
                <p>
                  <Link
                    to="/signup"
                    class="inline-flex items-center font-extrabold text-teal-400 hover:underline text-lg"
                  >
                    Sign up
                    <svg
                      aria-hidden="true"
                      class="ml-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
