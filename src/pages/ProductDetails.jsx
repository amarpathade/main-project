import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Organic Seeds", price: 150, category: "Seeds", description: "High-quality organic seeds for farming." },
  { id: 2, name: "Nutrient Pack", price: 300, category: "Nutrients", description: "Essential nutrients for soil enrichment." },
  { id: 3, name: "Irrigation System", price: 1200, category: "Hardware", description: "Efficient irrigation system for large fields." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-600">Product Not Found!</h2>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-gray-600 my-2">{product.description}</p>
      <p className="text-green-600 text-xl">₹{product.price}</p>
    </div>
  );
};

export default ProductDetails;
