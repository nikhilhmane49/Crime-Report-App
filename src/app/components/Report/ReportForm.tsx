"use client";
import { useState } from "react";
import LocationInput from "./LocationInput";

const REPORT_TYPES = [
  "Theft",
  "Fire Outbreak",
  "Hazardous Materials",
  "Environmental Disaster",
  "Natural Disaster",
  "Littering",
  "Illegal Activity",
  "other",
] as const;

type ReportType = "EMERGENCY" | "NON_EMERGENCY";

interface ReportFormProps {
  onComplete: (data: any) => void;
}

function ReportForm({ onComplete }: ReportFormProps) {
  const [formData, setFormData] = useState({
    incidentType: "" as ReportType,
    specificType: "",
    location: "",
    description: "",
    title: "",
  });

  const [image, setImage] = useState<File | null>(null);


  const handleSetIncidentType = (type: ReportType) => {
    setFormData((prev) => ({ ...prev, incidentType: type }));
  };


  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    setImage(file);
  }
};


  return (
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mt-11 ">
        {/* Emergency Report Button */}
        <button
          type="button"
          className="group relative flex items-start gap-6 px-3 py-8 bg-red-50 rounded-xl shadow-lg ring-2 ring-red-400 hover:bg-red-500 hover:ring-red-700 transition-all duration-300"
          onClick={() => handleSetIncidentType("EMERGENCY")}
        >
          <div className="p-4 bg-red-200 rounded-lg group-hover:bg-red-600 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-12 h-12 text-red-700 group-hover:text-white transition"
            >
              <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-700 group-hover:text-white transition">
              Emergency Report
            </h1>
            <p className="mt-2 text-lg font-semibold text-gray-600 group-hover:text-white transition">
              Immediate response required
            </p>
          </div>
        </button>

        {/* Non-Emergency Report Button */}
        <button
          type="button"
          className="group relative flex items-start gap-6 px-3 py-8 bg-orange-50 rounded-xl shadow-lg ring-2 ring-orange-400 hover:bg-orange-500 hover:ring-orange-700 transition-all duration-300"
          onClick={() => handleSetIncidentType("NON_EMERGENCY")}
        >
          <div className="p-4 bg-orange-200 rounded-lg group-hover:bg-orange-600 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-12 h-12 text-orange-700 group-hover:text-white transition"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-orange-700 group-hover:text-white transition">
              Non-Emergency Report
            </h1>
            <p className="mt-2 text-lg font-semibold text-gray-600 group-hover:text-white transition">
              General report
            </p>
          </div>
        </button>
      </div>

      {/* image uploader */}

      <div className="mt-14">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="image-upload"
          onChange={handleImageUpload}
        />
        <label
          htmlFor="image-upload"
          className={`block w-full p-8 border-2 border-dashed border-gray-300 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 ${
            image ? "bg-white" : "bg-gray-100"
          }`}
        >
          {image ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(image)}
                alt="incident"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-xl">
                  Click to change image
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-12 h-12 text-gray-400"
              >
                <path d="M160 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zm236 106.7 96 144c4.9 7.4 5.4 16.8 1.2 24.6s-11.1 11.7-19.2 11.7H328l-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84c4.4-6.6 11.9-10.6 20-10.6s15.6 4 20 10.7zm-236-10.7a32 32 0 1 1 64 0 32 32 0 1 1-64 0zm-144-8v224c0 75.1 60.9 136 136 136h320c13.3 0 24-10.7 24-24s-10.7-24-24-24H160c-48.6 0-88-39.4-88-88V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <p className="text-gray-500 font-bold text-xl">
                Click to upload an image
              </p>
            </div>
          )}
        </label>
      </div>

      

      {/* Report Type */}
      <div className="mt-14">
        <label
          htmlFor="reportType"
          className="block text-2xl font-bold text-gray-400 mb-4"
        >
          Report Type
        </label>
        <div className="relative">
          <select
            id="reportType"
            className="block w-full p-4 text-lg bg-white border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 appearance-none text-black"
            value={formData.specificType}
            onChange={(e) => {
              setFormData((prev) => ({
                ...prev,
                specificType: e.target.value,
              }));
            }}
          >
            <option value="">Select Report Type</option>
            {REPORT_TYPES.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 right-4 w-6 h-6 text-gray-400 transform -translate-y-1/2 pointer-events-none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 15.6l-8-8 1.4-1.4 6.6 6.6 6.6-6.6 1.4 1.4z" />
          </svg>
        </div>
      </div>


      {/* locationInput */}

      <LocationInput/>


    </form>
  );
}

export default ReportForm;
