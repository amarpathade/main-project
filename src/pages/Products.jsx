import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">🌱 Farming Products</h2>
      <ProductList />
    </div>
  );
};

export default Products;
