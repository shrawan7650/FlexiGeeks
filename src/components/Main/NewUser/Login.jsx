import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="pt-10 max-w-6xl mx-auto">
      <div class="flex justify-center lg:pb-24 items-center p-6 ">
        <div class="flex flex-col gap-6 w-96 rounded-3xl p-6 shadow-xl is-full sm:auto md:full sm:max-[400px]">
          <div class="flex flex-col gap-1">
            <h4 class="text-lg">Welcome to FlexiGeeks</h4>
          </div>
          <div>
            <h2>Please sign-in to your account and start the adventure</h2>
          </div>
          <form novalidate="" autocomplete="off" class="flex flex-col gap-6">
            <div class="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-57f8gj">
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
            <div className="flex justify-between">
              <label>
                <input data-indeterminate="false" type="checkbox" />
                <span className="pl-2">Remember me </span>
              </label>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/forgot"
              >
                <span class="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Forgot password
                </span>
              </Link>
            </div>
            <button
              class="border rounded-xl p-1 bg-blue-400 "
              type="submit"
            >
              Login
            </button>
            <div class="flex justify-center items-center flex-wrap gap-2">
              <p class="">New on our Platform ?</p>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/signup"
              >
                <span class="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Create an account
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
