import React from 'react';
import { motion } from 'framer-motion';
import { FaSeedling, FaCloudSun, FaWater, FaBookReader } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const crops = [
  {
    name: '🌾 Wheat',
    image: 'https://www.farmatma.in/wp-content/uploads/2019/05/wheat-cultivation-india.jpg',
    lifecycle: 'Sowing ➡️ Germination ➡️ Harvesting',
    soil: 'Loamy soil, pH 6.0-7.5',
    climate: 'Cool and dry, 12°C-25°C',
    tips: 'Avoid waterlogging, ensure timely weeding'
  },
  {
    name: '🌽 Corn',
    image: 'data:image/jpeg;base64,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',
    lifecycle: 'Planting ➡️ Maturity ➡️ Harvesting',
    soil: 'Sandy loam, pH 5.8-7.0',
    climate: 'Warm climate, 18°C-27°C',
    tips: 'Proper pest control ensures higher yield'
  },
  {
    name: '👕 Cotton',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/BALLS_OF_COTTON_%28ANDHRA_-SOUTH_INDIA%29_READY_FOR_HARVEST.jpg/330px-BALLS_OF_COTTON_%28ANDHRA_-SOUTH_INDIA%29_READY_FOR_HARVEST.jpg',
    lifecycle: 'Planting ➡️ Maturity ➡️ Harvesting',
    soil: ' Black soil, well-drained, pH 6.0-7.5',
    climate: 'Tropical climate, 21°C-30°C',
    tips: ' Timely irrigation and weed management improve fiber quality'
  },
  {
    name: '🌱 Soybean',
    image: 'https://img.khetivyapar.com/images/news/1717051011-soyabean-mandi-bhav-today-in-maharashtra-on-30-may-2024.jpg',
    lifecycle: 'Planting ➡️ Maturity ➡️ Harvesting',
    soil: ' Loamy soil, rich in organic matter, pH 6.0-7.0',
    climate: 'Moderate climate, 20°C-30°C',
    tips: 'Proper crop rotation helps maintain soil fertility and reduces disease risk`'
  },
  {
    name: '🍚 Rice',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrZLrYOtvAJoWxPd5_IsxZmV7hLo9uPsDmbV51NZjMiax6-Za',
    lifecycle: 'Nursery ➡️ Transplanting ➡️ Harvesting',
    soil: 'Clayey loam, pH 5.5-7.0',
    climate: 'Hot and humid, 25°C-35°C',
    tips: 'Maintain proper water levels during growth'
  }
];

const CropGuidance = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-[url('https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg')] bg-cover bg-center relative pb-32 z-0">
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} className="mb-8 rounded-2xl overflow-hidden max-h-48">
        <div>
          <img src="https://miro.medium.com/v2/resize:fit:1400/1*HMI0LshNedQMNfO9bG3Ixg.jpeg" alt="Farming" className="object-cover h-48" />
        </div>
        <div>
          <img src="https://media.licdn.com/dms/image/v2/D5612AQE1sj_mjbzFRg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714625560251?e=2147483647&v=beta&t=fdRGgND_jSBaNNdN3NeaXZZi6TuseyBPf5g9WrEO_ac" alt="Fields" className="object-cover h-48" />
        </div>
        <div>
          <img src="https://www.shutterstock.com/image-photo/human-mans-hand-moving-through-260nw-2253499503.jpg" alt="Farmers" className="object-cover h-48" />
        </div>
      </Carousel>
      <motion.h1 
        className="text-5xl font-extrabold text-center text-green-700 bg-white bg-opacity-75 p-4 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌱 Crop Guidance
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {crops.map((crop, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex items-center relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={crop.image} alt={crop.name} className="w-24 h-24 rounded-full" />
            <div className="text-left ml-6">
              <h2 className="text-3xl font-bold text-green-900">{crop.name}</h2>
              <p className="text-md text-gray-700 mt-2"><FaBookReader className="inline text-purple-500" /> {crop.lifecycle}</p>
              <p className="text-md text-gray-700"><FaSeedling className="inline text-green-500" /> Soil: {crop.soil}</p>
              <p className="text-md text-gray-700"><FaCloudSun className="inline text-yellow-500" /> Climate: {crop.climate}</p>
              <p className="text-md text-gray-700"><FaWater className="inline text-blue-500" /> Tips: {crop.tips}</p>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-green-700 transition"><a href="https://www.saskatchewan.ca/business/agriculture-natural-resources-and-industry/agribusiness-farmers-and-ranchers/farm-business-management/crop-planning-guide-and-crop-planner">more info</a></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CropGuidance;
