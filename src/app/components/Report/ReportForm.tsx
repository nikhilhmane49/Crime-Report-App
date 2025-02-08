"use client";
import { useState } from "react";

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

  const handleSetIncidentType = (type: ReportType) => {
    setFormData((prev) => ({ ...prev, incidentType: type }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
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
  );
}

export default ReportForm;
