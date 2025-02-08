"use client";

import ReportWizar from "../components/Report/ReportWizar";
function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex items-center justify-center gap-4 rounded-full ring-2 ring-blue-500 bg-blue-700/30 text-white px-6 py-3 text-lg font-semibold transition-all hover:bg-blue-600 hover:ring-blue-400 max-w-2xl ml-auto mr-auto">
        <svg
          className="w-10 h-10 text-blue-500 mt-4"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
        </svg>
        <h1 className="text-2xl font-extrabold text-white mt-4">
          Secure and Anonymous
        </h1>
      </div>
      <h1 className="text-6xl font-extrabold text-white mt-8">Submit Report</h1>

      <p className="text-2xl text-blue-500 mt-4 font-bold">
        Your safety is our priority. All submissions are encrypted and
        anonymized.
      </p>

      <div className="flex flex-wrap justify-center mt-10 gap-6">
        <ReportWizar />
      </div>
    </div>
  );
}

export default page;
