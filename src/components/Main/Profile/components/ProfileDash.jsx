import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GrAchievement } from "react-icons/gr";

function ProfileDash() {
  const [hide, setHide] = useState(true);
  function setting() {}
  return (
    <div>
      <div className=" max-w-6xl mx-auto ">
        <div class="relative flex flex-col  rounded-xl bg-white text-gray-700 mb-6 lg:mx-4">
          <div class="p-4">
            <div class="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div class="flex items-center gap-6">
                <img
                  src=""
                  alt="Img"
                  className="h-20 w-20 bg-blue-50 rounded-full"
                />
                <div>
                  <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-1">
                    Person
                  </h5>
                  <p class="flex justify-around antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                    <FaLinkedinIn />
                    <RiGithubLine />
                  </p>
                </div>
                <div className="flex lg:ml-10 flex-wrap gap-4">
                  <div className="text-center">
                    <p className=" font-semibold">Followers</p>
                    <p>100</p>
                  </div>
                  <div className="text-center">
                    <p className=" font-semibold">Following</p>
                    <p>100</p>
                  </div>
                </div>
              </div>
              <div class="w-screen">
                <div class="overflow-hidden block">
                  <nav>
                    <ul
                      role="tablist"
                      class="relative flex-wrap bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none mx-0 mt-0 mb-4 flex items-center justify-between gap-4"
                    >
                      <li
                        role="tab"
                        class="flex  text-center h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                        data-value="settings"
                      >
                        <div
                          onClick={setting}
                          class="z-20 flex justify-center items-center gap-1 text-inherit"
                        >
                          <CgProfile size={20} />
                          Profile
                        </div>
                      </li>
                      <li
                        role="tab"
                        class="flex text-center h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                        data-value="settings"
                      >
                        <div
                          onClick={setting}
                          class="z-20 flex justify-center items-center gap-1 text-inherit"
                        >
                          <GrAchievement size={20} />
                          Achievments
                        </div>
                      </li>
                      <li
                        role="tab"
                        class="flex  text-center h-full relative bg-transparent py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer"
                        data-value="settings"
                      >
                        <div
                          onClick={setting}
                          class="z-20 flex justify-center items-center gap-1 text-inherit"
                        >
                          <IoMdSettings size={20} />
                          Settings
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div class="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
              <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                <div class="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none mx-0 mt-0 mb-4 flex items-center justify-between gap-4">
                  <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                    About me
                  </h6>
                  <img src="" alt="" />
                </div>
                <div class="p-0">
                  <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                    Hey This is Bio.
                  </p>
                  <hr class="my-8 border-blue-gray-50" />
                  <ul class=" border flex flex-col gap-4 p-0">
                    <li class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                        mobile:
                      </p>
                      <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                        95083
                      </p>
                    </li>
                    <li class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                        email:
                      </p>
                      <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                        qwe
                      </p>
                    </li>
                    <li class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                        location:
                      </p>
                      <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                        sdaf
                      </p>
                    </li>
                    <li class="flex items-center gap-4">
                      <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold capitalize">
                        social:
                      </p>
                      <div class="flex items-center gap-4">
                        <i class="fa-brands fa-facebook text-blue-700">
                          <RiGithubLine />
                        </i>
                        <i class="fa-brands fa-twitter text-blue-400">
                          <FaLinkedinIn />
                        </i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Team members */}
              <div>
                <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-3">
                  Team Members
                </h6>
                <ul class="flex flex-col gap-6">
                  <div class="flex items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                      <img
                        src=""
                        alt="Image"
                        className="bg-blue-50 rounded-full h-14"
                      />
                      <div>
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 mb-1 font-semibold">
                          Name
                        </p>
                        <p class="block antialiased font-sans text-xs font-normal text-blue-gray-400">
                          Bio
                        </p>
                      </div>
                    </div>
                    <button
                      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      reply
                    </button>
                  </div>
                </ul>
              </div>
              <div onClick={hide}>
                <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-3">
                  Account Settings
                </h6>
                <div class="flex flex-col gap-12">
                  <div>
                    <p class="antialiased font-sans mb-4 block text-xs font-semibold text-blue-gray-500">
                      Message
                    </p>
                    <div class="flex flex-col gap-6">
                      <div class="inline-flex items-center">
                        <div class="relative inline-block w-8 h-4 cursor-pointer rounded-full">
                          <input
                            id="Email me when someone follows me"
                            type="checkbox"
                          />
                          <label
                            for="Email me when someone follows me"
                            class=""
                          ></label>
                        </div>
                        <label for="Email me when someone follows me">
                          Email me when someone follows me
                        </label>
                      </div>
                      <div class="inline-flex items-center">
                        <div class="relative inline-block w-8 h-4 cursor-pointer rounded-full">
                          <input
                            id="Email me when someone answers on my post"
                            type="checkbox"
                          />
                          <label for="Email me when someone answers on my post"></label>
                        </div>
                        <label for="Email me when someone answers on my post">
                          Email me when someone answers on my post
                        </label>
                      </div>
                      <div class="inline-flex items-center">
                        <div class="relative inline-block w-8 h-4 cursor-pointer rounded-full">
                          <input
                            id="Email me when someone mentions me"
                            type="checkbox"
                          />
                          <label for="Email me when someone mentions me"></label>
                        </div>
                        <label for="Email me when someone mentions me">
                          Email me when someone mentions me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p class="antialiased font-sans mb-4 block text-xs font-semibold text-blue-gray-500">
                      Project Updates
                    </p>
                    <div class="flex flex-col gap-6">
                      <div class="inline-flex items-center">
                        <div class="relative inline-block w-8 h-4 cursor-pointer rounded-full">
                          <input
                            id="New launches and projects"
                            type="checkbox"
                          />
                          <label for="New launches and projects"></label>
                        </div>
                        <label for="New launches and projects">
                          New launches and projects
                        </label>
                      </div>
                      <div class="inline-flex items-center">
                        <div class="relative inline-block w-8 h-4 cursor-pointer rounded-full">
                          <input id="Monthly product updates" type="checkbox" />
                          <label for="Monthly product updates"></label>
                        </div>
                        <label for="Monthly product updates">
                          Monthly project updates
                        </label>
                      </div>
                      <div class="inline-flex items-center">
                        <div class="relative inline-block w-8 h-4 cursor-pointer rounded-full">
                          <input id="Subscribe to newsletter" type="checkbox" />
                          <label for="Subscribe to newsletter"></label>
                        </div>
                        <label for="Subscribe to newsletter">
                          Subscribe to newsletter
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 pb-4">
              <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-2">
                Projects
              </h6>
              <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                Topic
              </p>
              <div class="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                <div class="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none">
                  <div class="relative bg-clip-border rounded-xl overflow-hidden bg-gray-900 text-white shadow-gray-900/20 shadow-lg mx-0 mt-0 mb-4 h-64 xl:h-40">
                    {/* Project image */}
                    <img src="" alt="" />
                  </div>
                  <div class="p-6 py-0 px-1">
                    <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                      Project #1
                    </p>
                    <h5 class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mt-1 mb-2">
                      Heading
                    </h5>
                    <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-500">
                      Sub Topic
                    </p>
                  </div>
                  <div class="p-6 mt-6 flex items-center justify-between py-0 px-1">
                    <a href="#/dashboard/profile">
                      <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]"
                        type="button"
                      >
                        view project
                      </button>
                    </a>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDash;
