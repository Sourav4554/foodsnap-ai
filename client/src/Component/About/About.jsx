import React from "react";
import aboutImg from "../../assets/about.webp"; // Importing the about imageclient
const About = () => {
  return (
    <div id="about" className="flex w-full md:h-96 mt-5 lg:h-auto ">
      <div className="w-1/2 hidden md:block">
        <img
         loading="lazy"
          src={aboutImg}
          alt="About Us"
          className="object-cover h-full w-full "
        />
      </div>
      <div className="md:w-1/2 flex bg-purple-200 p-2 ">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
            About Us
          </h2>
          <p className="text-sm md:text-base lg:text-l mb-3 break-words">
            Welcome to Foodsnap AI, your smart companion to explore the rich
            flavors of Kerala while staying healthy! Simply upload a photo of
            your favorite Kerala dish, and our AI instantly identifies the food
            and reveals detailed nutritional information — calories, proteins,
            fats, carbs, and more Whether you're a foodie craving authentic
            tastes from God’s Own Country or a health-conscious individual
            tracking your nutrition, Foodsnap AI brings you the best of both
            worlds in one easy-to-use platform.
          </p>
          <a href="#upload">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-18 mb-2 md:ml-0"
            >
              Snap & Analyze{"->"}
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
