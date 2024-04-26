import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="bg-zinc-200  h-screen flex justify-center items-center rounded-full">
      {/* Form Page */}
      <div className="bg-white h-96 space-y-3 w-[350px] flex justify-center items-center rounded-lg"> 
        <form className="space-y-1" action="">
          <div>
            <p className="font-semibold text-2xl tracking-wide text-center">
              LogIn
            </p>
          </div>
          <div>
            <p className="text-zinc-600 font-semibold">Email :</p>
            <input
              className="outline-one h-10 px-5 border border-sm"
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <p className="text-zinc-600 font-semibold">Password :</p>
            <input
              className="outlin-one h-10 px-5 border border-sm"
              type="password"
              placeholder="Please Enter Password"
            />
          </div>
          <div className="flex gap-5 mt-1">
            <input type="checkbox" />
            <p>Remember me ?</p>
          </div>
          <div className="mr-1">
            <button className="bg-red-400 h-10 rounded-full hover:bg-blue-600 duration-300 w-full text-white font-semibold">
              LOGIN
            </button>
            <p className="text-end hover:text-blue-600">Forgot Password</p>
          </div>
          <p className="flex justify-center font-bold">OR</p>
          <div className="flex flex-row justify-center gap-10 text-3xl">
            <FaFacebook className="rounded-full text-blue-600" />
            <FaGoogle className="rounded-full text-red-600" />
            <FaLinkedin className="rounded-full text-blue-600" />
          </div>
          <div>
            <p className="text-zinc-500 p-2">
              Need an Account
              <span className="bg-gray-300 hover:bg-red-900 hover:text-white hover:rounded-full text-black">
                <Link to="/signUp">SignUp</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
