
import React, { useEffect, useRef } from "react";

const schemes = [
  {
    name: "PM Kisan Samman Nidhi Yojana",
    link: "https://pmkisan.gov.in/",
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana",
    link: "https://pmfby.gov.in/",
  },
  {
    name: "Kisan Credit Card (KCC) Scheme",
    link: "https://www.nabard.org/",
  },
  {
    name: "Soil Health Card Scheme",
    link: "https://soilhealth.dac.gov.in/",
  },
  {
    name: "PM Kusum Yojana",
    link: "https://mnre.gov.in/pm-kusum",
  },
  {
    name: "Rashtriya Krishi Vikas Yojana",
    link: "https://rkvy.nic.in/",
  },
  {
    name: "National Horticulture Mission",
    link: "https://nhm.gov.in/",
  },
  {
    name: "Pradhan Mantri Krishi Sinchayee Yojana",
    link: "https://pmksy.gov.in/",
  },
  {
    name: "Paramparagat Krishi Vikas Yojana",
    link: "https://pgsindia-ncof.gov.in/",
  },
  {
    name: "Agricultural Marketing Infrastructure Scheme",
    link: "https://agricoop.nic.in/",
  },
];

const SchemeList = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop += 1;
        // Reset scroll if it reaches the bottom
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTop = 0;
        }
      }
    }, 50); // Smooth scrolling speed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <h2 className="text-xl font-bold bg-green-500 text-white p-3 text-center">
          Government Schemes
        </h2>
        <div
          ref={scrollRef}
          className="h-80 overflow-y-scroll no-scrollbar scroll-smooth"
        >
          <ul className="divide-y divide-gray-300">
            {schemes.map((scheme, index) => (
              <li
                key={index}
                className="p-4 flex justify-between items-center hover:bg-green-100 transition"
              >
                <span>{scheme.name}</span>
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600"
                >
                  Apply Now
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchemeList;
