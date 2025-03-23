import { useState } from "react";
import { ShoppingCart, DollarSign, X } from "lucide-react";
import { QRCode } from "react-qrcode-logo"; // ✅ Correct import for QR

// ✅ Sample seed data
const seeds = [
  {
    id: 1,
    name: "Wheat Seeds",
    description: "High-quality wheat seeds for better yield.",
    price: 150.0,
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Rice Seeds",
    description: "Premium quality rice seeds.",
    price: 120.0,
    image: "https://m.media-amazon.com/images/I/81Voy6TeZtL.jpg",
  },
  {
    id: 3,
    name: "Corn Seeds",
    description: "Organic corn seeds with high germination rate.",
    price: 180.0,
    image: "https://m.media-amazon.com/images/I/71iUXwl3vAL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    name: "Barley Seeds",
    description: "Top-quality barley seeds for high yield.",
    price: 130.0,
    image: "https://nourishyou.in/cdn/shop/files/4_b489e4af-2030-4d4b-ac9f-c6ed9e7d947a_2400x.jpg?v=1733894494",
  },
  {
    id: 5,
    name: "Sunflower Seeds",
    description: "Rich quality sunflower seeds.",
    price: 160.0,
    image: "https://nourishyou.in/cdn/shop/files/4_b489e4af-2030-4d4b-ac9f-c6ed9e7d947a_2400x.jpg?v=1733894494",
  },
  {
    id: 6,
    name: "Soybean Seeds",
    description: "Best quality soybean seeds.",
    price: 140.0,
    image: "https://tiimg.tistatic.com/fp/1/007/799/100-percent-vegetarian-gluten-free-healthy-organic-high-protein-soyabean-seed-986.jpg",
  },
];

const SeedProducts = () => {
  // ✅ States for handling modal, quantity, and selected product
  const [quantity, setQuantity] = useState(1);
  const [selectedSeed, setSelectedSeed] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [showQR, setShowQR] = useState(false);

  // ✅ Open modal for Buy Now
  const handleBuyNow = (seed) => {
    setSelectedSeed(seed);
    setQuantity(1);
    setShowModal(true);
    setPaymentMethod("COD");
    setDiscountedPrice(seed.price); // Default price without discount
    setShowQR(false); // Hide QR initially
  };

  // ✅ New: Add to Cart with Alert
  const handleAddToCart = (seed) => {
    alert(`${seed.name} added to cart successfully! 🛒`); // Show success alert
  };

  // ✅ Close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // ✅ Payment method selection
  const handlePaymentChange = (e) => {
    const method = e.target.value;
    setPaymentMethod(method);

    if (method === "Online") {
      // ✅ Apply discount for online payment
      setDiscountedPrice(selectedSeed.price * 0.9); // 10% Discount
      setShowQR(true);
    } else {
      setDiscountedPrice(selectedSeed.price);
      setShowQR(false);
    }
  };

  // ✅ Confirm Order and alert success message
  const submitOrder = () => {
    alert(
      `Order placed successfully!\nProduct: ${selectedSeed.name}\nQuantity: ${quantity}\nPayment: ${paymentMethod}\nAmount: ₹${(
        discountedPrice * quantity
      ).toFixed(2)}`
    );
    setShowModal(false);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* ✅ Seed Cards Loop */}
      {seeds.map((seed) => (
        <div
          key={seed.id}
          className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
        >
          {/* ✅ Seed Image */}
          <img
            src={seed.image}
            alt={seed.name}
            className="w-full h-48 object-cover rounded-xl"
          />
          {/* ✅ Seed Name & Description */}
          <h3 className="text-xl font-bold mt-4">{seed.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{seed.description}</p>
          {/* ✅ Seed Price */}
          <p className="text-green-600 font-bold text-lg mt-2">
            ₹{seed.price.toFixed(2)}
          </p>

          {/* ✅ Action Buttons */}
          <div className="mt-4 flex space-x-2">
            {/* Buy Now Button */}
            <button
              onClick={() => handleBuyNow(seed)}
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition h-10"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Buy Now
            </button>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(seed)}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition h-10"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Modal for Order Form */}
      {showModal && selectedSeed && (
        <div className="fixed inset-0 bg-transprent backdrop-blur-3xl bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            {/* Close Modal Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            {/* Modal Title */}
            <h2 className="text-xl font-bold mb-4">Confirm Your Order</h2>

            {/* ✅ Product Info */}
            <div className="mb-4">
              <p className="text-lg font-semibold">{selectedSeed.name}</p>
              <p className="text-gray-500">
                Price: ₹{discountedPrice.toFixed(2)} x {quantity}
              </p>
            </div>

            {/* ✅ Quantity Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <div className="flex items-center mt-1">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="bg-gray-200 px-3 py-1 rounded-lg"
                >
                  -
                </button>
                <span className="mx-3">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-200 px-3 py-1 rounded-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* ✅ Payment Method Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Payment Method
              </label>
              <select
                value={paymentMethod}
                onChange={handlePaymentChange}
                className="w-full mt-1 p-2 border rounded-lg"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="Online">Online Payment (10% Discount)</option>
              </select>
            </div>

            {/* ✅ QR Code for Online Payment */}
            {showQR && (
              <div className="my-4 text-center">
                <p className="text-sm text-green-600 mb-2">
                  Scan to Pay and Get 10% Discount!
                </p>
                <QRCode value={`https://payment-link.com/${selectedSeed.id}`} size={150} />
              </div>
            )}

            {/* ✅ Submit Order Button */}
            <button
              onClick={submitOrder}
              className="bg-green-500 text-white w-full py-2 rounded-lg hover:bg-green-600 transition"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeedProducts;
