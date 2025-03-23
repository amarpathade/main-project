import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const FarmersDashboard = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState('https://t4.ftcdn.net/jpg/04/62/66/23/240_F_462662343_Xq1QxYaL6aGdelYq3o2Yfo6saJrMSx0x.jpg');

  const storedEmail = 'user@gmail.com'; // Example stored email

  const handleLogin = () => {
    if (email === storedEmail) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Email not matched');
      setIsLoggedIn(false);
    }
  };

  const [farmerProfile, setFarmerProfile] = useState({
    id: 'F12345',
    name: 'Alok Raut',
    address: 'Pardi Nagpur Maharashtra',
    mobile: '9000000000'
  });

  const farmerActivities = [
    'Planted wheat on 5 acres',
    'Checked market prices',
    'Ordered fertilizers',
    'Viewed weather updates'
  ];

  const activityTimeline = [
    { time: '08:00 AM', status: 'Active' },
    { time: '11:00 AM', status: 'Inactive' },
    { time: '02:00 PM', status: 'Active' },
    { time: '02:00 PM', status: 'Inactive' },
    { time: '05:00 PM', status: 'Inactive' },
    { time: '08:00 PM', status: 'Inactive' }
  ];

  const activeCount = activityTimeline.filter(item => item.status === 'Active').length;
  const inactiveCount = activityTimeline.filter(item => item.status === 'Inactive').length;

  const data = [
    { name: 'Active', value: activeCount },
    { name: 'Inactive', value: inactiveCount }
  ];

  const COLORS = ['#4CAF50', '#F44336'];

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFarmerProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4">
      {!isLoggedIn ? (
        <div className="w-full h-100 max-w-md p-6 bg-white rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Farmer Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 border rounded-xl mb-4 mt-10"
          />
          <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded-xl mt-5">Login</button>
          {error && <p className="text-red-500 mt-7 text-center">{error}</p>}
          <p className='mt-10 text-xs text-center'>Enter your email id to show farmer dashboard </p>
        </div>
      ) : (
        <div className="flex w-full max-w-5xl">
          <div className="w-2/3 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Welcome to Farmer Dashboard</h2>
            <div className="mb-6 flex items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mr-6 ml-10">
                <img src={profilePic} alt="Farmer Profile" className="w-full h-full object-cover" />
                {isEditing && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="mt-2 text-sm"
                  />
                )}
              </div>
              <div className="flex-1 text-left ml-15">
                <h3 className="text-xl font-semibold mb-2">Farmer Profile</h3>
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={farmerProfile.name}
                      onChange={handleProfileChange}
                      className="w-full p-2 border rounded-xl mb-2"
                    />
                    <input
                      type="text"
                      name="address"
                      value={farmerProfile.address}
                      onChange={handleProfileChange}
                      className="w-full p-2 border rounded-xl mb-2"
                    />
                    <input
                      type="text"
                      name="mobile"
                      value={farmerProfile.mobile}
                      onChange={handleProfileChange}
                      className="w-full p-2 border rounded-xl mb-2"
                    />
                  </div>
                ) : (
                  <div>
                    <p><strong>ID:</strong> {farmerProfile.id}</p>
                    <p><strong>Name:</strong> {farmerProfile.name}</p>
                    <p><strong>Address:</strong> {farmerProfile.address}</p>
                    <p><strong>Mobile:</strong> {farmerProfile.mobile}</p>
                  </div>
                )}
                <button
                  onClick={handleEditProfile}
                  className="mt-4 bg-blue-500 text-white p-2 rounded-xl"
                >
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
            </div>
            <hr />
            <h3 className="text-xl font-semibold mb-2">Activities</h3>
            <ul className="list-disc pl-5">
              {farmerActivities.map((activity, index) => (
                <li key={index} className="mb-2">{activity}</li>
              ))}
            </ul>
          </div>
          <div className="w-1/3 p-6">
            <h3 className="text-xl font-semibold mb-4">Activity Status Breakdown</h3>
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmersDashboard;