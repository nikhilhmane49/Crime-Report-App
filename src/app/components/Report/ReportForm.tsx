"use client";

'use client'
import { useState } from "react";



  const REPORT_TYPES = [
    "Theft",
    "Fire Outbreak",
    "Hazardous Materials",
    "Environmental Disaster",
    "Natural Disaster",
    "Littering",
    "Illegal Activity",
    "other"
  ] as const;

  type ReportType = 'EMERGENCY ' | 'NON_EMERGENCY';
  
  interface Reportformprops{
    oncomplete: (data: any) => void;
  
}
  

function ReportForm({ oncomplete }: Reportformprops) {
  const [formData, setFormData] = useState({
    incidentType: "" as ReportType,
    specificType: "",
    location: "",
    description: "",
    title: "",
  });

  const [image, setImage] = useState<string | null>(null);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [coordinates, setCoordinates] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({
    latitude: null,
    longitude: null,
  });





  return <div>ReportForm</div>;
}

export default ReportForm;
