import React from "react";
import Sider from "../../../assets/img/HomeSider.png";

export default function HeaderSection() {
  return (
    <div className="bg-blue-50">
      <div className="overflow-hidden max-w-6xl mx-auto">
        <section className="mt-16 max-w-6xl mx-auto overflow-hidden">
          <section className="text-gray-600  lg:pb-4 body-font">
            <div className="container mx-auto flex px-4 py-20 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-black">
                <h1 className="title-font sm:text-4xl lg:text-4xl  mb-4 font-semibold text-blue-800">
                  The Ultimate Hub for Aspiring Engineers
                </h1>
                <p className="mb-8 leading-relaxed">
                  At Flexigeeks, we recognize the critical need to keep pace
                  with the rapidly changing technology landscape. That’s why we
                  meticulously curate and deliver an extensive range of study
                  materials on diverse tech subjects, from programming languages
                  and web development to data science and artificial
                  intelligence. Our primary focus is on the educational success
                  of our users, guiding them towards achieving their career
                  aspirations. We offer the right resources and expert advice to
                  help you land your dream job and excel in the tech industry.
                </p>
                <div class="flex justify-center w-full">
                  <a href="/getstarted">
                    <button class=" inline-flex text-blue-800 bg-blue-100 border- shadow-sm shadow-blue-500 border-blue-600 py-2 px-6 focus:outline-none hover:-translate-y-1 hover:scale-11 transition ease-in-out delay-200 hover:bg-blue-300 rounded lg:text-lg">
                      Get Started
                    </button>
                  </a>
                </div>
              </div>
              <div class=" relative lg:max-w-lg lg:ml-3 md:w-1/2 w-5/6">
                <img src={Sider} alt="Sider" />
              </div>
            </div>
          </section>
        </section>
      </div>
      </div>
  );
}
