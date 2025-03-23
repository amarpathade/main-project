import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import FarmingBot from './components/EfarmingChatbot';
import LoginPage from './pages/Login';
import Register from './pages/Register';
// import Register from './components/Register';
import Home from './pages/Home';
import EfarmingServices from './pages/EfarmingServices'
import EfarmingWeather from './pages/EfarmingWeather'
import About from './pages/About'
import CropGuidance from './pages/CropGuidence'
import SeedMarketPricesPage from './pages/SeedMarketPricesPage'
import PestControl from './pages/PestCantrol';
import CropManagement from './pages/CropManagement';
import FarmersDashboard from './pages/FarmersDashboard';
import Contact from './pages/Contact';
// import Cart from './pages/Cart';
import EnquiryForm from './pages/Enquiry';
import SchemeList from './pages/Scheme';
// import Product from './pages/Product';
import Products from './pages/Products'
import ProductDetails from "./pages/ProductDetails";
import ProductHome from './pages/ProductHome';
import CategoryPage from './pages/CategoryPage';
// import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import SeedsPage from "./pages/SeedsPage";
import NutrientsPage from './pages/NutrientsPage';
import HardwarePage from './pages/HardwarePage';
import ProductList from './components/ProductList';
import SellingPage from './pages/SellingPage';
import Profile from './pages/Profile';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // 🛒 Add to Cart Function
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // ❌ Remove from Cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // 🎉 Clear Cart after checkout
  const clearCart = () => {
    setCartItems([]);
  };


  return (
    <Router>
      <div>
        {/* Menu and FarmingBot should not be visible on the login or signup page */}
        {window.location.pathname !== '/' && window.location.pathname !== '/Register' && window.location.pathname !=='/CropGuidance' && window.location.pathname !=='/EfarmingWeather' && window.location.pathname !=='/FarmersDashboard' &&(
          <>
            <Menu />
            <FarmingBot />
          </>
        )}
        {/* route code */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Home" element={<Home />}/>
          <Route path='/Register' element={<Register />} />
          <Route path='/EfarmingServices' element={<EfarmingServices/>}/>
          <Route path='/EfarmingWeather' element={<EfarmingWeather/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/CropGuidance' element={<CropGuidance/>}/>
          <Route path='/SeedMarketPricesPage' element={<SeedMarketPricesPage/>}/>
          <Route path='/PestCabtrol' element={<PestControl/>}/>
          <Route path='FarmersDashboard' element={<FarmersDashboard/>}/>
          <Route path='CropManagement' element={<CropManagement/>}/>
          <Route path='Contact' element={<Contact/>} />
          {/* <Route path='Cart' element={<Cart/>}/> */}
          <Route path='EnquiryForm' element={<EnquiryForm/>}/>
          <Route path='SchemeList' element={<SchemeList/>}/>
          <Route path='Products' element={<Products/>}/>
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route path="/ProductHome" element={<ProductHome/>} />
          {/* <Route path="/product-home" element={<ProductHome />} /> */}
        <Route path="/products/:category" element={<CategoryPage />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
        {/* <Route path="/products/seeds" element={<SeedsPage />} /> */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />} />

        <Route path="/products/seeds" element={<SeedsPage />} />
        <Route path='/SellingPage' element={<SellingPage/>} />
          <Route path="/products/nutrients" element={<NutrientsPage />} />
          <Route path="/products/hardware" element={<HardwarePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </div>
    </Router>
  );
}
export default App;
