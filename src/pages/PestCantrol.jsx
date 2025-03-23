import React from 'react';
import leafrimage from '../assets/images/greenleaf.jpg'
const pests = [
  { name: 'Aphids', crop: 'Soybean', symptoms: 'Yellowing leaves, stunted growth', treatment: 'Use neem oil spray or insecticidal soap' },
  { name: 'Corn Borer', crop: 'Corn', symptoms: 'Holes in stalks, damaged kernels', treatment: 'Apply Bacillus thuringiensis (Bt) or pheromone traps' },
  { name: 'Rice Blast', crop: 'Rice', symptoms: 'Spots on leaves, reduced yield', treatment: 'Use resistant varieties and fungicide sprays' },
  { name: 'Bollworm', crop: 'Cotton', symptoms: 'Bored holes in bolls, falling flowers', treatment: 'Apply biological pesticides like Bt or synthetic pyrethroids' }
];

const PestControl = () => {
  return (
    <div className="p-6 min-h-screen bg-[url('..\src\assets\images\greenleaf.jpg')] bg-cover bg-center h-screen w-full">

      <h1 className="text-3xl font-bold text-center mb-6 text-white">🐛 Pest Control</h1>
      <p className="text-center mb-8 text-white">Identify crop diseases and pests and get suggestions on effective treatments.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-250 ml-10">
        {pests.map(pest => (
          <div key={pest.name} className="backdrop-2xl p-4 rounded-2xl shadow-lg text-white opacity-90 border transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black  ">
            <h2 className="text-2xl font-bold">{pest.name} ({pest.crop})</h2>
            <p><strong>Symptoms:</strong> {pest.symptoms}</p>
            <p><strong>Treatment:</strong> {pest.treatment}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="p-3 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"><a href="https://www.farm21.com/pest-control-in-agriculture-leveraging-technology/">load more</a></button>
      </div>
    </div>
  );
};

export default PestControl;
