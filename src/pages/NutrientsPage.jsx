import { useState } from "react";
import { ShoppingCart, DollarSign, Eye, X } from "lucide-react";
import { QRCode } from "react-qrcode-logo"; // ✅ Correct import for QR code

// ✅ Sample nutrients data with extra details
const nutrients = [
  {
    id: 1,
    name: "Nitrogen Fertilizer",
    description: "Boosts plant growth with essential nitrogen.",
    price: 1500.0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPt441WWfQ7UvlCTTD5QgqrWywurG-VHMtbg&s",
    composition: "Nitrogen (N) - 46%, Urea - 54%",
    benefits:
      "Increases leaf growth, enhances photosynthesis, and improves plant vigor.",
    usage: "Apply 1 kg per 100 sq. meters during the vegetative stage.",
    manufacturer: "AgroTech Fertilizers Pvt. Ltd.",
    expiry: "Best before 24 months from manufacturing date.",
  },
  {
    id: 2,
    name: "Phosphorus Fertilizer",
    description: "Promotes strong root development.",
    price: 1800.0,
    image: "https://eos.com/wp-content/uploads/2024/07/phosphorus-fertilizers-dap.png.webp",
    composition: "Phosphorus (P) - 50%, Rock Phosphate - 50%",
    benefits:
      "Improves root development, enhances flowering, and increases fruit yield.",
    usage: "Apply 500g per 100 sq. meters before flowering stage.",
    manufacturer: "GreenGrow Solutions",
    expiry: "Best before 18 months from manufacturing date.",
  },
];

const NutrientsPage = () => {
  const [selectedNutrient, setSelectedNutrient] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  // ✅ Show Product Details
  const handleShowDetails = (item) => {
    setSelectedNutrient(item);
    setShowDetails(true);
  };

  // ✅ Handle Add to Cart
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart successfully! 🛒`);
  };

  // ✅ Handle Buy Now
  const handleBuyNow = (item) => {
    setSelectedNutrient(item);
    setShowBuyForm(true);
  };

  // ✅ Handle Order Submission
  const handleOrderSubmit = () => {
    alert(
      `Order placed for ${quantity} unit(s) of ${selectedNutrient.name} via ${paymentMethod}! 🎉`
    );
    setShowBuyForm(false);
  };

  // ✅ Close Modals
  const closeModal = () => {
    setShowDetails(false);
    setShowBuyForm(false);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* ✅ Nutrients Cards Loop */}
      {nutrients.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
        >
          {/* ✅ Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-xl"
          />
          {/* ✅ Product Name & Description */}
          <h3 className="text-xl font-bold mt-4">{item.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{item.description}</p>
          {/* ✅ Product Price */}
          <p className="text-green-600 font-bold text-lg mt-2">
            ₹{item.price.toFixed(2)}
          </p>

          {/* ✅ Action Buttons */}
          <div className="mt-4 flex flex-col space-y-2">
            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(item)}
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button
              onClick={() => handleBuyNow(item)}
              className="flex items-center bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Buy Now
            </button>

            {/* See Details Button */}
            <button
              onClick={() => handleShowDetails(item)}
              className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
            >
              <Eye className="w-5 h-5 mr-2" />
              See Details
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Modal for Product Details */}
      {showDetails && selectedNutrient && (
        <div className="fixed inset-0 bg-transprent backdrop-blur-3xl bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedNutrient.name}</h2>
            <img
              src={selectedNutrient.image}
              alt={selectedNutrient.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div className="text-sm text-gray-700 space-y-3">
              <p>{selectedNutrient.description}</p>
              <p>
                <strong>Price:</strong> ₹{selectedNutrient.price.toFixed(2)}
              </p>
              <p>
                <strong>Composition:</strong> {selectedNutrient.composition}
              </p>
              <p>
                <strong>Benefits:</strong> {selectedNutrient.benefits}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Modal for Buy Now Form */}
      {showBuyForm && selectedNutrient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold mb-4">Buy Now: {selectedNutrient.name}</h2>

            {/* ✅ Quantity Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full border-gray-300 rounded-lg p-2 mt-1"
                min="1"
              />
            </div>

            {/* ✅ Payment Method Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Payment Method:</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full border-gray-300 rounded-lg p-2 mt-1"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="Online">Online Payment</option>
              </select>
            </div>

            {/* ✅ Show QR Code if Online Payment Selected */}
            {paymentMethod === "Online" && (
              <div className="flex justify-center my-4">
                <QRCode
                  value={`upi://pay?pa=farmer@upi&pn=E-Farming&mc=1234&tid=txn12345&tr=123456&tn=Payment for ${selectedNutrient.name}&am=${selectedNutrient.price}&cu=INR`}
                  size={150}
                  qrStyle="dots"
                  fgColor="#2563EB"
                  eyeColor="#4F46E5"
                />
              </div>
            )}

            {/* ✅ Submit Button */}
            <button
              onClick={handleOrderSubmit}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutrientsPage;
