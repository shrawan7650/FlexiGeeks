import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import twitter from '../../../assets/logo/twitter.png'

export default function ContactUs() {
  return (
    <div>
      <section className="body-font lg:rounded-3xl lg:mt-6 relative bg-blue-50 max-w-6xl mx-auto text-gray-400">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-black sm:text-3xl">
              Just want to chat ?
            </h1>
            <h1 className=" mb-4 text-lg font-medium text-black">
              Get in touch 🚀
            </h1>

            <p className="mx-auto text-base leading-relaxed lg:w-2/3 text-black">
              As the leading career community for engineers worldwide, we are
              committed to offering exceptional support. Whether you need career
              advancement guidance, profile assistance, or have suggestions to
              share, we are here for you.
            </p>
          </div>

          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              {/* <!-- form --> */}
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="peer w-full rounded border border-gray-700 bg-blue-50 bg-opacity-40 py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-blue-100 focus:ring-2 focus:ring-indigo-900"
                    placeholder="Name"
                  />
                  <label
                    for="name"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Name
                  </label>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="peer w-full rounded border border-gray-700 bg-blue-50 bg-opacity-40 py-1 px-3 text-base leading-8 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-blue-100 focus:ring-2 focus:ring-indigo-900"
                    placeholder="Email"
                  />
                  <label
                    for="email"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mt-4 w-full p-2">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    className="peer h-32 w-full resize-none rounded border border-gray-700 bg-blue-50 bg-opacity-40 py-1 px-3 text-base leading-6 text-black placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-blue-100 focus:ring-2 focus:ring-indigo-900"
                    placeholder="Message"
                  ></textarea>
                  <label
                    for="message"
                    className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                  >
                    Message
                  </label>
                </div>
              </div>
              <div className="w-full p-2">
                <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                  Submit
                </button>
              </div>

              {/* <!-- footer --> */}
              <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
                <p className="my-5 leading-normal">FlexiGeeks</p>

                {/* icons */}
                <div className="inline-flex items-center hover:cursor-pointer">
                  <FaGithubSquare size={25} className="mr-3 text-black"/>
                  <FaInstagram size={25} className="mr-3 text-orange-600"/>
                  {/* <twitter size={25} className="mr-3 text-blue-400"/> */}
                  <img src={twitter} alt=""  width={21}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
