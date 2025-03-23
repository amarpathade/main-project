import { useState } from "react";

const Contact= ()=>{
  const [submitted , setSubmittied] = useState(false);

  const handleSubmit =(e) =>{
    e.preventDefualt();
    setSubmittied(true);
  };

  const closePopup= ()=>{
    setSubmittied(false);
  }


  return(
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-green-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center text-green-700">
          Contact Us
        </h2>
      </div>
    </div>
  )
}
export default Contact