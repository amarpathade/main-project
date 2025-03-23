import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Organic Seeds", price: 150, category: "Seeds" },
  { id: 2, name: "Nutrient Pack", price: 300, category: "Nutrients" },
  { id: 3, name: "Irrigation System", price: 1200, category: "Hardware" },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
