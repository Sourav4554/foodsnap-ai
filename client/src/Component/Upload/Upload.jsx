import React, { useEffect, useRef } from "react";
import { Upload } from "lucide-react";
import * as tmImage from "@teachablemachine/image";
const Uploads = () => {
  const modelRef=useRef(null); // Reference to store the model
  const MODEL_PATH = "my-folder"; // Path to your model files

  useEffect(() => {
    // Function to load the model
    const loadModel = async () => {
      try {
        const model = await tmImage.load(
          `${MODEL_PATH}/model.json`,
          `${MODEL_PATH}/metadata.json`
        );
        modelRef.current = model;
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };
    loadModel();
  }, []);

  const nutritionData = [
    { nutrient: "Calories", amount: "250 kcal" },
    { nutrient: "Protein", amount: "12 g" },
    { nutrient: "Fat", amount: "10 g" },
    { nutrient: "Carbs", amount: "35 g" },
    { nutrient: "Fiber", amount: "8 g" },
    { nutrient: "Sugar", amount: "5 g" },
  ];
  return (
    <div
      id="upload"
      className="w-full py-5 px-5 bg-gray-100 flex flex-wrap md:flex-nowrap gap-4"
    >
      {/* Upload Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <span className="drop-shadow-[0px_0px_8px_rgba(0,255,4,1)] text-2xl text-green-400 mb-3">
          Upload here
        </span>
        <label htmlFor="upload-image">
          <div className="p-8 bg-gray-50 rounded-lg shadow-md relative cursor-pointer">
            <Upload className="w-20 h-20 text-gray-500 " />

            <input
              type="file"
              id="upload-image"
              accept="image/*"
              capture="environment"
              className="w-36 h-36 absolute top-0 left-0"
              hidden
            />
          </div>
        </label>
        <button
          type="button"
          className="cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3"
        >
          Get Nutritions {"->"}
        </button>
      </div>

      {/* Nutrition Info Table */}
      <div className="w-full md:w-1/2">
        <h3 className="text-xl font-semibold text-center mb-4">
          🍛 Nutrition Facts for <span className="text-green-600">IDILI</span>
          <br />
          <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 w-fit">
            <span className="text-xl font-bold cursor-pointer select-none hover:text-red-500">
              -
            </span>
            <span className="text-sm font-medium text-gray-700">100g</span>
            <span className="text-xl font-bold cursor-pointer select-none hover:text-green-500">
              +
            </span>
          </div>
        </h3>
        <table className="min-w-full text-left text-sm">
          <thead className="bg-green-100 text-green-800 uppercase font-semibold tracking-wider">
            <tr>
              <th className="px-6 py-4">Nutrient</th>
              <th className="px-6 py-4">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {nutritionData.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-3">{item.nutrient}</td>
                <td className="px-6 py-3">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div role="status" class="w-80  p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-between">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <div class="flex items-center justify-between pt-4">
        <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div> */}
    </div>
  );
};

export default Uploads;
