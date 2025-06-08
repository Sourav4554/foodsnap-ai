import React from "react";
import { Upload, Search, Info } from "lucide-react";// Importing icons from lucide-react
const Work = () => {
  return (
  
      <section className="bg-gray-50 py-16 px-4 md:px-20" id='works'>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            How It Works
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-green-600 mb-4">
                <Upload className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                1. Upload Your Food
              </h3>
              <p className="text-gray-600 text-sm">
                Take or upload a photo of a Kerala dish you want to know more
                about.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-green-600 mb-4">
                <Search className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Let AI Detect</h3>
              <p className="text-gray-600 text-sm">
                Our smart AI recognizes the dish and fetches detailed
                information.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-green-600 mb-4">
                <Info className="w-10 h-10 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                3. Get Nutrition Info
              </h3>
              <p className="text-gray-600 text-sm">
                Instantly view calories, carbs, protein, and more — all in one
                place.
              </p>
            </div>
          </div>
        </div>
      </section>
   
  );
};

export default Work;
