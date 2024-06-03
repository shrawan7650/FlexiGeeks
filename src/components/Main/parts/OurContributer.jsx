import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

function OurContributer() {
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Development team
          </p>
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            The talented people behind this Flexigeeks
          </h1>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src=""
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Mayank</p>
                <p>Founder</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="dark:text-gray-50 hover:dark:text-violet-600"
                >
                  <MdEmail />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="dark:text-gray-50 hover:dark:text-violet-600"
                >
                  <BsTwitterX />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="dark:text-gray-50 hover:dark:text-violet-600"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="dark:text-gray-50 hover:dark:text-violet-600"
                >
                  <LuGithub />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                src=""
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">Sharvan</p>
                <p>Backend</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="dark:text-gray-50 hover:dark:text-violet-600"
                >
                  <MdEmail />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="dark:text-gray-50 hover:dark:text-violet-600"
                >
                  <BsTwitterX />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="dark:text-gray-50 hover:dark:text-violet-600"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="dark:text-gray-50 hover:dark:text-violet-600"
                >
                  <LuGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurContributer;
