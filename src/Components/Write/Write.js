import React from "react";
import part from "../Assests/partner.jpg";
import { Link } from "react-router-dom";

const Write = () => {
  return (
    <div className=" bg-[#26be3f] border-t border-b border-indigo-950 ">
      <div className="p-8 text-4xl flex-wrap items-center">
        <div className="grid-flow-col-2  ">
          <h1 className="text-center">Medium Partner Program</h1>

          <p className=" py-5 text-[16px] text-justify">
            The exact algorithm Medium uses to distribute earnings isn't
            publicly disclosed, but it generally rewards writers based on the
            level of engagement their articles receive. More engaging articles
            typically result in higher earnings.
          </p>

          <div className="text-xl p-4 text-center">
            <button className="bg-black text-white text-[22px] rounded-full p-2 m-2 hover:bg-yellow-500 ">
            <Link to="/getunlimited" className="hover:bg-yellow-500 hover:text-black">Get unlimited access</Link> 
            </button>
          </div>
        </div>
        <div className="">
          <img className="h-auto w-full rounded-full" src={part} alt="" />
        </div>
      </div>
      
    </div>

    
  );
};

export default Write;
