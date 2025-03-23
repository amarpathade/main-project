import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EFarmingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    let botReply = '';
    if (input.toLowerCase().includes('weather')) {
      botReply = 'Please provide the city name for weather details.';
    }else if (input.toLowerCase().includes('soil')) {
      botReply = 'Soil is the most important factor for farming. It should be fertile and well-drained.'; 
        }else if (input.toLowerCase().includes('wheat')) {
      botReply = 'Wheat grows best in cool climates with well-drained loamy soil.';
    } else if (input.toLowerCase().includes('rice')) {
      botReply = 'Rice needs warm weather and plenty of water.';
    } else if (input.toLowerCase().includes('corn')) {
      botReply = 'Corn prefers warm climate and well-fertilized soil.';
    }else if (input.toLowerCase().includes('water')) {
      botReply = 'Water is essential for farming. Make sure to provide enough water to your crops.';  
    }else if (input.toLowerCase().includes('fertilizer')) {
      botReply = 'Fertilizers provide essential nutrients to the crops for their growth and development.';  
    }else if (input.toLowerCase().includes('pest')) {
      botReply = 'Pests are harmful insects that can damage your crops. Use pesticides to control them.';
    }else if (input.toLowerCase().includes('disease')) {  
      botReply = 'Diseases can affect the growth of your crops. Use fungicides to prevent them.';
    }else if (input.toLowerCase().includes('harvest')) {
      botReply = 'Harvest your crops when they are fully grown and ripe.';
    }else if (input.toLowerCase().includes('crop')) {
      botReply = 'Choose the right crop according to the season and climate of your region.';
    }else if (input.toLowerCase().includes('market')) {
      botReply = 'Sell your crops in the market to earn profit.';
    } 
    else {
      botReply = "Hii i am E farming chatbot created and devloped for indian farmers how can help you !.";
    }

    const botMessage = { sender: 'bot', text: botReply };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div>
      {/* Chatbot Icon */}
      <motion.div
        className="fixed bottom-4 right-4 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-green-600"
        onClick={toggleChatbot}
        whileHover={{ scale: 1.1 }}
      >
        💬
      </motion.div>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-16 right-4 w-80 bg-white rounded-2xl shadow-lg p-4"
        >
          <h2 className="text-xl font-bold mb-4">E-Farming Chatbot 🌱</h2>
          <div className="h-64 overflow-y-auto border rounded-lg p-2 mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg ${msg.sender === 'user' ? 'bg-blue-200 self-end' : 'bg-green-200 self-start'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-l-lg"
              placeholder="Ask something about farming..."
            />
            <button
              onClick={handleSend}
              className="bg-green-500 text-white px-4 rounded-r-lg hover:bg-green-600"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EFarmingChatbot;
