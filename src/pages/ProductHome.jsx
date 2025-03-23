import { Link } from "react-router-dom";

const categories = [
  {
    name: "Seeds",
    image: "data:image/jpeg;base64,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",
    description: "High-quality organic seeds for better farming.",
  },
  {
    name: "Hardware",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoggrd_yiWcnxMBylcUcqhwAdcCACWeJL6WA&s",
    description: "Durable farming hardware and equipment.",
  },
  {
    name: "Nutrients",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_h4snopMgDkdJ1iAtT7vovmspzFBq0KR9g&s",
    description: "Essential nutrients to boost crop growth.",
  },
  {
    name: "Tools & Equipment",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DKlKsw0UFJHF6HmBK_-H64KvLyL802qBIA&s",
    description: "Advanced tools for modern farming.",
  },
];

const ProductHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🛒 Farming Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products/${category.name.toLowerCase().replace(" ", "-")}`}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold mt-4">{category.name}</h3>
            <p className="text-gray-600 mt-2">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductHome;
