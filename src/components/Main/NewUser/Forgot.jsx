import React from "react";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div   className="max-w-6xl h-screen  mx-auto">
      <div  className="flex justify-center h-screen lg:pb-24 items-center p-6 ">
        <div  className="flex flex-col gap-6 w-96 rounded-3xl p-6 shadow-xl is-full sm:auto md:full sm:max-[400px]">
          <div  className="flex flex-col gap-1">
            <h4  className="text-lg">Forgot Password</h4>
          </div>
          <div>
            <h2>
              Enter your email and we'll send you instructions to reset your
              password
            </h2>
          </div>
          <form novalidate="" autocomplete="off"  className="flex flex-col gap-6">
            <div>
              <label>Email</label>
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

            <div   className="flex justify-between">
              <Link
                  className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/login"
              >
                <span  className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Back to login
                </span>
              </Link>
            </div>
            <button  className="border rounded-xl p-1 bg-blue-400" type="submit">
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
