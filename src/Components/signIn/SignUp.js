import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-zinc-200  h-screen flex justify-center items-center">
      {/* Create New Account */}
      <div className="bg-white h-96 space-y-3 w-[350px] flex justify-center items-center rounded-lg">
        <form action="">
          <div>
            <p className="font-semibold text-2xl tracking-wide text-center">
              Sign up with email
            </p>
          </div>
          <div className="text-center p-5 mx-5">
            <p>Enter your email address to create an account</p>
          </div>
          <div>
            <p className="text-zinc-600 font-semibold mx-14 pb-2 text-center">
              Enter Email Id
            </p>
            <input
              className="outline-one h-10 px-5 border border-sm mx-14 p-5"
              type="text"
              placeholder="Please Enter Email"
              required
            />
          </div>
          <div className="mr-1 p-2">
            <Link to="/accountOpen">
              <button className="bg-red-400 h-10 rounded-full hover:bg-blue-600 duration-300 w-full text-white font-semibold">
                Continue
              </button>
            </Link>
          </div>
          <div className="text-center hover:font-extrabold ">
            <button className="underline underline-offset-8 text-blue-600">
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
