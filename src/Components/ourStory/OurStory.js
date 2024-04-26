import React from "react";
import marathon from "../Assests/marathon2.jpg";
import marathon1 from "../Assests/marathon.jpg";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="h-full  bg-[#d1d1d1] text-white-50 rounded-full">
      <hr />

      <div className="">
        <h1 className="p-5 text-white font-bold text-center text-4xl hover:text-black">
          The Marathon of Dreams
        </h1>
        <div className="flex justify-center p-10">
          <img className="h-50 w-50 rounded-lg" src={marathon} alt="" />
        </div>
        <div>
          <p className="p-5 mx-5 text-justify">
            In the vibrant city of Veridian, nestled between towering
            skyscrapers and bustling streets, lived a community of active
            individuals who thrived on pushing their limits. Each year, they
            held a unique event called the Marathon of Dreams, where
            participants embarked on a journey through the landscapes of their
            subconscious minds.
          </p>
        </div>
        <div className="flex justify-center p-10">
          <img className="h-50 w-50 rounded-lg" src={marathon1} alt="" />
        </div>
        <div>
          <p className="p-5 mx-5 text-justify">
            The event took place in the twilight hours, when the veil between
            waking and dreaming was thinnest. As the clock struck midnight, the
            city streets transformed into a surreal dreamscape, illuminated by
            the glow of moonlight and starlight. Among the eager participants
            was Maya, a passionate runner with a heart full of determination.
            She had trained tirelessly for this moment, ready to explore the
            depths of her imagination. As she joined the starting line, a sense
            of anticipation coursed through her veins. With a resounding cheer,
            the marathon began, and Maya set off into the unknown. The streets
            twisted and turned, morphing into a kaleidoscope of colors and
            shapes. She raced past towering mountains of candy floss and rivers
            of liquid silver, her feet barely touching the ground. Along the
            way, Maya encountered fellow dreamers—a graceful dancer pirouetting
            on a moonbeam, a wise old owl offering words of encouragement, and a
            playful troupe of fireflies lighting up the night sky. Each
            encounter fueled her spirit, propelling her forward with renewed
            vigor. Despite the challenges she faced—a labyrinth of mirrors
            reflecting her doubts, a storm of doubt threatening to extinguish
            her resolve—Maya pressed on, fueled by her unwavering determination.
            As the finish line came into view, Maya felt a surge of
            exhilaration. With one final burst of energy, she crossed the
            threshold, her heart pounding with triumph. She had not only
            completed the Marathon of Dreams but had also discovered the
            boundless potential within her own mind. As dawn broke over the
            horizon, Maya emerged from the dream world, her body tingling with
            the echoes of her adventure. Though the marathon had ended, its
            lessons would stay with her forever—a reminder that with courage and
            perseverance, she could conquer any obstacle that stood in her way.
            And so, with a sense of fulfillment and gratitude, Maya returned to
            the waking world, ready to tackle whatever challenges lay ahead,
            knowing that within her, the spirit of the Marathon of Dreams would
            always reside.
          </p>
        </div>
      </div>

      <div className=" bg-[#2699fb] text-white-50">
        <p className="p-5 text-white text-6xl text-center hover:text-black">
          Fuel great thinking. 
        </p>
        <p className=" text-white text-[15px] text-center hover:text-black">
          Become a Medium member to enjoy unlimited access and <br /> directly
          support the writes you read most.
        </p>
        <center className="p-5 ">
          <button className=" bg-white text-black rounded-lg  px-5 hover:bg-yellow-500 ">
          <Link to="/getunlimited" className="hover:bg-yellow-500 hover:text-white">Get unlimited access</Link>   
          </button>
        </center>
      </div>
    </div> 
  );
};

export default OurStory; 
