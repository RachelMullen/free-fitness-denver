import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewOrganizationForm({ currentUser }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    organizer_id: currentUser.id,
    description: "",
    attachment: "",
    announcements: "",
    link: "",
    social_media: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/organizations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((formData) => console.log(formData));
    setFormData({
      name: "",
      description: "",
      attachment: "",
      announcements: "",
      organizer_id: currentUser.id,
      link: "",
      social_media: "",
    });
    navigate("/organizations");
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }

  return (
    <div class="flex flex-col flex-wrap justify-evenly items-center space-y-3 ">
      {" "}
      <div class="flex w-full max-w-md h-full md:h-auto">
        <div class="rounded-lg shadow-lg bg-teal-300 dark:bg-gray-700">
          <div class="flex py-6 lg:px-8 ">
            <form onSubmit={handleSubmit} class="space-y-6">
              <div>
                <h1 class=" text-center mb-4 text-3xl font-medium text-gray-900 dark:text-white">
                  CREATE A NEW ORGANIZATION
                </h1>
                <label
                  htmlFor="name"
                  class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  value={formData.name}
                  onChange={handleChange}
                />{" "}
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                />{" "}
              </div>
              <div>
                <label htmlFor="attachment">
                  Attachment{" "}
                  <input
                    type="text"
                    name="attachment"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="attachment"
                    value={formData.attachment}
                    onChange={handleChange}
                  />{" "}
                </label>{" "}
              </div>
              <div>
                <label htmlFor="announcements">
                  Announcements
                  <input
                    type="text"
                    name="announcements"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="announcements"
                    value={formData.announcements}
                    onChange={handleChange}
                  />{" "}
                </label>
              </div>
              <div>
                <label htmlFor="link">
                  Website Link{" "}
                  <input
                    type="text"
                    name="link"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="link"
                    value={formData.link}
                    onChange={handleChange}
                  />
                </label>{" "}
              </div>
              <div>
                <label htmlFor="social_media">
                  Social Media Link
                  <input
                    type="text"
                    name="social_media"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="social_media"
                    value={formData.social_media}
                    onChange={handleChange}
                  />
                </label>{" "}
              </div>

              <button type="submit" class=" text-purple-600 ">ADD ORGANIZATION</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
