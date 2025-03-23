// src/ProfilePage.jsx
import React, { useState } from "react";

const Profile = () => {
  // Initial Farmer Data
  const [farmer, setFarmer] = useState({
    name: "Ramesh Kumar",
    mobile: "7020000000",
    address: "Village Palampur, Himachal Pradesh",
    totalOrders: 25,
    walletBalance: 1500,
    membership: "Premium",
    recentOrders: [
      { id: 101, item: "Organic Fertilizer", price: 500 },
      { id: 102, item: "Tomato Seeds", price: 300 },
      { id: 103, item: "Irrigation Pipe", price: 700 },
    ],
  });

  // Editable State
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...farmer });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save Changes
  const handleSave = () => {
    setFarmer({ ...formData });
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">👨‍🌾 Farmer Profile</h2>

        {/* Profile Form / Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Section */}
          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Name</label>
              {editMode ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              ) : (
                <p className="text-lg">{farmer.name}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold">Mobile</label>
              {editMode ? (
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              ) : (
                <p className="text-lg">{farmer.mobile}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold">Address</label>
              {editMode ? (
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
              ) : (
                <p className="text-lg">{farmer.address}</p>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Total Orders:</strong> {farmer.totalOrders}
            </p>
            <p className="text-lg">
              <strong>Wallet Balance:</strong> ₹{farmer.walletBalance}
            </p>
            <p className="text-lg">
              <strong>Membership Status:</strong> {farmer.membership}
            </p>
          </div>
        </div>

        {/* Edit / Save Button */}
        {editMode ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Save Changes
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
         Edit Profile
          </button>
        )}

<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ml-5">
<a href="/Cart">Cart</a>
</button>
        {/* Recent Orders Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2"> Recent Orders</h3>
          <div className="h-40 overflow-y-auto border rounded-lg p-3 bg-gray-50">
            {farmer.recentOrders.map((order) => (
              <div
                key={order.id}
                className="p-3 mb-2 bg-white border rounded-lg shadow-sm"
              >
                <p>
                  <strong>Order #{order.id}:</strong> {order.item} - ₹
                  {order.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
