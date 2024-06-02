import React from "react";
import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="pt-4 h-screen max-w-6xl mx-auto">
      <div class="flex justify-center items-center lg:pb-24  p-6 ">
        <div class="flex flex-col gap-6 is-full rounded-3xl w-96 shadow-xl p-6 ">
          <div class="flex flex-col gap-1">
            <h4 class=" text-xl font-bold ">
              Adventure starts here 🚀
            </h4>
          </div>
          <form novalidate="" autocomplete="off" class="flex flex-col gap-6">
            <div>
              <label>Username</label>
              <div>
                <input
                  aria-invalid="false"
                  id=":r3:"
                  placeholder="Enter your username"
                  class="w-full p-1 rounded-lg text-lg border"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label>Email</label>
              <div>
                <input
                  aria-invalid="false"
                  id=":r4:"
                  placeholder="Enter your email"
                  class="w-full p-1 rounded-lg text-lg border"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input
                  aria-invalid="false"
                  id=":r5:"
                  placeholder="············"
                  class="w-full p-1 rounded-lg text-lg border"
                  type="password"
                />
              </div>
            </div>
            <label>
              <input data-indeterminate="false" type="checkbox" />
              <span className="pl-2">I agree to </span>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/privacy"
              >
                <span class="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                 Privacy &amp; Policy
                </span>
              </Link>
            </label>
            <button class="border rounded-xl p-1 bg-blue-400 w-48 mx-auto" type="submit">
              Sign Up
            </button>
            <div class="flex justify-center items-center flex-wrap gap-2">
              <p class="">Already have an account?</p>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/login"
              >
                <span class="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Sign in instead
                </span>
              </Link>
            </div>
            <div class=" border-b-2" role="separator">
              <span class=" flex items-center justify-center w-full">or</span>
            </div>
            <div class="flex justify-center items-center gap-1.5">
              <button type="button">
                <BsGoogle />
              </button>
              <span class="MuiTouchRipple-root mui-w0pj6f">|</span>
              <button type="button">
                <FaGithub />
                <span class="MuiTouchRipple-root mui-w0pj6f"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
