
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="text-xl font-bold mt-4">{product.name}</h3>
      <p className="text-lg font-bold text-green-600">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
