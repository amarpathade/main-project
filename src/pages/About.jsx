


import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaGlobe, FaChartLine, FaHandsHelping, FaTools, FaBookOpen } from 'react-icons/fa';

const About = () => {
  const sections = [
    {
      icon: <FaLeaf className="text-green-500 text-4xl mb-2" />,
      title: '🌱 Introduction to E-Farming',
      content: `E-Farming leverages digital technology to enhance farming practices, improving efficiency, productivity, and sustainability.`,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCM0ZsUqBn-LJSGfpmowcfOI4hgEOM4va9jA&s'
    },
    {
      icon: <FaGlobe className="text-blue-500 text-4xl mb-2" />,
      title: '🎯 Our Mission and Vision',
      content: `Our mission is to empower farmers with digital solutions for informed decisions and sustainability.`
    },
    {
      icon: <FaSeedling className="text-green-500 text-4xl mb-2" />,
      title: '✨ Key Features of E-Farming',
      content: `✅ Smart Irrigation
✅ Precision Agriculture
✅ Remote Monitoring
✅ Digital Marketplaces`,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCM0ZsUqBn-LJSGfpmowcfOI4hgEOM4va9jA&s'
    },
    {
      icon: <FaChartLine className="text-purple-500 text-4xl mb-2" />,
      title: '🌾 Why Choose E-Farming?',
      content: `E-Farming offers increased efficiency, reduced environmental impact, and enhanced profitability.`
    }
  ];

  const horizontalSections = [
    {
      icon: <FaHandsHelping className="text-yellow-500 text-3xl" />,
      title: '🤝 Community Support',
      content: 'We provide knowledge sharing, expert advice, and collaborative opportunities.'
    },
    {
      icon: <FaTools className="text-red-500 text-3xl" />,
      title: '🛠 Advanced Tools & Tech',
      content: 'Our platform offers AI-driven analytics and automated machinery for farming.'
    },
    {
      icon: <FaBookOpen className="text-blue-500 text-3xl" />,
      title: '📘 Educational Resources',
      content: 'We provide tutorials, workshops, and guides on agricultural innovations.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-[url('https://source.unsplash.com/1600x900/?farm,agriculture')] bg-cover bg-center">
      <motion.h1 
        className="text-6xl font-extrabold text-center mb-16 text-green-700 tracking-wider uppercase bg-white bg-opacity-75 p-4 rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About E-Farming
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div 
            key={index} 
            className="bg-gradient-to-r from-green-100 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-105 border-b-4 border-green-400 bg-opacity-90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              {section.icon}
              <h2 className="text-3xl font-extrabold mb-4 text-green-900">{section.title}</h2>
              {section.image && <img src={section.image} alt={section.title} className="w-24 h-24 mb-4 rounded-full" />}
              <p className="text-md text-gray-700 whitespace-pre-line leading-relaxed">{section.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {horizontalSections.map((section, index) => (
          <motion.div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4 hover:shadow-xl transition-transform duration-500 transform hover:scale-105 border-t-4 border-green-400 bg-opacity-90"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {section.icon}
            <div>
              <h3 className="text-xl font-bold text-green-800">{section.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{section.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
