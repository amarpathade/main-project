// src/CartPage.jsx
import React, { useState, useEffect } from "react";

const CartPage = () => {
  // Initial Cart Data
  const [cart, setCart] = useState([
    { id: 1, name: "Organic Fertilizer", price: 500, quantity: 2 },
    { id: 2, name: "Tomato Seeds", price: 300, quantity: 1 },
    { id: 3, name: "Irrigation Pipe", price: 700, quantity: 1 },
  ]);

  // Modal & Summary State
  const [showModal, setShowModal] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  // Increase Quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Remove Item
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Calculate Total Price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle Checkout - Open Modal
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("🛒 Your cart is empty. Add some items first!");
    } else {
      setShowModal(true);
    }
  };

  // Close Modal & Show Order Summary
  const closeModal = () => {
    setOrderDetails({
      items: cart,
      total: getTotalPrice(),
    });
    setShowModal(false);
    setTimeout(() => {
      setShowSummary(true);
      setFadeIn(true);
      setCart([]); // Empty cart after order
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6">
        {/* Show Order Summary after Checkout */}
        {showSummary ? (
          <div
            className={`transition-opacity duration-500 ${
              fadeIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
              📦 Order Summary
            </h2>

            <div className="space-y-4">
              {orderDetails?.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <p className="text-lg">{item.name}</p>
                  <p className="font-semibold">
                    {item.quantity} x ₹{item.price} = ₹
                    {item.quantity * item.price}
                  </p>
                </div>
              ))}
              <div className="text-right mt-4">
                <h3 className="text-xl font-bold">
                  🧾 Total: ₹{orderDetails?.total}
                </h3>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6">
              🎉 Thank you for shopping with us!
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items Section */}
            <h2 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h2>

            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty!</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center bg-gray-50 p-4 border rounded-lg shadow-sm"
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Price: ₹{item.price}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 px-2 py-1 rounded-lg"
                      >
                        ➖
                      </button>
                      <span className="text-lg font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 px-2 py-1 rounded-lg"
                      >
                        ➕
                      </button>
                    </div>

                    <div className="flex items-center space-x-4">
                      <p className="font-bold">₹{item.price * item.quantity}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        ❌ Remove
                      </button>
                    </div>
                  </div>
                ))}

                {/* Total Section */}
                <div className="text-right mt-4">
                  <h3 className="text-xl font-semibold">
                    🧾 Total: ₹{getTotalPrice()}
                  </h3>
                </div>
              </div>
            )}

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className={`mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 ${
                cart.length === 0 ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={cart.length === 0}
            >
              ✅ Proceed to Checkout
            </button>
          </>
        )}

        {/* Order Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                🎉 Order Confirmed!
              </h3>

              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <p className="text-lg">{item.name}</p>
                    <p className="font-semibold">
                      {item.quantity} x ₹{item.price} = ₹
                      {item.quantity * item.price}
                    </p>
                  </div>
                ))}
                <div className="text-right mt-4">
                  <h3 className="text-xl font-bold">
                    Total: ₹{getTotalPrice()}
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                 Close & Show Summary
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
