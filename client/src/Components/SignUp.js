import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp({ setCurrentUser, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  //Signs up new user
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("bio", bio);
    formData.append("profile_picture", profilePicture);

    fetch("/signup", {
      method: "POST",
      body: formData,
    }).then((r) => {
      if (r.ok) {
        r.json().then((formData) => setCurrentUser(formData));
        setLoggedIn(true);
        navigate(`/profile`);
      }
    });
  }
  return (
    <div class="flex flex-col flex-wrap justify-evenly items-center space-y-3 ">
      <div class="flex w-full max-w-md h-full md:h-auto">
        <div class="rounded-lg shadow-lg bg-teal-300 dark:bg-gray-700">
          <div class="flex py-6 lg:px-8 ">
            <form onSubmit={handleSubmit} class="space-y-6">
              <div>
                <h1 class=" text-center mb-4 text-3xl font-medium text-gray-900 dark:text-white">
                  SIGN UP
                </h1>
                <label
                  for="email"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="email@email.com"
                  required=""
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Confirm your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                  defaultValue={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="name"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First and Last"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="bio"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400"
                >
                  Bio
                </label>
                <textarea
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="Share some fun details about yourself!"
                  rows="4"
                  class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  required=""
                  defaultValue={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="profile_picture"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Profile Picture
                </label>

                <input
                  type="file"
                  name="profile_picture"
                  id="profile_picture"
                  placeholder="Upload photo"
                  accept="image/*"
                  class="block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  required=""
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                SIGN UP
              </button>
              <div class="text-lg font-lg text-gray-500 dark:text-gray-300 text-center">
                <p class="italic">Already have an account?</p>
                <p>
                  <Link
                    to="/login"
                    class="inline-flex items-center font-extrabold text-purple-600 dark:text-purple-500 hover:underline text-lg"
                  >
                    Login
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
