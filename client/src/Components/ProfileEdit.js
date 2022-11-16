import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//TO DO: Won't update!

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
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      {/* <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow-md dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button> */}
      <div class="py-6 px-6 lg:px-8">
        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Update User
        </h3>
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
              name="password"
              id="password"
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
              class="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              UPDATE PROFILE
            </button>
            <button onClick={handleDelete}>Delete User</button>
          </div>
        </form>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}
