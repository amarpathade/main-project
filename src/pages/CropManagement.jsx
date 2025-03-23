import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CropManagement() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col">
      <header className="w-full text-center p-6 bg-green-600 text-white text-5xl font-extrabold rounded-b-3xl shadow-xl">
        🌱 Crop Management for Best Farming 🌱
      </header>

      <section className="mt-10 flex flex-col lg:flex-row items-center justify-around">
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-4xl font-bold mb-6 text-green-700">Efficient Crop Planning</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Proper crop management starts with smart planning. We help you choose the right crops based on soil type, climate,
            and market demand to ensure maximum productivity and profit.
          </p>
        </div>
        <img src="https://via.placeholder.com/400" alt="Crop Planning" className="rounded-3xl shadow-lg mt-10 lg:mt-0" />
      </section>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <img src="https://via.placeholder.com/100" alt="Soil Management" className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600">Soil Management</h3>
          <p className="text-gray-700 mt-2">Get expert advice on soil testing, nutrient management, and soil health improvement.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <img src="https://via.placeholder.com/100" alt="Irrigation" className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600">Smart Irrigation</h3>
          <p className="text-gray-700 mt-2">Learn about modern irrigation systems that save water and increase efficiency.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
          <img src="https://via.placeholder.com/100" alt="Pest Control" className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600">Pest & Disease Control</h3>
          <p className="text-gray-700 mt-2">Protect your crops with sustainable and effective pest and disease management practices.</p>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-green-700">Harvesting Techniques</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Maximize yield and maintain quality with the best harvesting methods tailored to your crops.
        </p>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-green-700">Post-Harvest Management</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Reduce losses and increase profitability with proper storage, packaging, and transportation techniques.
        </p>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-green-700">Get Expert Support</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Connect with agricultural experts for personalized guidance and support throughout your farming journey.
        </p>
        <button
          className="mt-8 bg-green-500 text-white px-8 py-4 rounded-3xl text-lg shadow-md hover:bg-green-700"
          onClick={() => navigate('/')}
        >
          Get Started
        </button>
      </section>

      <footer className="mt-20 bg-green-600 text-white text-center p-6 rounded-t-3xl">
        © 2025 E-Farming. All rights reserved.
      </footer>
    </div>
  );
}
