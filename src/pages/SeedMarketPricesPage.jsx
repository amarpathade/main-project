// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import React, { useState } from 'react';

// state wise seed prices
const priceData2 = [
  { month: 'Jan', Corn: 1000, Cotton: 4000, Soybean: 3200, Rice: 2300, Delhi: 1200, Punjab: 4500, MP: 3500, WB: 2500, Maharashtra: 3799 },
  { month: 'Feb', Corn: 1100, Cotton: 4200, Soybean: 3300, Rice: 2400, Delhi: 1250, Punjab: 4600, MP: 3550, WB: 2550, Maharashtra: 3800 },
  { month: 'Mar', Corn: 1200, Cotton: 4500, Soybean: 3500, Rice: 2500, Delhi: 1300, Punjab: 4700, MP: 3600, WB: 2600, Maharashtra: 4050 }
];

// seeds option
const seeds = ['Corn', 'Cotton', 'Soybean', 'Rice'];
// state option
const states = ['Delhi', 'Punjab', 'MP', 'WB', 'Maharashtra'];
// page start
const SeedMarketPricesPage = () => {
  const [selectedSeed, setSelectedSeed] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [price, setPrice] = useState(null);

  // search 
  const handleSearch = () => {
    const latestMonthData = priceData2[priceData2.length - 1];
    setPrice(latestMonthData[selectedState] || 'Price not available');
  };

  // chart
  const priceData = [
    { month: 'Jan', Corn: 1000, Cotton: 4000, Soyabean: 3200, Rice: 2300 },
    { month: 'Feb', Corn: 1100, Cotton: 4200, Soyabean: 3300, Rice: 2400 },
    { month: 'Mar', Corn: 1200, Cotton: 4500, Soyabean: 3500, Rice: 2500 },
    { month: 'Apr', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 },
    { month: 'May', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 },
    { month: 'Jun', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 },
    { month: 'Jul', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 },
    { month: 'Aug', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 },
    { month: 'Sep', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 },
    { month: 'Oct', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 },
    { month: 'Nov', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 },
    { month: 'Dec', Corn: 1200, Cotton: 5000, Soyabean: 4000, Rice: 2000 }
  ];

  // code
  return (
    // code fragnment for use many div
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">🌾 State Wise Seed Prices</h1>
        <div className="flex gap-4 justify-center mb-8">
          <select className="p-2 rounded-lg" value={selectedSeed} onChange={e => setSelectedSeed(e.target.value)}>
            <option value="">Select Seed</option>
            {seeds.map(seed => <option key={seed} value={seed}>{seed}</option>)}
          </select>
          <select className="p-2 rounded-lg" value={selectedState} onChange={e => setSelectedState(e.target.value)}>
            <option value="">Select State</option>
            {states.map(state => <option key={state} value={state}>{state}</option>)}
          </select>
          <button className="p-2 bg-blue-500 text-white rounded-lg" onClick={handleSearch}>Search Price</button>
        </div>
        {price !== null && (
          <p className="text-center text-xl font-semibold">Latest Price in {selectedState}: ₹{price}</p>
        )}

        {/* paragraph */}
        <p className='text-xl mt-30'> <span className='bg-amber-200'> agricultural ecosystemThe seed market plays a vital role in the  </span>, serving as the foundation for crop production and food security. It connects farmers with high-quality seeds and provides a platform where seed prices, availability, and demand can be monitored and compared across different regions. A well-organized seed market ensures that farmers have access to the right varieties of seeds at the right time and fair prices, helping them make informed decisions for their agricultural practices. By tracking market trends, historical price data, and regional differences, the seed market supports better planning and profitability. It also enhances transparency, allowing buyers and sellers to negotiate based on accurate and up-to-date information. A robust seed market ultimately contributes to increased productivity and sustainability in farming.</p>
      </div>

      {/* chart code  */}
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6">🌾 Seed Price Trend Analysis</h1>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={priceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Corn" stroke="#FF5733" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Cotton" stroke="#33FF57" />
            <Line type="monotone" dataKey="Soybean" stroke="#3357FF" />
            <Line type="monotone" dataKey="Rice" stroke="#FF33A1" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default SeedMarketPricesPage;
