import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainlogo from '../assets/images/mainlogin.webp'
import { Link } from 'lucide-react';


export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User registered:', formData);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <img src={mainlogo} alt="Farming" className="rounded-2xl ml-18" />
      </div>
      <div className="w-100 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-lg"
            required
          />
          <input
            type="number"
            name="number"
            placeholder="Number"
            value={formData.number}
            onChange={handleChange}
            className="w-full p-2 mb-6 border rounded-lg"
            required
          />
           <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-6 border rounded-lg"
            required
          />
           <input
            type="password"
            name="conform password"
            placeholder="conform Password"
            value={formData.conformpassword}
            onChange={handleChange}
            className="w-full p-2 mb-6 border rounded-lg"
            required
          />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-lg">Sign Up</button>
          <p className='text-center mt-3 text-blue-600'><a href="/">Log in ?</a></p>
        </form>
      </div>
    </div>
  );
}
