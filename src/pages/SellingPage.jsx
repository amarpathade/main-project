import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';


export default function SellingPage() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    description: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [sellers, setSellers] = useState([
    { id: 1, name: 'AgroMart', location: 'Delhi', product: 'Wheat' },
    { id: 2, name: 'FreshFarmers', location: 'Punjab', product: 'Vegetables' },
    { id: 3, name: 'GreenHarvest', location: 'Maharashtra', product: 'Fruits' }
  ]);
  
  const [calling, setCalling] = useState(false);
  const [callStatus, setCallStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addProduct = () => {
    setProducts([...products, { ...formData, id: Date.now() }]);
    setFormData({ name: '', price: '', quantity: '', description: '' });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const contactSeller = (seller) => {
    setCalling(true);
    setCallStatus('Calling...');
    setTimeout(() => {
      setCallStatus('No Response. Try Again Later.');
      setTimeout(() => {
        setCalling(false);
        setCallStatus('');
      }, 2000);
    }, 3000);
  };

  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    seller.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Farmer Dashboard</h1>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
          <Input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price per kg/quintal"
          />
          <Input
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Available Quantity"
          />
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
          />
        </div>
        <Button onClick={addProduct} className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white">
          Add Product
        </Button>
      </div>

      <h2 className="text-2xl mb-4">My Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">Price: ₹{product.price}</p>
            <p className="text-gray-600">Quantity: {product.quantity} kg</p>
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            <Button onClick={() => deleteProduct(product.id)} className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white">
              Delete Product
            </Button>
          </div>
        ))}
      </div>

      {/* Seller Search Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl mb-4">Search for Sellers</h2>
        <Input
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by name, location, or product"
          className="mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSellers.length > 0 ? (
            filteredSellers.map((seller) => (
              <div key={seller.id} className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">{seller.name}</h3>
                <p className="text-gray-600">Location: {seller.location}</p>
                <p className="text-gray-600">Product: {seller.product}</p>
                <Button
                  onClick={() => contactSeller(seller)}
                  className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Contact Seller
                </Button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No sellers found</p>
          )}
        </div>
      </div>

      {calling && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center relative">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{callStatus}</h2>
            <p className="text-gray-500">Please wait while we connect you...</p>
          </div>
        </div>
      )}
    </div>
  );
}
