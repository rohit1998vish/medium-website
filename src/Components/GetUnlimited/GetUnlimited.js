import React from "react";

const GetUnlimited = () => {
  return (
    <div className='bg-zinc-200  h-screen flex justify-center items-center rounded-full'>
      <div className='bg-white h-96 space-y-3 w-[350px] flex justify-center items-center rounded-full'>
      <div className="text-center">
        <h2 className="mb-5 text-xl hover:font-bold">Join Medium</h2>
        <div>
          <p className="mb-2">Email Id</p>
          <input type="text" placeholder="Emal" required />
        </div>
        <div className="">
          <p className="mb-2">Password</p>
          <input type="password" placeholder="Password" />
        </div>
        <div className="bg-blue-500 text-center text-white rounded-full mt-5 hover:font-bold">
          <button className="hover:text-black">Sing in</button>
        </div>
      </div>   
      </div>

    </div>
  );
};

export default GetUnlimited;
