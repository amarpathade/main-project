import { useState } from "react";
import { ShoppingCart, DollarSign, X } from "lucide-react";
import { QRCode } from "react-qrcode-logo"; // ✅ Correct QR import

// ✅ Sample hardware data
const hardware = [
  {
    id: 1,
    name: "Tractor Plough",
    description: "Durable and efficient plough for tractors.",
    price: 12000.0,
    image: "https://5.imimg.com/data5/VA/PT/EE/SELLER-36951252/agricultural-plough.jpg",
  },
  {
    id: 2,
    name: "Water Pump",
    description: "High-power water pump for irrigation.",
    price: 8000.0,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjAodBLb28qPp4PlNinPodB_M9VFjE6xEpQEtO8ebkOQKyx2vM1u8hZrzPZ2U1jZIj6vRWReSR6wpXDLEbIjCXDyRixm8X2BwPJDxuDqARbTkF9rxiISW5TYV9",
  },
  {
    id: 3,
    name: "Sprayer Machine",
    description: "Automatic sprayer for pesticides and fertilizers.",
    price: 5000.0,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9uF_DkJh714Ofh61GgzSklWEFJILF92dxKANGk3nWyq8fNG02XX29iwQ_hybkjkNyGeM2HWl56QJUku0l-0eYKXvvfDEuudCGS790pXdR9J4_gqbC-BF8",
  },
  {
    id: 4,
    name: "Seed Drill",
    description: "Precision seed drill for accurate planting.",
    price: 15000.0,
    image: "https://captaintractors.com/UploadedImages/Mechanical%20seed%20drill_c54b29fb-b9d3-4bc3-81c7-2a7ef94b6ccb.jpg",
  },
  {
    id: 5,
    name: "Harvester",
    description: "Advanced harvester with high efficiency.",
    price: 25000.0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD-D05fO_ci6Nr1aZ9dLOmc0ngJJgmlfWmoQ&s",
  },
  {
    id: 6,
    name: "Power Tiller",
    description: "Multi-functional power tiller for soil preparation.",
    price: 18000.0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXLSdaGGpIlfdYvqNiYKjMyU129SP7degiBA&s",
  },
];

const HardwarePage = () => {
  // ✅ State handling
  const [quantity, setQuantity] = useState(1);
  const [selectedHardware, setSelectedHardware] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [showQR, setShowQR] = useState(false);

  // ✅ Open modal for Buy Now
  const handleBuyNow = (item) => {
    setSelectedHardware(item);
    setQuantity(1);
    setShowModal(true);
    setPaymentMethod("COD");
    setDiscountedPrice(item.price);
    setShowQR(false);
  };

  // ✅ Add to Cart with Alert
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart successfully! 🛒`);
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
      setDiscountedPrice(selectedHardware.price * 0.9); // 10% discount
      setShowQR(true);
    } else {
      setDiscountedPrice(selectedHardware.price);
      setShowQR(false);
    }
  };

  // ✅ Confirm Order
  const submitOrder = () => {
    alert(
      `Order placed successfully!\nProduct: ${selectedHardware.name}\nQuantity: ${quantity}\nPayment: ${paymentMethod}\nAmount: ₹${(
        discountedPrice * quantity
      ).toFixed(2)}`
    );
    setShowModal(false);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* ✅ Hardware Cards Loop */}
      {hardware.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
        >
          {/* ✅ Hardware Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover rounded-xl"
          />
          {/* ✅ Hardware Name & Description */}
          <h3 className="text-xl font-bold mt-4">{item.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{item.description}</p>
          {/* ✅ Hardware Price */}
          <p className="text-green-600 font-bold text-lg mt-2">
            ₹{item.price.toFixed(2)}
          </p>

          {/* ✅ Action Buttons */}
          <div className="mt-4 flex space-x-2">
            {/* Buy Now Button */}
            <button
              onClick={() => handleBuyNow(item)}
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition h-10"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Buy Now
            </button>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(item)}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition h-10"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Modal for Order Form */}
      {showModal && selectedHardware && (
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
              <p className="text-lg font-semibold">{selectedHardware.name}</p>
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
                <QRCode value={`https://payment-link.com/${selectedHardware.id}`} size={150} />
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

export default HardwarePage;
