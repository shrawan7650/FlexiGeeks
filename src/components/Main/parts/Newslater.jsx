import React from "react";

function Newslater() {
  return (
    <div>
      <div class="mx-auto  max-w-6xl lg:-mt-1 lg:-mb-10 pb-7 sm:mt-56 lg:px-8">
        <div class="relative isolate overflow-hidden px-6 py-2 rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Keep Updated
          </h2>

          <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-800">
            Stay updated with the latest tech trends, tips, and community
            highlights by subscribing to our newsletter. Join over 400,000
            people worldwide and get exclusive insights and special offers
            delivered straight to your inbox. Sign up now and never miss an
            update!
          </p>

          <form class="mx-auto mt-10 flex max-w-md gap-x-4">
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="min-w-0 flex-auto rounded-md border-0 bg-blue-50 px-3.5 py-2 text-blue-200 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />

            <button
              type="submit"
              class="flex-none rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Notify me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newslater;
