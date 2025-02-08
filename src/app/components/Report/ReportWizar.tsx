'use client'
import { useState } from "react"
import ReportForm from "./ReportForm"
//reportsubmited
function ReportWizar() {

    const [currentstep, setcurrentstep] = useState(1);
    const [reportdata, setreportdata] = useState<any>(null);
    

    const handelstepcompleted = async (data: any) => { 
        setreportdata({ ...reportdata, ...data });
        if (currentstep === 3) {
            return;
        }
        setcurrentstep((prev)=> prev+1);
    }
  return (
      <>
          <div className="">
              {currentstep === 1 && <ReportForm onComplete={handelstepcompleted}/>}
              
      </div>
      </>
  )
}

export default ReportWizar