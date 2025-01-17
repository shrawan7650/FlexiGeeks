import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import signin from "../../../assets/img/login/signin.png";

function Signup() {
  return (
    <div   className=" max-w-6xl mx-auto">
      <div  className="flex justify-around flex-wrap h-screen lg:pb-24 items-center p-6">
        <div  className="flex flex-col gap-6 rounded-3xl w-96 shadow-sm p-6 ">
          <div  className="flex flex-col gap-1">
            <h4  className=" text-xl font-bold ">Adventure starts here 🚀</h4>
          </div>
          <h2>Please sign-up to your account and start the adventure</h2>
          <form novalidate="" autocomplete="off"  className="flex flex-col gap-5">
            <div  className="flex justify-between items-center gap-1.5">
              <button
                type="button"
                  className="border rounded-lg w-1/2 flex justify-center items-center p-2"
              >
                <FcGoogle size={30} />
              </button>
              <button
                type="button"
                  className="border rounded-lg w-1/2 flex justify-center items-center p-2"
              >
                <FaGithub size={30} />
                <span  className="MuiTouchRipple-root mui-w0pj6f"></span>
              </button>
            </div>
            <div  className="relative">
              <div  className="absolute inset-0 flex items-center">
                <div  className="w-full border-t border-gray-300"></div>
              </div>
              <div  className="relative flex justify-center text-sm">
                <span  className="bg-white dark:bg-gray-700 px-2 text-gray-500 dark:text-white">
                  OR
                </span>
              </div>
            </div>
            <div>
              {/* <label>Username</label> */}
              <div>
                <input
                  aria-invalid="false"
                  id=":r3:"
                  placeholder="Enter your username"
                   className="w-full p-1 rounded-lg text-lg border"
                  type="text"
                />
              </div>
            </div>
            <div>
              {/* <label>Email</label> */}
              <div>
                <input
                  aria-invalid="false"
                  id=":r4:"
                  placeholder="Enter your email"
                   className="w-full p-1 rounded-lg text-lg border"
                  type="text"
                />
              </div>
            </div>
            <div>
              {/* <label>Password</label> */}
              <div>
                <input
                  aria-invalid="false"
                  id=":r5:"
                  placeholder="············"
                   className="w-full p-1 rounded-lg text-lg border"
                  type="password"
                />
              </div>
            </div>
            <label>
              <input data-indeterminate="false" type="checkbox" />
              <span   className="pl-2">I agree to </span>
              <Link
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/privacy"
              >
                <span  className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Privacy &amp; Policy
                </span>
              </Link>
            </label>
            <button  className="border rounded-xl p-1 bg-blue-400" type="submit">
              Sign Up
            </button>
            <div  className="flex justify-center items-center flex-wrap gap-2">
              <p  className="">Already have an account?</p>
              <Link
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/login"
              >
                <span  className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Sign in instead
                </span>
              </Link>
            </div>
          </form>
        </div>
        <img src={signin} alt=""   className=""/>
      </div>
    </div>
  );
}

export default Signup;
