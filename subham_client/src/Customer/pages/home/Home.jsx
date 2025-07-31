// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import News from "../../newsLetter/News";
import Instapic from "../../Dashbord/Instapic";
import Testimonial from "../../Dashbord/Testimonial";
import Event from "../../Dashbord/Event";
import Smabout from "../../Dashbord/Smabout";
import Hero from "../../Dashbord/Hero";
import Smblogs from "../../Dashbord/Smblogs";
import { Helmet } from "react-helmet-async";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>India to Sri Lanka Ferry Service | Sail Subham Tours</title>
        <meta
          name="description"
          content="Experience the easiest India–Sri Lanka travel with Sail Subham’s ferry service. Affordable packages, hotel stay, transport & temple tours – book now!
"
        />
        <meta
          name="keywords"
          content="India to Sri Lanka ferry, Ferry service to Sri Lanka, Nagapattinam to Jaffna ferry, Sri Lanka tour packages, Sri Lanka ferry booking, Budget Sri Lanka travel, Ferry from India to Sri Lanka
"
        />
      </Helmet>
      <div className="">
        <Hero />
        <Smabout />
        <Event />
        {/* <Testimonial/> */}
        <Instapic />
        {/* <Smblogs /> */}
        <FerryService />
      </div>
    </div>
  );
};

export default Home;

import Ferrey from "../../../assets/subhamferry.png";
import { Link } from "react-router";

export const FerryService = () => {
  return (
    <div className="max-w-[100%] mx-auto">
      {/* Hero Section */}
      <div className="relative  py-10 px-4 sm:px-6 lg:px-8 overflow-hidden mb-12  ">
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-extrabold bg-gradient-to-l from-[#bb1900] via-[#fd6f01] to-[#ffb000] mb-4 text-transparent bg-clip-text ">
            India to Sri Lanka Ferry
          </h1>
          <p className="text-lg md:text-2xl text-primary">
            Experience seamless travel between nations
          </p>
          
        </div>
      </div>

      {/* Content Section */}
      <section className="flex flex-col lg:flex-row gap-8 px-4 lg:px-10 sm:px-6 mb-16 lg:mx-28 mx-10">
        <div className="lg:w-[50%] w-full !h-[100%] ">
          <img
            src={Ferrey}
            alt="Subham Ferry "
            className="w-full h-full  rounded-xl shadow-lg object-cover"
          />
        </div>
        <div className="lg:w-[50%] w-full  ">
          <div className="flex flex-col">
            <h1 className="text-xl lg:text-3xl font-bold lg:text-left text-center  text-gray-800 mb-6">
            India to Sri Lanka Ferry – Book Now with Subham Ferry
          </h1>

          <p className="text-lg  text-gray-600 mb-6 text-justify">
            Looking to travel by sea from India to Sri Lanka? Subham Ferry makes
            it possible with a reliable, scenic, and affordable ferry to Sri
            Lanka from India—perfect for both tourists and locals looking for a
            unique travel experience.
          </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <p className="text-amber-700 font-medium">
              Currently operating 5 days a week between Nagapattinam and
              Kankesanthurai
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 mb-16  lg:mx-28 mx-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 lg:mb-12 mb-4 text-center">
          Our Journey So Far
        </h2>

        <div className="mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-amber-200 transform -translate-y-1/2"></div>

            {/* Timeline items - horizontal on desktop, vertical on mobile */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {/* Item 1 */}
              <div className="relative ">

                {/* Content */}
                <div className="mt-6 md:mt-0  text-center md:text-right md:pr-8">
                  <time className="text-lg font-bold text-amber-600 block text-center">
                    October 14, 2023
                  </time>
                  <div className="mt-2 bg-white p-5 lg:h-[180px] h-fit rounded-lg shadow-sm border border-gray-100">
                    <p className="text-gray-700 text-justify">
                      The first vessel, HSC Cheriyapani, began operations on the
                      Nagapattinam (India) to Kankesanthurai (Sri Lanka) route.
                      This marked the revival of the ferry link after nearly
                      four decades.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                {/* Content */}
                <div className="mt-6 md:mt-0 text-center">
                  <time className="text-lg font-bold text-amber-600 block">
                    August 16, 2024
                  </time>
                  <div className="mt-2 bg-white p-5 text-justify rounded-lg h-fit lg:h-[180px] shadow-sm border border-gray-100">
                    <p className="text-gray-700">
                      Subham Group introduced Sivaganga, a modern ferry with 150
                      passenger capacity, operating 5 days a week between
                      Nagapattinam and Kankesanthurai.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative">

                <div className="mt-6 md:mt-0 text-center md:text-left md:pl-8">
                  <time className="text-lg font-bold text-amber-600 block text-center">
                    May 2025
                  </time>
                  <div className="mt-2 bg-white p-5 lg:h-[180px] h-fit rounded-lg shadow-sm border border-gray-100">
                    <p className="text-gray-700 text-justify">
                      Recognizing the surge in demand, Subham Group has now
                      embarked on acquiring a second superfast vessel capable of
                      accommodating 250 passengers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 mb-16 lg:mx-28 mx-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Why Choose Subham Ferry?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-amber-500">
            <div className="text-amber-500 mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Direct Route</h3>
            <p className="text-gray-600">
              Direct ferry from India to Sri Lanka with no unnecessary stops
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-amber-500">
            <div className="text-amber-500 mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Simple online booking system with instant confirmation
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-amber-500">
            <div className="text-amber-500 mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Expert Support</h3>
            <p className="text-gray-600">
              Experienced crew and immigration assistance onboard
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-t-4 border-amber-500">
            <div className="text-amber-500 mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">Affordable</h3>
            <p className="text-gray-600">
              Budget-friendly ticket options for all travelers
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="bg-gray-50 rounded-xl p-8 md:p-24  text-center ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          Ready to Sail?
        </h2>
    
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={'https://booking.sailsubham.com/home'}>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full lg:text-lg text-md transition duration-300 transform hover:scale-105">
              Book Online Now
            </button>
          </Link>
          <a href="tel:+91 9087143535" className="bg-white hover:bg-gray-100 text-amber-600 border border-amber-600 font-bold lg:py-3 lg:px-8 p-2 px-1 rounded-full text-lg transition duration-300 transform hover:scale-105 lg:text-lg text-md lg:w-fit w-[220px] lg:mx-0 mx-auto">
            Call: +91 9087143535
          </a>
        </div>
      </section>
    </div>
  );
};
