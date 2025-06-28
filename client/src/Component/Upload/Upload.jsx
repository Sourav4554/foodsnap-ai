import React, { useEffect, useRef, useState } from "react";
import { Upload } from "lucide-react";
import * as tmImage from "@teachablemachine/image";
import { showErrorAlert } from "../../Utilities/popup";
import Compressor from "compressorjs";
import axios from 'axios'
import Skelton from "../Skelton/Skelton";
const Uploads = () => {
  const BackendUrl=`https://foodsnap-ai-backend.onrender.com`
  const modelRef = useRef(null); // Reference to store the model
  const [prediction, setPrediction] = useState(""); // State to store the prediction result
  const [preview, setPriview] = useState(""); // State to store the image preview
  const MODEL_PATH = "my-folder"; // Path to your model files\
  const[nutrients,setNutrients]=useState({});
  const [quality,setQuality]=useState(1)
  // Load the model when the component mounts
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

  // Function to handle image upload and prediction
  const handleImageUpload = async (event) => {
    setNutrients({})
    const file = event.target.files[0];
    if (!file) return;
    if(file.size>2e6) {
      showErrorAlert("Image size is too large. Please upload a image size less than 2mp.");
      return;
    }
    // Check if the file is an image
    const compressedFile=await new Promise((resolve,reject)=>{
    new Compressor(file,{
    quality:0.6,
    maxWidth:800,
    maxHeight:800,
    mimeType:'image/jpeg',
    success(result){
    resolve(result)
    },
    error(error){
    reject(error)
    }
    })
    })

    
    const url = URL.createObjectURL(compressedFile);
    setPriview(url);
    const img = new Image();
    img.src = url;
    img.onload = async () => {
      const predictions = await modelRef.current.predict(img);
      const best = predictions.reduce((prev, current) => {
        return prev.probability > current.probability ? prev : current;
      });
      if (best.probability < 0.5) {
        showErrorAlert(`Sorry, I can't recognize this food item.`);
        return;
      }
      setPrediction(best.className);
    };
  };

   const getNutrients=async()=>{
  try {
    if(!prediction){
    showErrorAlert('please upload a food Image')
    return;
    }
    const {data}=await axios.post(`${BackendUrl}/api/food/nutrients`,{name:prediction.toLocaleLowerCase()})
    if(data){
    setNutrients(data.message)
    }
    else{
    showErrorAlert(data.message)
    }
  } catch (error) {
    const message =
    error?.response?.data?.message || error.message || "Something went wrong";
    showErrorAlert(message)
  }
  }


  
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
            {!preview ? (
              <Upload className="w-20 h-20 text-gray-500 " />
            ) : (
              <img
                src={preview}
                alt="image"
                className="w-36 h-36  object-cover shadow-neutral-900"
              />
            )}
            <input
              type="file"
              id="upload-image"
              accept="image/*"
              capture="environment"
              className="w-36 h-36 absolute top-0 left-0"
              onChange={handleImageUpload}
              hidden
            />
          </div>
        </label>
        <button
          type="button"
          className="cursor-pointer text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3"
          onClick={()=>getNutrients()}
        >
          Get Nutritions {"->"}
        </button>
      </div>

      {/* Nutrition Info Table */}
      {
     
      prediction && Object.entries(nutrients).length?
     
      <div className="w-full md:w-1/2">
        
        <h3 className="text-xl font-semibold text-center mb-4">
          🍛 Nutrition Facts for{" "}
          <span className="text-green-600">{Object.entries(nutrients).length&&prediction}</span>
          <br />
          <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-1 w-fit">
            <span className="text-xl font-bold cursor-pointer select-none hover:text-red-500"
            onClick={()=>{
              if(100*quality>100){
            setQuality(quality-1)}}
              }
            >
              -
            </span>
            <span className="text-sm font-medium text-gray-700">{`${100*quality} g`}</span>
            <span className="text-xl font-bold cursor-pointer select-none hover:text-green-500"
            onClick={()=> setQuality(quality+1)}
            >
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
            {
           Object.entries(nutrients).map(([key,value],index)=>(

              <tr
               key={index}
               className={`${index%2==0?'bg-gray-50':"bg-gray-100"}`}
              >
                <td className="px-6 py-3">{key}</td>
                <td className="px-6 py-3">{(value*quality)}{`${key==='calories'?' kcl':` g`}`}</td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
      :<Skelton/>
           
     
}
    </div>
  );
};

export default Uploads;
