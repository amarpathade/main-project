// 

import React from "react";
import { Link } from "react-router-dom";

const EFarmingServices = () => {
  const services = [
    {
      title: "Weather Information",
      description: "Get real-time weather updates and forecasts tailored for your farming needs.",
      link: "/EfarmingWeather",
      icon: "🌦️"
    },
    {
      title: "Crop Guidance",
      description: "Expert advice on the best practices for different crops, including soil, water, and climate recommendations.",
      link: "/CropGuidance",
      icon: "🌱"
    },
    {
      title: "Market Prices",
      description: "Stay updated with the latest market prices for your crops and make informed selling decisions.",
      link: "/SeedMarketPricesPage",
      icon: "💰"
    },
    {
      title: "Pest Control",
      description: "Identify crop diseases and pests and get suggestions on effective treatments.",
      link: "/PestCabtrol",
      icon: "🐛"
    },
    {
      title: "Government Schemes",
      description: "Learn about farming-related government subsidies, loans, and support programs.",
      link: "/SchemeList",
      icon: "🏛️"
    },
    {
      title: "Farming Products",
      description: "Buy online products used in farming like seeds, nutrients, and hardware.",
      link: "/ProductHome",
      icon: "🛒"
    }
  ];

  return (
    <div>
      <h2 className="text-center text-2xl m-4">Our E-Farming Services 🌾</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {services.map((service) => (
          <div key={service.title} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "12px", textAlign: "center" , boxShadow:"0px 0px 3px black"}}>
            <div style={{ fontSize: "40px" }}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={service.link} style={{ textDecoration: "none", color: "green", fontWeight: "bold" , fontSize:"10px" }}>
              Go to {service.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EFarmingServices;
