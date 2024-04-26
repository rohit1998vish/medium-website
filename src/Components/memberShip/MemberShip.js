import React from "react";
import pic from "../Assests/stories2.jpg";
import drmaya from "../Assests/Dr.mayaPatel.jpg";
import sci from "../Assests/sci.jpg";
import { Link } from "react-router-dom";



const MemberShip = () => {
  return (
    <div className=""> 
      <div className=" gap-4 border-solid border-2 border-black"> 
        <div className=" p-2 m-5 text-center text-4xl  ">
          <h1 className="text-4xl font-bold">Support human stories </h1>

          <span className="sm:text-justify p-2 text-justify flex justify-between text-[14px]">
            "In the bustling journey of life, it's easy to get caught up in the
            daily grind and forget to truly relish the beauty and joy that
            surrounds us. Human enjoyment isn't just about fleeting moments of
            pleasure; it's about embracing a lifestyle that nourishes our souls,
            uplifts our spirits, and enriches our experiences. Here, we delve
            into the essence of living life to the fullest, exploring ways to
            savor every moment and find fulfillment in the journey. Prioritize
            Relationships: Human connection is essential for a fulfilling life.
            Nurture your relationships with friends, family, and loved ones,
            investing time and effort into building meaningful connections.
            Share experiences, laughter, and tears with those who matter most,
            knowing that these bonds enrich the fabric of your existence and
            bring immeasurable joy."
          </span>
          <button className=" bg-black px-5 text-white text-lg rounded-lg hover:bg-yellow-500">
            <Link to="/getunlimited">Get Started</Link>
          </button>

          <div className="flex justify-center py-5 my-5  ">
          <div className="md:w-[50%] ">
            <img className="h-auto w-full rounded-lg" src={pic} alt="img" />
          </div>
        </div>
      </div>

        </div>
       

      <div className="grid grid-cols-2 gap-4 border-solid border-2 border-black">
        <div className=" h-12 w-12  p-10 text-4xl ">
          <h1 className="text-2xl mt-[100px]">Why membership?</h1>
        </div>
        <div className="">
          <h2 className="text-2xl p-2 ">Reward writers</h2>
          <p className="p-2 mr-8 text-justify flex justify-between text-[14px]">
            Cultivate long-term relationships with writers by offering them
            consistent work and opportunities for ongoing collaboration.
            Building trust and rapport can lead to mutually beneficial
            partnerships.
          </p>

          <h2 className="p-2 text-2xl">Unlock every story</h2>
          <p className="p-2 mr-8 text-justify flex justify-between text-[14px]">
            If you're talking about unleashing the potential of stories, it
            could mean investing in marketing and promotion efforts to reach a
            wider audience. This could involve utilizing social media,
            collaborating with influencers, or participating in literary events
            and festivals to increase visibility and engagement with the
            stories.
          </p>

          <h2 className="p-2 text-2xl">Enhance your reading experience</h2>
          <p className="p-2 mr-8 text-justify flex justify-between text-[14px]">
            Explore books from various genres, authors, and cultures to broaden
            your perspective and gain new insights into the world around you.
          </p>
        </div>
      </div>

      {/* section2 */} 

      <div className="grid grid-cols-2 gap-4 border-solid border-2 border-black">
        <div className=" p-10 text-4xl">
          <h1 className="text-2xl mt-[100px]">What members are saying</h1>
        </div>
        <div className="">
          <div className="flex ">
            <img
              className="h-[15%] w-[15%] inline-block rounded-lg text"
              src={drmaya}
              alt="dr"
            />
            <p className="p-4 mr-8 text-justify flex justify-between text-[14px]">
              Dr. Maya Patel is a distinguished astrophysicist known for her
              groundbreaking research in the field of exoplanetary science. With
              a Ph.D. from Cambridge University and postdoctoral experience at
              NASA's Jet Propulsion Laboratory, Dr. Patel has spent over two
              decades unraveling the mysteries of distant worlds beyond our
              solar system.
            </p>
          </div>

          <div className="flex ">
            <img
              className="h-[15%] w-[15%] inline-block rounded-lg"
              src={sci}
              alt="dr"
            />
            <p className="p-4 mr-4 text-justify flex justify-between text-[14px]">
              If you could mean investing in marketing and promotion efforts to
              reach a wider audience. This could involve utilizing social media,
              collaborating with influencers, or participating in literary
              events and festivals to increase visibility and engagement with
              the stories.
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
