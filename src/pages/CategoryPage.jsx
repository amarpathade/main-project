import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// Dummy Product Data
const allProducts = [
  { id: 1, name: "Organic Seeds", price: 150, category: "seeds", image: "/images/seeds.jpg" },
  { id: 2, name: "Nutrient Pack", price: 300, category: "nutrients", image: "/images/nutrients.jpg" },
  { id: 3, name: "Irrigation System", price: 1200, category: "hardware", image: "/images/hardware.jpg" },
  { id: 4, name: "Tractor Tools", price: 5000, category: "tools-&-equipment", image: "/images/tools.jpg" },
];

const CategoryPage = () => {
  const { category } = useParams();
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  if (filteredProducts.length === 0) {
    return <div className="text-center text-red-500">No products found in this category!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center capitalize">
        🛒 {category.replace("-", " ")} Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
