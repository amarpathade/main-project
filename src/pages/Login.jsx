
// start here

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainlogo from '../assets/images/mainlogin.webp'
import { m } from "framer-motion";

const validUser = {
email: "user@gmail.com",
password: "pass1234",
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === validUser.email && password === validUser.password) {
      setMessage("Login successful! Redirecting to home...");
      setTimeout(() => navigate('/home'), 1000);
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: 'white' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={mainlogo} alt="Welcome" style={{ maxWidth: '100%', borderRadius: '1rem' }} />
      </div>

      <div className=" mr-40 p-3 h-100 flex-1 shadow  max-w-100"
      //  style={{ flex: 1, padding: '2rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '1rem', backgroundColor: 'white' }}
      >
        <h2 className="text-center text-2xl font-bold"
        //  style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}
         >Welcome!</h2>
        <p  className="text-center text-x font-bold text-blue-600"
        // style={{ textAlign: 'center', color: '#3b82f6' }}
        >Sign in to your account</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-1 mt-5 mb-2 border rounded-xl h-12 "
          // style={{ display: 'block', width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-1 mt-5 mb-2 border rounded-xl h-12 "

          // style={{ display: 'block', width: '100%', padding: '0.75rem', marginBottom: '1rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleLogin}
          className="block w-full p-1 mt-5 mb-2 border rounded-xl h-12 bg-blue-500 hover:bg-green-500 "

          // style={{ width: '100%', padding: '0.75rem', backgroundColor: '#3b82f6', color: 'white', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Login
        </button>
        {message && <p style={{ textAlign: 'center', color: message.includes('successful') ? 'green' : 'red', marginTop: '1rem' }}>{message}</p>}
        <p className="text-center mt-5">Don't have Account<a className="text-blue-600" href="/Register"> Register</a> ?</p>
      </div>
    </div>
  );
};

export default LoginPage;
