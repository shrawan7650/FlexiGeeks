import React from "react";
import memberImg from "../../../assets/img/memberimage.png";
import { RiContactsFill } from "react-icons/ri";

function BecomeMember() {
  return (
    <div>
      <div class="max-w-6xl p-5 pt-28 mx-auto">
        <div class="w-full p-5 rounded-3xl bg-blue-50">
            <div className="text-center mt-5 -mb-16">
              <span className=" bg-red-200 items-center rounded-3xl p-3 inline-block">
                Questions? Feedback? Need Career Advice?
              </span>
              <h1 className="m-6">
                Just want to member ? As the top career community for engineers
                worldwide, we are obsessed with providing exceptional support.
                Whether you need guidance advancing your career, help with your
                profile, or want to share suggestions, we have got your back.
              </h1>
            </div>
          <div class=" md:col-span-4 text-center flex items-center justify-center p-5 text-black">
          </div>
          <form class="md:col-span-8 p-10">
            <div>
              <div>
                <div className=" w-11/12">
                  <div class="flex flex-wrap ">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      ></label>
                      <div>
                        <input
                          class="appearance-none block w-full text-gray-700 border-b-2 border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-wh focus:border-blue-800 "
                          id="grid-name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap ">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      ></label>
                      <input
                        class="appearance-none block w-full text-gray-700 border-b-2 border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-wh focus:border-blue-800"
                        id="grid-email"
                        type="email"
                        placeholder="Email Id"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap ">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      ></label>
                      <input
                        class="appearance-none block w-full text-gray-700 border-b-2 border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-wh focus:border-blue-800"
                        id="grid-college"
                        type="text"
                        placeholder="Collage (with city)"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      ></label>
                      <input
                        class="appearance-none block w-full text-gray-700 border-b-2 border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-wh focus:border-blue-800"
                        id="grid-year"
                        type="number"
                        placeholder="Expected graduation year"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap ">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      ></label>
                      <input
                        class="appearance-none block w-full text-gray-700 border-b-2 border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-wh focus:border-blue-800"
                        id="grid-email"
                        type="number"
                        placeholder="+91 95××××××××( Whatsapp )"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-between w-10/12 mx-auto items-center">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      ></label>
                      <textarea
                        rows="8"
                        placeholder="Why do you wants to become member of flexigeeks ?"
                        required
                        class="appearance-none border block w-full text-gray-700 border-b-2 border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-wh focus:border-blue-800"
                      ></textarea>
                    </div>
                  </div>
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      ></label>
                      <textarea
                        rows="8"
                        placeholder="Any Comment or Questions? (Not Mandatory)"
                        class="appearance-none border block w-full text-gray-700 border-b-2 border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-wh focus:border-blue-800"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-center w-full px-3">
                <button
                  class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BecomeMember;
