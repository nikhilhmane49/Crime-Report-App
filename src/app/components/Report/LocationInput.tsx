"use client";
import { useState } from "react";

function LocationInput() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState("");

    
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            default:
              setError("An unknown error occurred.");
              break;
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Get User Location</h1>
      <button
        onClick={getLocation}
        className="mt-4 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all"
      >
        Get Current Location
      </button>
      {location.latitude && location.longitude && (
        <div className="mt-6">
          <p className="text-lg">Latitude: {location.latitude}</p>
          <p className="text-lg">Longitude: {location.longitude}</p>
        </div>
      )}
      {error && <p className="mt-6 text-red-500">{error}</p>}
    </div>
  );
}

export default LocationInput;
