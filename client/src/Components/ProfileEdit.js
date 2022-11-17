import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//TO DO: Won't update unless all categories filled out!

export default function ProfileEdit({ currentUser, setCurrentUser }) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);
    formData.append("bio", bio);
    formData.append("profile_picture", profilePicture);

    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      body: formData,
    }).then((r) => {
      if (r.ok) {
        r.json().then((formData) => {
          setCurrentUser(formData);
          alert("User updated.");
          navigate("/profile");
        });
      }
    });
  }

  function handleDelete() {
    fetch(`/users/${currentUser.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(
        setCurrentUser(currentUser.filter((user) => user.id !== currentUser.id))
      );
    alert("User deleted.");
    navigate("/");
  }

  return (
    <div class="flex flex-col flex-wrap items-center space-y-2 h-auto w-auto">
      <button
        onClick={handleDelete}
        ype="button"
        class="text-white my-4 object-center bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none shadow-xl focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex flex-wrap items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
      >
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        DELETE USER
      </button>
      <div class="relative bg-teal-300 p-5 rounded-lg w-full max-w-md h-full md:h-auto">
        <div class="py-6 px-6 lg:px-8">
          <h1 class=" text-center mb-4 text-3xl font-medium text-gray-900 dark:text-white">
            Update User
          </h1>
          <form onSubmit={handleSubmit} class="space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Update email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                defaultValue={currentUser.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Update password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                defaultValue={currentUser.password}
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
                name="password_confirmation"
                id="password_confirmation"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                defaultValue={currentUser.passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <div>
              <label
                for="name"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Update your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                defaultValue={currentUser.name}
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
                rows="4"
                class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                defaultValue={currentUser.bio}
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
                onChange={(e) => setProfilePicture(e.target.files[0])}
              />
              <button
                type="submit"
                class="inline-flex items-center flex-wrap justify-center object-centershadow-xl font-medium object-center w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-lg px-5 py-2.5 mt-8 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h2 class="px-2">UPDATE PROFILE </h2>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
