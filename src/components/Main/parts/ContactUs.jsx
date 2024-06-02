import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import twitter from "../../../assets/logo/twitter.png";

export default function ContactUs() {
  return (
    <div className="pt-32 max-w-6xl mx-auto">
      {/* <section className="body-font lg:rounded-3xl lg:mt-6 relative bg-blue-50 max-w-6xl mx-auto text-gray-400">
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
            <div className="-m-2 flex flex-wrap"> */}
      {/* <!-- form --> */}
      {/* <div className="w-1/2 p-2">
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
              </div> */}

      {/* <!-- footer --> */}
      {/* <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
                <p className="my-5 leading-normal">FlexiGeeks</p> */}

      {/* icons */}
      {/* <div className="inline-flex items-center hover:cursor-pointer">
                  <FaGithubSquare size={25} className="mr-3 text-black"/>
                  <FaInstagram size={25} className="mr-3 text-orange-600"/> */}
      {/* <twitter size={25} className="mr-3 text-blue-400"/> */}
      {/* <img src={twitter} alt=""  width={21}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        id="ContactUs"
        class="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-10 mb-10 rounded-lg mx-4 "
      >
        <div class="container flex flex-col min-h-screen px-4 py-4 mx-auto">
          <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div class="text-black lg:w-1/2 lg:mx-6">
              <h1 class="text-2xl font-semibold capitalize lg:text-3xl">
                Just want to chat ?<br />
                Get in touch 🚀
              </h1>
              <p class="max-w-xl mt-6">
                As the leading career community for engineers worldwide, we are
                committed to offering exceptional support. Whether you need
                career advancement guidance, profile assistance, or have
                suggestions to share, we are here for you.
              </p>
              <div class="mt-6 md:mt-8">
                <h3 class="text-blue-500 ">Follow us</h3>
                <div class="flex mt-4 -mx-1.5 ">
                  <a
                    class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      class="w-10 h-10 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z"></path>
                    </svg>
                  </a>
                  <a
                    class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    class="mx-1.5 text-white transition-colors duration-300 transform hover:text-blue-500"
                    href="#"
                  >
                    <svg
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-8 lg:w-1/2 lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <div
                  role="alert"
                  class="fade rounded-0 p-4 mb-10 border-r-4 co_alert hidden alert show"
                ></div>
                <form class="mt-4">
                  <div class="flex-1">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      required=""
                      name="name"
                      value=""
                    />
                  </div>
                  <div class="flex-1 mt-6">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      required=""
                      name="email"
                      value=""
                    />
                  </div>
                  <div class="flex-1 mt-6">
                    <input
                      type="number"
                      placeholder="Enter Number"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark-text-gray-300 dark-border-gray-600 focus-border-blue-400 focus-ring-blue-300 focus-ring-opacity-40 dark-focus-border-blue-300 focus-outline-none focus-ring"
                      required=""
                      name="phoneNumber"
                      value=""
                    />
                  </div>
                  <div class="w-full mt-6">
                    <textarea
                      name="message"
                      class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark-text-gray-300 dark-border-gray-600 focus-border-blue-400 focus-ring-blue-300 focus-ring-opacity-40 dark-focus-border-blue-300 focus-outline-none focus-ring"
                      placeholder="Add timeline and type of project, feel free to explain"
                      required=""
                    ></textarea>
                  </div>
                  <button
                    class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover-bg-blue-500 focus-outline-none focus-ring focus-ring-blue-400 focus-ring-opacity-50"
                    type="submit"
                  >
                    Get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
