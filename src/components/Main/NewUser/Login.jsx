import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import login from "../../../assets/img/login/login.png";

function Login() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-around flex-wrap h-screen lg:pb-24 items-center p-6 ">
        <div className="">
          <img src={login} alt="" />
        </div>
        <div className="flex flex-col gap-6 w-96 rounded-3xl p-6 sm:auto md:full sm:max-[400px]">
          <div className="flex flex-col gap-1">
            <h4 className="text-2xl font-bold text-center">
              Welcome Back
            </h4>
          </div>
          <div>
            
          </div>

          <div>
            <div className="flex flex-col gap-2">
              <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <BsGithub size={22} />
                Continue with GitHub
              </button>

              <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <FcGoogle size={23} />
                Continue with Google
              </button>
            </div>
          </div>
          <div className="flex w-full items-center gap-2 text-sm text-slate-600">
            <div className="h-px w-full bg-slate-200"></div>
            OR
            <div className="h-px w-full bg-slate-200"></div>
          </div>
          <form
            novalidate=""
            autocomplete="off"
            className="flex flex-col gap-6"
          >
            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root mui-57f8gj">
              {/* <label>Email</label>   */}
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
            <div className="flex justify-between">
              <label>
                <input data-indeterminate="false" type="checkbox" />
                <span className="pl-2">Remember me </span>
              </label>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/forgot"
              >
                <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Forgot password
                </span>
              </Link>
            </div>
            <button
              className="border rounded-xl p-1 bg-blue-400 "
              type="submit"
            >
              Sign In
            </button>
            <div className="flex justify-center items-center flex-wrap gap-2">
              <p className="">New on our Platform ?</p>
              <Link
                className="group text-blue-400 transition-all duration-100 ease-in-out"
                to="/signup"
              >
                <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
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
