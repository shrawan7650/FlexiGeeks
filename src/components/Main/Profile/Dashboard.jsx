import React from "react";
import ProfileDash from "./components/ProfileDash";

import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { GrAchievement } from "react-icons/gr";

function Dashboard() {
  function setting(){
    
  }
  return (
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
            
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
