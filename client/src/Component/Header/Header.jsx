import React from "react";
import headerImg from "../../assets/home.jpeg"; // Importing the header image
const Header = () => {
  return (
    <>
      {/* Header Section with Background Image and Text */}
      <div
        id="home"
        className=" bg-cover bg-center rounded-lg bg-blend-overlay mt-16 h-[88vh] flex w-full bg-gradient-to-r from-white via-gray-50 to-transparent"
        style={{
          backgroundImage: `url(${headerImg})`,
        }}
      >
        {/* Left Side - Text/Content */}

        <div className=" flex align-middle flex-col mt-20 ml-10 gap-1.5 md:justify-center">
          <p className="text-2xl sm:text-3xl md:text-4xl font-light">
            Hello Kerala Food Lovers!
          </p>
          <span className="text-5xl sm:text-5xl md:text-8xl font-bold">
            Welcome to
          </span>{" "}
          <span className="text-5xl sm:text-5xl md:text-8xl font-bold text-green-400">
            FoodSnap
          </span>
          <p className="mt-2 text-xl text-gray-700">
            Ever wondered how many calories are in our favorite
          </p>
          <p className="text-xl text-gray-700">Kerala dishes? 🍛🌴</p>
          <div className="mt-2">
            <a href="#upload">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Snap & Analyze{"->"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
