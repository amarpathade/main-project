import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Home() {
  const navigate = useNavigate();

  const logos = [
    'https://t4.ftcdn.net/jpg/03/24/10/97/360_F_324109791_jOqeA75fb7WbPjz13D9jxSg6YnTozIcY.jpg',
    'data:image/png;base64,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',
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq81Va7DQTS6r9sPW8-xEHF09nGTjdZwmPQw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7wfVBgMRakjUIirPNyfU4T7lubp1Lp56x4A&s',
  ];
  
  return (

    

    <div className="min-h-screen bg-green-50 flex flex-col">
      
      <header className="w-full text-center p-6 bg-green-600 text-white text-5xl font-extrabold rounded-b-3xl shadow-xl">
        🌱 Welcome to E-Farming 🌱
      </header>

      <section className="mt-10 flex flex-col lg:flex-row items-center justify-around">
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-4xl font-bold mb-6 text-green-700">About E-Farming</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            E-Farming is a revolutionary platform designed to bridge the gap between traditional farming and modern technology.
            We provide farmers with digital tools, resources, and market access to enhance productivity and efficiency.
            Our mission is to empower farmers, foster sustainability, and build a connected agricultural community.
          </p>
        </div>
        <img src="https://t4.ftcdn.net/jpg/05/37/86/79/240_F_537867963_PsI2EimHiEUMvBNT0WRaXModD1GeYEXX.jpg" alt="E-Farming" className="rounded-3xl shadow-lg mt-10 lg:mt-0" />
      </section>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <img src="https://t4.ftcdn.net/jpg/05/61/72/43/240_F_561724300_q15CUbClpcxLW6W5i8YyXsVE34nnbnQR.jpg" alt="Farmers" className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600">For Farmers</h3>
          <p className="text-gray-700 mt-2">Access resources, market insights, and expert guidance to enhance your yield and profits.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <img src="https://t3.ftcdn.net/jpg/10/03/56/40/240_F_1003564021_a6zWzmpVbC666uUGL91ZpzzxjP89Kot8.jpg" alt="Technology" className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600">Smart Technology</h3>
          <p className="text-gray-700 mt-2">Leverage digital tools and data-driven insights to make informed farming decisions.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <img src="https://t4.ftcdn.net/jpg/00/90/29/05/240_F_90290500_z6OrYcWzXZ6bBlIdliTsjVtYJH3olgxb.jpg" alt="Market" className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600">Market Access</h3>
          <p className="text-gray-700 mt-2">Connect directly with buyers, negotiate better prices, and grow your business.</p>
        </div>
      </section>

      <section className="mt-20 flex flex-col lg:flex-row items-center justify-around">
        <img src="https://t4.ftcdn.net/jpg/06/27/84/63/240_F_627846395_6B8aQeVietrpqYWQRwy8jbdnkFwY5YNz.jpg" alt="Innovation" className="rounded-3xl shadow-lg" />
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-4xl font-bold mb-6 text-green-700">Innovation in Agriculture</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover how cutting-edge technology and innovative practices are transforming the agricultural landscape.
            E-Farming brings you the best of innovation to boost productivity and sustainability.
          </p>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-green-700">Success Stories</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Hear from farmers who have transformed their agricultural practices with E-Farming. Real stories of growth and success.
        </p>
      </section>

      <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-4">
      <motion.div
        className="flex space-x-8"
        initial={{ x: '100%' }}
        animate={{ x: ' -20%' }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'linear',
        }}
      >
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index + 1}`}
            className="h-16 w-auto"
          />
        ))}
      </motion.div>
    </div>

      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-green-700">Join the E-Farming Movement</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Whether you're a farmer, investor, or enthusiast, there's a place for you in the E-Farming community. Let’s build a
          greener, smarter future together.
        </p>
        <button className="mt-8 bg-green-500 text-white px-8 py-4 rounded-3xl text-lg shadow-md hover:bg-green-700">
          Get Started
        </button>
      </section>
   

      <div className="bg-green-50 py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">Why Choose Our Farming Market?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-2">✔</span>
              <p className="text-lg">Quality Organic Food directly from trusted farms.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-2">✔</span>
              <p className="text-lg">Professional farmers ensuring sustainable practices.</p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-2">✔</span>
              <p className="text-lg">Top-quality products with no compromise on freshness.</p>
            </li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-lg"
          >
            Discover More
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://t3.ftcdn.net/jpg/03/88/54/50/240_F_388545000_s4RsrD79y9GA04jkCsM8SX3wOaO9nSOW.jpg"
            alt="Farmer"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </div>

      <footer className="mt-20 bg-green-600 text-white text-center p-6 rounded-t-3xl">
        © 2025 E-Farming. All rights reserved. <a href="https://wa.link/p0byf7">Contact Team</a>
      </footer>
    </div>
  );
}
